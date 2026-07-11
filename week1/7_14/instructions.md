# Prompts that Steer the Vibe — Prompt Engineering Lab

> **Big idea:** "Vibe coding" leans on intuition and natural language; "prompt
> engineering" is the disciplined version — closer to writing software requirements.
> Today you'll run the same task two ways and *measure* where vibes win and where
> engineering is non-negotiable.

## Pre-Class Setup

### Tooling Preparation
- Have your hosted [Week 1 Day 1 site](../7_13/code_deliverable/) ready, or a fresh small web project you can edit.
- You may use any configured vibe coding tool (see the tool table in [7_13 instructions](../7_13/instructions.md)).
- Bring the [`prompt-log.md`](#prompt-log-required) discipline below — you'll record *why* you change each prompt, not just what you change.
- Do the **Reading** (bottom of this page) first — the activity uses the Anthropic toolkit and the *Why Johnny Can't Prompt* failure modes directly.

### Folder Structure
```text
week1/7_14/
├── code_deliverable/    # the artifact(s) you build today
├── log_deliverable/     # history.md (auto) + prompt-log.md
└── vibe-report.md       # your comparison write-up
```

---

## The Lab

Pick **one** of the four challenges below (or do two if you have time). Each is run
**twice** — once "vibe-first," once "engineered" — so you can compare the outputs
head-to-head.

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

### Challenge C — Iteration Race (a "link in bio" page)
Exposes the hidden cost of vibes: time spent fixing hallucinations.
- **Vibe-first:** one short prompt, then keep chatting to fix what's broken.
- **Spec-first:** spend 10 minutes writing one detailed prompt (fonts, hex codes, flexbox) *before* hitting Enter.
- **Compare:** who reaches a bug-free, mobile-responsive page in **fewer chat turns**?

### Challenge D — Vaporwave Frontend (a game login screen)
About communicating *non-technical* concepts.
- **Technical only:** *"Purple gradients, 20px border radius, sans-serif."*
- **Aesthetic vibe:** *"Make it feel like a 1980s neon arcade at midnight — vaporwave palette, buttons that glow like they're electrified."*
- **Compare:** which produced the more original, usable UI?

---

## Apply the Research

> [!TIP]
> There is no new artifact to build here — you're stress-testing the prompts from **The Lab** above. Part A and Part B produce *evidence*, not a new app: log every experimental prompt (and its one-variable change) as rows in `log_deliverable/prompt-log.md`, and write up what you found in the **Johnny findings** and **Toolkit effect** sections of `vibe-report.md`. Keep any notably different code versions in `code_deliverable/` so you can point to them.

### Part A — "Why Johnny Can't Prompt" failure modes
As you work, watch for the traps the paper documents, and deliberately test them:
1. **Social pitfall:** write one prompt with *no* politeness ("please/thank you") — imperative verbs only. Did "rude but direct" beat "polite but vague"?
2. **Brittleness:** take your best prompt and run it **5 times in fresh chats**. Count how many times the layout breaks. (This is *stochasticity* — a "working" prompt isn't "solved.")
3. **Opportunistic iteration:** you may **not** change a prompt until you've written down *why* the last one failed and *which one variable* you're changing.

### Part B — Anthropic engineering toolkit
Try at least **two** of these to "harden" a prompt, and note the effect:
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

---

## Prompt Log (required)

In `log_deliverable/prompt-log.md`, keep a running table. This is the "systematic,
not opportunistic" discipline from the paper:

| # | Prompt (verbatim) | Strategy | Why I changed it from #N | What changed in the output |
| :- | :--- | :--- | :--- | :--- |
| 1 |  | vibe / engineered / persona / xml / few-shot |  |  |

Your tool's `history.md` (Vibe-Trace) captures the automatic log; `prompt-log.md` is
*your* analysis on top of it.

---

## Submission: The Vibe Report

Document your comparison in `vibe-report.md`:
1. **Showcase** — the artifact(s), both versions if visual.
2. **The comparison** — fill in the quality rubric below for your challenge.
3. **Johnny findings** — what happened with the no-politeness, brittleness (5-run), and systematic-iteration tests?
4. **Toolkit effect** — which Anthropic technique moved output quality the most, and why?
5. **When to use which** — one paragraph: when do you "give into the vibes," and when is engineering non-negotiable?
6. **Trace** — link `log_deliverable/history.md` and `prompt-log.md`.
7. The course **authenticity statement**.

### Quality comparison rubric (use in your report)
| Quality marker | Vibe (natural) | Engineered (structured) |
| :--- | :--- | :--- |
| First-try success |  |  |
| Code readability |  |  |
| Error handling |  |  |
| Visual creativity |  |  |
| Ease of adding features later |  |  |

### Deliverables
- `code_deliverable/` — your artifact(s)
- `log_deliverable/` — `history.md` + `prompt-log.md`
- `vibe-report.md` — comparison + reflection + trace

### Submission
Submit on Canvas: upload a zip of the entire `week1/7_14/` folder and paste your deployed assignment link. Before submitting, commit and push your `code_deliverable/`, `log_deliverable/history.md`, and `vibe-report.md` to your GitHub Classroom repo. We grade the Canvas submission against your GitHub commit history and hosted page; commits pushed after the Canvas submission time do not count unless the instructor asks you to resubmit.

This activity produces **several outputs** — save each as its own file in `code_deliverable/` and list them in `code_deliverable/index.html` (a starter index is provided).


<!-- READINGS:START (generated by scripts/sync_readings.py — edit activities-manifest.json instead) -->

## 📖 Reading

- **Primary** 🔵 — [Zamfirescu-Pereira, J.D. et al. 2023. Why Johnny Can't Prompt. CHI '23.](https://dl.acm.org/doi/10.1145/3544548.3581388)
- **Reference** 🟡 — [Anthropic. Prompt engineering overview.](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
- **Optional** 🟢 — [Arun, S.K., Fischer, J.E. 2026. Encouraging thought before completion: task-specific selective friction in AI-assisted knowledge work. CHIWORK '26.](https://doi.org/10.1145/3808045.3808049)

**Full course reading list:** [Course readings — all sessions](https://vibe-coding-ethics.tech.cornell.edu/instructions.html?file=planning/readings.md&title=Course%20Readings)
<!-- READINGS:END -->
