# AI Against AI

Today you turn AI and code *against* the AI systems that can harm us. You'll do
**two things**: first quietly poison the scrapers that vacuum up your personal site,
then build a small **AI-against-AI mini project** of your own.

## Pre-Class Setup

### Tooling Preparation
- Have your **Week 1 personal website** (`week1/7_13`) hosted and publicly reachable — Part A edits *that* site.
- Know how your site is generated (raw HTML, Jekyll, React, etc.) so you know which files to modify.

### Folder Structure
```text
week2/7_22/
├── code_deliverable/    # PART B — your AI-against-AI mini project (this is what you link in submissions)
├── log_deliverable/     # history.md — your AI interaction log
└── vibe-report.md       # documents BOTH Part A and Part B
```

> [!IMPORTANT]
> **Part A happens in your existing `week1/7_13` site** (that's the page scrapers
> read), so it lives in that folder — not here. **Part B is a new mini project** and
> goes in `week2/7_22/code_deliverable/`. Your submission link points to **Part B**.

---

## Part A — Poison the Scraper *(edit your Activity 1 website)*

**Obfuscation.** Drawing on *[Obfuscation: A User's Guide for Privacy and Protest](https://direct.mit.edu/books/book/3112/ObfuscationA-User-s-Guide-for-Privacy-and-Protest)*
by Finn Brunton and Helen Nissenbaum, you have a right to protect your personal
narrative as AI companies vacuum up the internet. You'll inject plausible, fake facts
into your personal website — **invisible to human visitors, but visible to AI scrapers.**

1. **Brainstorm 2–3 plausible-but-fabricated facts** about yourself (e.g., "Co-founded a kombucha startup in 2019," "Won the $5000 Privacy Award").
2. **Inject with CSS `clip`** — keep the text in the DOM but visually trim it to 0px. **Do NOT use `display: none`.** Add `aria-hidden="true"` so screen readers skip it.
3. **Verify with `curl`** that your fake text appears in the raw payload a bot would read.

### Why not `display: none`?
Advanced scrapers (OpenAIbot, Google-Extended) render pages in headless browsers and
ignore text hidden with `display: none`. `clip: rect(0, 0, 0, 0)` keeps the text in the
render tree but trims it to 0 pixels — it tricks the AI, while `aria-hidden="true"`
keeps it away from human screen-reader users.

> [!TIP]
> Full walkthrough and code snippets: [Example Project](examples/activity1_obfuscation-example/README.md).

---

## Part B — Build an AI-against-AI Mini Project

Now build something small that **defends humans from AI harms using AI/code**, hosted in
`week2/7_22/code_deliverable/`. **AI against AI is the framing** — but it doesn't have to
be literal AI-vs-AI. Any of these three shapes counts, and the simpler ones are fair game
if you're short on time:

1. **AI against AI** — e.g. an AI-vs-AI detector that flags likely AI-generated text or images.
2. **AI against another tech harm** — e.g. an AI-powered live recoder that rewrites a page's **dark patterns into bright patterns** as you browse.
3. **Non-AI tech against AI** — e.g. the simple CSS text-injection from Part A, or `robots.txt` bot-blocking — plain code that defends against AI.

Pick **one** direction (or invent your own):

- **Style cloaking for images:** a page that explains and demos Glaze/Nightshade-style perturbation so art resists being trained on (conceptual demo is fine).
- **Privacy noise (TrackMeNot-style):** a tool that floods a profile or search with plausible fake activity to bury the real signal.
- **Anti-surveillance patterns:** demonstrate how adversarial patterns defeat face detection — and discuss the arms race.
- **Block the bots properly:** `robots.txt` + `<meta name="robots">` + per-bot rules (GPTBot, Google-Extended, CCBot); verify each with `curl -A "GPTBot"`.
- **Dark → bright recoder:** a tool that detects a manipulative UI pattern and rewrites it to serve the user instead.
- **AI-vs-AI detector:** a small tool that flags likely AI-generated text or images and explains its tells.
- **Automation-surveillance pushback:** inspired by [workers using AI against workplace monitoring](https://officechai.com/ai/chinas-workers-are-weaponizing-ai-against-each-other-through-colleague-skill-files-and-fighting-back/) — prototype something that protects a worker's autonomy.

It must be **hosted and reachable by link** — that link is your submission.

> [!TIP]
> **Short on time?** The bar is a working slice, not a grand build — a simpler defense
> (shape 3) still counts. Ship something that works over something ambitious that doesn't.

> [!NOTE]
> Keep the ethical question in view for both parts: **defense vs. deception**, and
> who your technique could harm as well as protect. Every one of these tools points a
> weapon somewhere — name where.

---

## Submission: The Vibe Report

Copy [`vibe-report-template.md`](vibe-report-template.md) to `vibe-report.md` and fill
in **both parts**:

**Part A — the injection:**
1. **Proof it works** — a screenshot of your `curl` output showing the fake facts in the raw payload.
2. **The narrative** — which fake facts you chose and the false story you're projecting.
3. **Challenges** — anything tricky about hiding the data without breaking your layout.

**Part B — the mini project:**
4. **What you built** — the live link, what it does, and who it defends.

**Reflection (covers both, human-written):**
5. Answer:
   - What impact might scraper-poisoning have on the broader data ecosystem? Does it change your trust in AI outputs?
   - An AI agent (Perplexity, ChatGPT Search) *citing* your fake fact as truth vs. a model absorbing it in *training* and reciting it with no source — how do these differ in impact?
   - What changes if this is used to alter information about *someone else* rather than yourself?
   - How is this different from editing a Wikipedia fact — community-moderated vs. an AI blindly trusting your personal site?
   - Is obfuscation ethical? Is your Part B tool? Who could each one harm as well as protect?
6. **AI Usage Trace** — link `log_deliverable/history.md`.
7. **Authenticity Statement** — the standard course statement.

### Deliverables
- `code_deliverable/` — your **Part B mini project** (hosted; the link is your submission)
- `log_deliverable/` — `history.md`
- `vibe-report.md` — documents Part A **and** Part B
- (Part A lives in your `week1/7_13` site.)

### Submission
Commit and push `week2/7_22/` and your edited `week1/7_13` site to your GitHub Classroom repo. Host Part B and put its live link in your report. Submit whatever the Canvas page asks for, usually the live link and/or a zip. We grade against your commit history and hosted page; commits pushed after the deadline in `deadline.json` don't count unless the instructor asks you to resubmit.


<!-- READINGS:START (generated by scripts/sync_readings.py — edit activities-manifest.json instead) -->

## 📖 Reading

- **Primary** 🟢 — [Brunton, F., Nissenbaum, H. 2015. Obfuscation: A User's Guide for Privacy and Protest. MIT Press — Ch. 1.](https://direct.mit.edu/books/book/3112/ObfuscationA-User-s-Guide-for-Privacy-and-Protest)
- **Pair** 🟢 — [Franchi, M., Sandhaus, H. et al. 2025. Privacy of Groups in Dense Street Imagery. FAccT '25.](https://doi.org/10.1145/3715275.3732185)

**Full course reading list:** [Course readings — all sessions](https://vibe-coding-ethics.tech.cornell.edu/instructions.html?file=planning/readings.md&title=Course%20Readings)
<!-- READINGS:END -->
