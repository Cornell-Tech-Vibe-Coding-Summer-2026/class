# Activity: Compare Vibe Coding Tools

In this activity, you will compare multiple vibe coding tools by looking at how each tool is structured, what its system prompt/rules are, and how those choices affect your experience.

Your goal is to move beyond "which tool is best" and instead answer:
- How does the tool guide your behavior?
- How much control do you have over output?
- What kinds of outputs does it produce reliably?

---

## Learning Goals

By the end of this activity, you should be able to:
- Identify where a tool's hidden or explicit instructions come from (system prompt, rules files, templates, memory, defaults).
- Compare tools on **usability**, **control**, and **output quality**.
- Explain how prompt architecture influences code style, correctness, and collaboration.
- Propose when to use each tool and when not to.

---

## What to Compare

Pick at least **3 vibe coding tools** (for example: GitHub Copilot Chat, Cursor, Claude, ChatGPT, Windsurf, Replit Agent, etc.).

For each tool, document:
1. **Interface + workflow**
	- Where do you interact (editor, web chat, agent mode, terminal)?
	- How does the tool expect work to be broken down?
2. **Instruction stack**
	- What system-level instructions or defaults are visible?
	- Can you add custom rules/personas/project instructions?
	- Are there hidden constraints you can infer from behavior?
3. **Control knobs**
	- Context window controls, file selection, mode switching, approvals, model selection, temperature/creativity controls, etc.
4. **Output behavior**
	- How code is structured, commented, tested, and explained.
	- Reliability on first try vs. need for iteration.

---

## Common Task (Run in Every Tool)

Use the **same prompt set** in every tool so your comparison is fair.

### Required mini-task
Build a small web feature (choose one):
- A to-do list with add/remove/filter
- A flashcard app with next/previous and score tracking
- A small interactive quiz with feedback

### Prompt sequence
Run this sequence in each tool (same wording as much as possible):
1. **Initial build prompt**: Ask for a complete first version.
2. **Constraint prompt**: Add strict requirements (e.g., no frameworks, accessibility requirements, specific folder structure).
3. **Refactor prompt**: Ask for readability + modularity improvements.
4. **Debug prompt**: Introduce or describe a bug and ask the tool to diagnose/fix.

Save transcripts/screenshots and outputs for each step.

> [!IMPORTANT]
> **What to save (keep it simple):** Give each tool **one subfolder** in `code_deliverable/` (e.g. `code_deliverable/copilot/`, `code_deliverable/cursor/`, `code_deliverable/claude/`). You do **not** need a separate saved file for every one of the 4 prompts — just keep the **final evolved code** for each tool in its subfolder (the 4 prompts iterate on the *same* project, so it's one project per tool). Capture the intermediate steps as transcripts/screenshots in `log_deliverable/` instead. Then list every tool's output in `code_deliverable/index.html` (a starter index is provided). Three tools is enough — don't add more if time is short.

---

## Deliverables

Put all materials in `week1/7_15/`.

### 1) Comparison report
Create `vibe-report.md` with:
- **Tools tested** and why you chose them
- **Method** (same task, same prompts, same evaluation criteria)
- **Findings by category**:
  - Usability
  - Control
  - Output quality
- **Evidence**: concrete examples from transcripts/code
- **Final ranking** (or matrix) with justification

### 2) Logs / traces
In `log_deliverable/`, include:
- Chat transcripts or exported histories (or screenshots if export unavailable)
- Notes on retries and prompt edits
- Any rules/system instructions you could access

### 3) Code artifacts
In `code_deliverable/`, include:
- The generated implementations from each tool (organized in subfolders by tool)
- Each tool's output listed in `code_deliverable/index.html` (a starter index is provided) — that's how we find them, so you don't need a separate README. A one-line note per tool inside `index.html` (or a short `README.md`) on how to open each version is welcome but optional.

---

## Evaluation Framework (Use this in your report)

Score each tool from **1–5** on:

1. **Usability**
	- Speed to first useful result
	- Clarity of interaction model
	- Friction in iterative workflow

2. **Control**
	- Ability to steer style/architecture
	- Ability to constrain scope
	- Transparency of why it did what it did

3. **Output**
	- Correctness
	- Code quality/readability
	- Consistency with constraints
	- Debugging effectiveness

Then add a short paragraph on:
- **Best use case** for each tool
- **Failure mode** for each tool
- **How system prompt/rules likely caused those outcomes**

---

## Reflection Questions (Required)

Answer in `vibe-report.md`:
1. Which tool gave you the highest sense of authorship/control? Why?
2. Which tool produced the most "confident but wrong" output? What signs were visible early?
3. How did visible vs. hidden system instructions affect trust?
4. If you were designing your own vibe coding tool, what would you change about prompt architecture?
5. What did this exercise change about your personal workflow?

---

## Submission Checklist

- [ ] `vibe-report.md` includes method, evidence, scoring, and reflection
- [ ] `log_deliverable/` contains transcripts/screenshots + prompt iterations
- [ ] `code_deliverable/` contains outputs from at least 3 tools
- [ ] Comparison explicitly connects tool structure/system prompt to usability, control, and output

### Submission
Submit on Canvas: upload a zip of the entire `week1/7_15/` folder and paste your deployed assignment link. Before submitting, commit and push your `code_deliverable/`, `log_deliverable/history.md`, and `vibe-report.md` to your GitHub Classroom repo. We grade the Canvas submission against your GitHub commit history and hosted page; commits pushed after the Canvas submission time do not count unless the instructor asks you to resubmit.

This activity produces **several outputs** — save each as its own file in `code_deliverable/` and list them in `code_deliverable/index.html` (a starter index is provided).


<!-- READINGS:START (generated by scripts/sync_readings.py — edit activities-manifest.json instead) -->

## 📖 Reading

- **Primary** 🟢 — [Shin, S. et al. 2026. Interrogating Design Homogenization in Web Vibe Coding.](https://arxiv.org/abs/2603.13036)
- **Reference** 🟢 — [Who Controls the Conversation? User Perspectives on Generative AI (LLM) System Prompts. CHI '26.](https://doi.org/10.1145/3772318.3791726)
- **Reference** 🟢 — [Neumann, A. et al. 2025. Position is Power: System Prompts as a Mechanism of Bias in Large Language Models. FAccT '25.](https://doi.org/10.1145/3715275.3732038)
- **Reference** 🟡 — [Hao, K. 2019. This is how AI bias really happens — and why it's so hard to fix. MIT Technology Review.](https://www.technologyreview.com/2019/02/04/137602/this-is-how-ai-bias-really-happensand-why-its-so-hard-to-fix/)
- **Optional** 🟡 — [Buolamwini, J., Gebru, T. 2018. Gender Shades (project site + short video).](http://gendershades.org/)
- **Optional** 🟡 — [Angwin, J. et al. 2016. Machine Bias. ProPublica.](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing)

**Full course reading list:** [Course readings — all sessions](https://vibe-coding-ethics.tech.cornell.edu/instructions.html?file=planning/readings.md&title=Course%20Readings)
<!-- READINGS:END -->
