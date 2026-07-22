#!/usr/bin/env python3
"""Runs inside a student's repo (GitHub Actions). Checks each DUE activity for the three
deliverables in their expected place and opens/updates ONE checklist issue on the repo.
Idempotent: it edits the same issue each run and never spams. Uses GITHUB_TOKEN (only
needs issues:write on its own repo — no org PAT)."""
import os, re, subprocess, urllib.request, datetime

REPO = os.environ["GITHUB_REPOSITORY"]                 # "Org/class-repo-xxx"
OWNER, NAME = REPO.split("/")
PAGES = f"https://{OWNER.lower()}.github.io/{NAME}"
MARKER = "📋 Submission checklist"                      # issue title = find-and-update key

# activity -> (label, due date). We only nag about activities whose day has arrived.
ACTIVITIES = [
    ("week1/7_13", "W1 Mon · Jul 13", "2026-07-13"),
    ("week1/7_14", "W1 Tue · Jul 14", "2026-07-14"),
    ("week1/7_15", "W1 Wed · Jul 15", "2026-07-15"),
    ("week2/7_20", "W2 Mon · Jul 20", "2026-07-20"),
    ("week2/7_21", "W2 Tue · Jul 21", "2026-07-21"),
    ("week2/7_22", "W2 Wed · Jul 22", "2026-07-22"),
    ("week3/7_27", "W3 Mon · Jul 27", "2026-07-27"),
    ("week3/7_28", "W3 Tue · Jul 28", "2026-07-28"),
]
TITLE_RE = re.compile(r"<title>(.*?)</title>", re.S | re.I)
PLACEHOLDER = ("Your Submission", "Not Found", "404")


def app_live(act):
    try:
        with urllib.request.urlopen(f"{PAGES}/{act}/code_deliverable/", timeout=20) as r:
            html = r.read().decode("utf8", "ignore") if r.status == 200 else ""
    except Exception:
        return False
    m = TITLE_RE.search(html)
    t = " ".join(m.group(1).split()) if m else ""
    return bool(t) and not any(p in t for p in PLACEHOLDER)


def main():
    today = datetime.date.today()
    lines, all_ok = [], True
    for act, label, due in ACTIVITIES:
        if datetime.date.fromisoformat(due) > today:
            continue
        if not os.path.isdir(act):
            continue
        app = app_live(act)
        report = os.path.isfile(f"{act}/vibe-report.md")
        log = os.path.isfile(f"{act}/log_deliverable/history.md")
        if app and report and log:
            lines.append(f"- ✅ **{label}** — hosted app, `vibe-report.md`, and log all present.")
            continue
        all_ok = False
        miss = []
        if not app:
            cd = f"{act}/code_deliverable"
            extra = []
            if os.path.isdir(cd):
                for root, _, files in os.walk(cd):
                    for fn in files:
                        rel = os.path.relpath(os.path.join(root, fn), cd)
                        if fn.lower().endswith(".html") and rel.lower() != "index.html":
                            extra.append(rel)
            if extra:
                shown = ", ".join(f"`{e}`" for e in sorted(extra)[:6])
                miss.append(f"we can see your files ({shown}), but the page opens to the starter "
                            f"placeholder. **Link them from `code_deliverable/index.html`** (or rename "
                            f"your main file to `index.html`) so your work shows at "
                            f"{PAGES}/{act}/code_deliverable/")
            else:
                miss.append("**hosted app** isn't showing yet — add your work to `code_deliverable/` "
                            f"with an `index.html`, and check Pages is deploying: "
                            f"{PAGES}/{act}/code_deliverable/")
        if not report:
            miss.append("**`vibe-report.md`** missing — fill it in at "
                        f"`{act}/vibe-report.md` (edit that file in place; don't leave it in a template).")
        if not log:
            miss.append(f"**`{act}/log_deliverable/history.md`** missing.")
        lines.append(f"- ⚠️ **{label}** — " + " ".join(f"\n    - {m}" for m in miss))

    body = ("_Automated check by course staff. This issue updates itself; nothing to reply to._\n\n"
            "Here's what we can (and can't) find in your repo for the activities due so far. "
            "Anything ⚠️ won't be graded until it's in the expected place — see the "
            "[submission policy](https://vibe-coding-ethics.tech.cornell.edu/instructions.html?file=planning/syllabus.md&title=Syllabus).\n\n"
            + "\n".join(lines)
            + ("\n\n🎉 **Everything due so far is in place — nice.**" if all_ok else
               "\n\nQuestions? Lunch office hours. You can fix all of this by editing files "
               "directly on github.com — no AI or coding needed."))

    # find our existing issue (any state) and update it; else create.
    found = subprocess.run(["gh", "issue", "list", "--state", "all", "--search",
                            f'"{MARKER}" in:title', "--json", "number,title", "--limit", "20"],
                           capture_output=True, text=True)
    num = None
    try:
        import json
        for it in json.loads(found.stdout):
            if it["title"].startswith(MARKER):
                num = it["number"]; break
    except Exception:
        pass
    if num:
        subprocess.run(["gh", "issue", "edit", str(num), "--body", body], check=False)
        subprocess.run(["gh", "issue", "reopen", str(num)], check=False) if not all_ok else None
        if all_ok:
            subprocess.run(["gh", "issue", "close", str(num)], check=False)
    else:
        subprocess.run(["gh", "issue", "create", "--title", MARKER, "--body", body], check=False)


if __name__ == "__main__":
    main()
