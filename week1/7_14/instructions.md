# Prompts that Steer the Vibe — Prompt Engineering Lab

> **Big idea:** "Vibe coding" leans on intuition and natural language; "prompt
> engineering" is the disciplined version — closer to writing software requirements.
> Today has one axis: **vibe-based vs. engineered prompting**. You'll feel the
> difference twice — first fast (the challenges), then for real (a deliberate
> revision of your own project).

## Pre-Class Setup

### Tooling Preparation
- Have your [Week 1 Day 1 site](../7_13/code_deliverable/) handy — you can reuse its content as the starting point for Activity 2.
- You may use any configured vibe coding tool (see the tool table in [7_13 instructions](../7_13/instructions.md)).
- Do the **Reading** (bottom of this page) first — Activity 2 uses the Anthropic toolkit techniques and the *Why Johnny Can't Prompt* iteration discipline directly.
- Have a timer ready (your phone is fine) — Activity 2 is strictly timed.

### Folder Structure
```text
week1/7_14/
├── code_deliverable/
│   ├── index.html           # starter index — list everything here
│   ├── (challenge outputs)  # Activity 1
│   ├── version-vibe/        # Activity 2, run 1
│   └── version-engineered/  # Activity 2, run 2
├── log_deliverable/         # history.md (auto-logged by your AI tool)
└── vibe-report.md           # start from vibe-report-template.md
```

---

## Activity 1 — The Challenges (quick, comparative)

A fast warm-up to *feel* the axis. Pick **one** of the four challenges below (two if
you're quick). Run both prompts **once each, in fresh chats — one shot, no fixing**.
The goal is a visceral side-by-side, not a polished artifact.

> [!NOTE]
> **We share in class right after.** Bring your two outputs and one sentence:
> where did vibes win, and where was engineering non-negotiable?

### Challenge A — Mood vs. Blueprint (a Pomodoro timer)
Vibes win on aesthetics; engineering wins on logic.
- **Vibe prompt:** *"Make me a chill Pomodoro timer that feels like a rainy coffee shop, soft colors."*
- **Engineered prompt:** *"Build a Pomodoro timer in HTML/CSS/JS. Requirements: 25min/5min split, Start + Reset buttons, a progress bar that goes green→red, and a console log per completed session."*
- **Compare:** visual appeal vs. functional correctness (does the vibe version forget Reset? get the math wrong?).

### Challenge B — Roleplay / Persona (a grade calculator)
Personas change code *quality*: comments, naming, error handling.
- **No persona:** *"Write a Python script for grade calculation."*
- **Role-based:** *"You are a senior software engineer. Write a clean, PEP8-compliant grade calculator with docstrings, error handling for non-numeric input, and descriptive names."*
- **Compare:** which is more readable and less likely to crash?

### Challenge C — Spec Density (a "link in bio" page)
How much does front-loading detail buy you in a single shot?
- **Vibe-first:** one short prompt, whatever comes to mind in 30 seconds.
- **Spec-first:** spend 10 minutes writing one detailed prompt (fonts, hex codes, flexbox) *before* hitting Enter.
- **Compare:** which single shot lands closer to a usable, mobile-responsive page?

### Challenge D — Vaporwave Frontend (a game login screen)
About communicating *non-technical* concepts.
- **Technical only:** *"Purple gradients, 20px border radius, sans-serif."*
- **Aesthetic vibe:** *"Make it feel like a 1980s neon arcade at midnight — vaporwave palette, buttons that glow like they're electrified."*
- **Compare:** which produced the more original, usable UI?

Save each output as its own file in `code_deliverable/` and list them in
`code_deliverable/index.html` (a starter index is provided). Fill in the
**quality comparison rubric** in your vibe report (the table is in the template).

---

## Activity 2 — Fork Your Brain (25 + 25 minutes)

Now the same axis, applied deliberately. You'll build **the same project twice** —
once with your engineering brain **off**, once with it **on** — spending exactly the
same amount of time on each. The two saved versions are your evidence.

### Pick your project
Something that is **genuinely interesting or useful to *you*** — a tool you'd
actually use, a page about an obsession, a tiny game, a gift for someone. Not an
exercise; yours.

### Pick your starting point (same for both runs)
- **From scratch, twice** — two empty folders, or
- **From your Day 1 website** — copy its content into `version-vibe/` and
  `version-engineered/` and build on top of it.

### Run 1 — Vibes only (⏱️ 25 minutes, start to finish)
Engineering brain **off**. Natural language, gut feel, chase the vibe, react to
what you see. Don't plan prompts — just talk. When the timer rings, **stop**,
whatever state it's in, and save it to `code_deliverable/version-vibe/`.

### Run 2 — Engineering brain on (⏱️ 25 minutes, start to finish)
Fresh start from the same starting point. Now be disciplined:
- **Spec first:** open with one engineered prompt using at least **two** Anthropic
  toolkit techniques:
  - **XML tags** to separate role / style / requirements:
    ```xml
    <role>Expert frontend developer</role>
    <style_guide>Dark mode, high contrast, neon borders</style_guide>
    <requirements>
    - Sidebar with 4 nav links
    - Central stats grid
    </requirements>
    ```
  - **Thinking space:** *"Before writing any code, explain your layout logic inside `<thinking>` tags."* Then check whether it actually understood the vibe before coding.
  - **Few-shot:** provide one *good* and one *bad* snippet as a style reference.
- **Iterate systematically, not opportunistically.** The core lesson of *Why Johnny
  Can't Prompt*: don't tinker. Before changing a prompt, know *why* the last one
  failed and change *one variable* at a time. No extra note-taking during the run —
  your tool's auto-log (`history.md`) captures every prompt, and you'll analyze
  them in the vibe report afterward.

When the timer rings, **stop** and save to `code_deliverable/version-engineered/`.

> [!IMPORTANT]
> **The timer is the experiment.** Equal time is what makes the two versions
> comparable — no "just five more minutes" on either run.

---

## Submission: The Vibe Report

Copy [`vibe-report-template.md`](vibe-report-template.md) to `vibe-report.md` and
fill it in. It walks you through:
1. **Showcase** — challenge outputs side by side + the two forked versions of your project.
2. **Challenge comparison** — the quality rubric for the challenge you picked.
3. **The fork** — what you built, how the two 25-minute runs felt and differed, which toolkit techniques you used in run 2, and what your prompt history (`history.md`) shows about how you iterated.
4. **When to use which** — when do you "give into the vibes," and when is engineering non-negotiable?
5. **Trace** — link to `history.md`, plus the authenticity statement.

### Deliverables
- `code_deliverable/` — challenge outputs + `version-vibe/` + `version-engineered/`, listed in `index.html`
- `log_deliverable/` — `history.md` (auto-logged)
- `vibe-report.md` — comparison + reflection + trace

### Submission
Submit on Canvas: upload a zip of the entire `week1/7_14/` folder and paste your deployed assignment link. Before submitting, commit and push your `code_deliverable/`, `log_deliverable/history.md`, and `vibe-report.md` to your GitHub Classroom repo. We grade the Canvas submission against your GitHub commit history and hosted page; commits pushed after the Canvas submission time do not count unless the instructor asks you to resubmit.


<!-- READINGS:START (generated by scripts/sync_readings.py — edit activities-manifest.json instead) -->

## 📖 Reading

- **Primary** 🔵 — [Zamfirescu-Pereira, J.D. et al. 2023. Why Johnny Can't Prompt. CHI '23.](https://dl.acm.org/doi/10.1145/3544548.3581388)
- **Reference** 🟡 — [Anthropic. Prompt engineering overview.](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
- **Optional** 🟢 — [Arun, S.K., Fischer, J.E. 2026. Encouraging thought before completion: task-specific selective friction in AI-assisted knowledge work. CHIWORK '26.](https://doi.org/10.1145/3808045.3808049)

**Full course reading list:** [Course readings — all sessions](https://vibe-coding-ethics.tech.cornell.edu/instructions.html?file=planning/readings.md&title=Course%20Readings)
<!-- READINGS:END -->
