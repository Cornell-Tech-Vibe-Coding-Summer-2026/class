# AGENTS-OPS.md — Course Operations (instructors & TAs)

Guidance for AI agents run by **instructors and TAs** doing course *operations* — syncing
repos, editing student/team repos, org-wide changes. This is **not** the student build
rule (that's [AGENTS.md](AGENTS.md)); read this when you are automating the course, not
building an app.

## ⚡ Be mindful of GitHub Actions load — this can break every student site at once

Every push to a student or team repo triggers its **GitHub Pages deploy** (~1–2 minutes
of Actions each). The org runs on a **limited monthly Actions budget**. A burst of pushes
or workflow re-runs across all ~23 repos can **exhaust the budget and break every
student's live site simultaneously** — deploys then fail in ~3 seconds with no logs and no
steps (this happened 2026‑07‑22, after agent PRs across all repos + repeated bot dispatches
+ normal deploys stacked up).

**Rules:**
- **Batch, then sync once.** Make all your edits, then run a single sync sweep — not one per change. One sweep = ~23 deploys; ten sweeps = ~230.
- **Don't re-dispatch a class-wide workflow repeatedly.** Trigger the reminder bot / a mass redeploy at most once per real need.
- **Avoid agents that commit to every individual student repo** unless necessary. Editing shared content (e.g. Project 2 instructions) inside all 19 personal repos triggered 19+ deploys and helped exhaust the budget — change it in the template/canonical repo instead.
- **One commit, not many.** When updating a file across repos, prefer a single API `PUT` per repo over a series of small commits (each commit is a deploy).
- **Check the budget before a big sweep:** Org → Settings → Billing & licensing → Actions. If usage is near the limit, raise the budget (or wait for the monthly reset) *before* pushing.
- **A push to the canonical `Vibe-Coding-Class/class` repo deploys only the course website** (one run) — that's fine. The cost multiplier is pushing to the 23 student/team repos.

## Course-ops facts that bite

- **Classroom repos are independent copies.** A student/team repo is snapshotted from the template at accept-time and does **not** track the template afterward. Template edits only reach *newly created* repos; existing ones need an explicit sync.
- **Sync with `git merge -X ours`** so a student's own edits win on conflict, while new files still land.
- **Students edit files in place** rather than copying them (they fill `*-template.md` instead of making `vibe-report.md`). Prefer shipping the final-named file directly.
- **Live sites are the source of truth for students**; the canonical content lives in `Vibe-Coding-Class/class` and deploys to the course domain. Don't let two people edit the same content in two places (canonical repo vs a team repo) — it diverges fast. Pick one source and port changes there.

## Coordinate

Two instructors automating the same material in parallel will collide (and multiply Actions
load). Agree on **one source of truth** per artifact, and say what mass operation you're
about to run before running it.
