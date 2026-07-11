# Personal Portfolio / About Me

## Pre-Class Setup

### Set up your AI tool and GitHub accounts

> [!IMPORTANT]
> **Our recommended tool is GitHub Copilot.** It's **free for students (13+)** through the [GitHub Student Developer Pack](https://education.github.com/pack/join), runs right inside **VS Code or a GitHub Codespace**, and its **agent mode** can plan and edit across your whole repo — that's the "vibe coding" part. A solid second option is **Codex** (it reads `AGENTS.md`).
>
> **A few tools are 18+.** Claude Code and Cursor require you to be **18+**. If you're older and prefer one, go ahead — the repo works with all of them (see the table). **If you're under 18, use GitHub Copilot.**

**Get set up:**

1. Sign up for [GitHub](https://github.com/signup) and join the [GitHub Student Developer Pack](https://education.github.com/pack/join) with your school email — this unlocks GitHub Copilot for free.
2. Accept the course GitHub Classroom assignment here: [https://classroom.github.com/a/8NQcxGyr](https://classroom.github.com/a/8NQcxGyr). This gives you your own copy of the repo.
3. Open your repo in **VS Code** (with the Copilot extension) or in a **Codespace** (green "Code" button → Codespaces), and turn on Copilot **agent mode**.

**You can use any of the supported tools** — the repo is pre-configured so the required prompt-logging ("Vibe-Trace") works out of the box in each. When you open the repo you already have the matching rule file for your tool:

| Tool | Config file (already in the repo) |
| :--- | :--- |
| **GitHub Copilot** — *recommended, 13+* | `.github/copilot-instructions.md` |
| Codex / Amp / Jules / other agents | `AGENTS.md` |
| Gemini Code Assist | `GEMINI.md` |
| Replit Agent | `replit.md` |
| Claude Code — *18+* | `CLAUDE.md` |
| Cursor — *18+* | `.cursor/rules/vibe-trace.mdc` |
| Windsurf | `.windsurf/rules/vibe-trace.md` |

All of these enforce the same rule — the **Vibe-Trace**: whenever your AI edits your `code_deliverable/`, it must add an entry to `log_deliverable/history.md` recording your prompt and what changed. This is **graded**. The full rule is in [`AGENTS.md`](../../AGENTS.md) — open it once so you know what your tool is supposed to do; it's not optional reading.

> [!IMPORTANT]
> **Check that `history.md` is actually filling up as you work.** Agents forget — GitHub Copilot in particular tends to stop logging after a long chat. If new entries stop appearing, tell it *"log that to history.md,"* or paste the entry in yourself. Don't worry if a timestamp is off — the prompt and what changed are what matter. Web-only tools (v0, Rork, Bolt) can't write files at all, so log by hand if you use one.

### Folder Structure

To keep your deliverables organized and compatible with the course's automated tools, please use the following structure in your project directory:

```text
week1/7_13/
├── code_deliverable/    # Your website source code (HTML, CSS, JS)
├── log_deliverable/     # Your interaction logs (history.md)
└── vibe-report.md       # Your final documentation and reflection
```

> [!IMPORTANT]
> Ensure all your website assets (images, fonts, etc.) are saved within the `code_deliverable/` folder or referenced via URL.

---

## Vibe Off 

**Project: Your Digital Vibe.** Welcome to the course! Your first task is to create a personal "About Me" page.

### The Task
Create a website that tells us who you are. It must include:
- **Name**: Your actual name, preferred name, and pronounciation. Pronouns if needed. 
- **Photo**: How can we recognize you? A photo of yourself or visual description. 
- **Bio**: A brief introduction to yourself.
- **Hobbies**: What do you do for fun?
- **Professional Section**: Your skills, interests, or career goals.

Most importantly work on the website long enough to actually create something you are proud of. Something that truly and authentically reflects you. 

### Inspiration & "Stealing"
We encourage you to look for inspiration online. Check out sites like [Awwwards](https://www.awwwards.com) for award-winning designs. 
> [!TIP]
> In vibe coding, the line between "stealing" and "inspiration" is thin. You are encouraged to copy structures and layouts you like. We will discuss the ethics of attribution vs. structural borrowing in class.

## Host

Once your page is ready, you need to make it live:
- **Vanilla JS/Static Pages**: Use **GitHub Pages**. Go to your repository settings > Pages and set the source to **GitHub Actions**.
- **Frameworks (React, Vue, etc.)**: Use **Vercel**. Connect your GitHub repository to Vercel for automatic deployment.

Your deployed page should be your own repo's URL, usually `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/week1/7_13/code_deliverable/`.

## Submit on Canvas

Upload a zip of the entire `week1/7_13/` folder and paste your deployed assignment link on Canvas. Before submitting, commit and push `week1/7_13/` to your GitHub Classroom repo. We grade the Canvas submission against your GitHub commit history and hosted page; commits pushed after the Canvas submission time do not count unless the instructor asks you to resubmit.

---

## Submission: The Vibe Report

After completing your page, you must document your journey in a new file named `vibe-report.md` in your project folder. Use [vibe-report-template.md](vibe-report-template.md) as your starting point.

A complete Vibe Report includes:

### 1. 📸 Showcase
Screenshots, GIFs, or a short video walkthrough of your final site. This documents the final product in case the live link is inaccessible later.

### 2. 🎯 The Vibe (Planning)
Before you start coding, document your intent. What is the inspiration? What should the user feel? Use moodboards, sketches, or verbal descriptions to capture the intended "vibe."

### 3. 👣 Process & Explorations
Transparency is key. Document your research, the different pathways you explored, the ideas you dropped, and the "happy accidents" that shaped the final product.

### 4. 💭 Reflection
Answer the following prompts:
1. How did vibe coding change your approach to building a website compared to traditional coding, or website builders?
2. What "structural elements" did you borrow from elsewhere? Did you feel a need to attribute them?
3. What was the most surprising thing you learned about the AI tool's capabilities or limitations?
4. How closely does the final website match your original vision? Does it feel authentic to you? How do you see yourself in it?

### 5. 📜 AI Usage Trace
Link to your [local history log](log_deliverable/history.md) and any external AI tool histories (e.g., ChatGPT, Claude) used during the project.

### 6. 🙋 Authenticity Statement
You must include the Authenticity Statement from the template:
- **Responsibility**: Acknowledging that you are the sole architect and bear full responsibility.
- **Attribution**: Listing all human collaborators and inspirations.

---
*Your reflection and documentation matter more than the code. This class is about the process, not just the product.*


<!-- READINGS:START (generated by scripts/sync_readings.py — edit activities-manifest.json instead) -->

## 📖 Reading

- **Primary** 🟢 — [Li, J. et al. 2026. Vibe coding in product teams: Reconfiguring AI-assisted workflows, prototyping, and collaboration. CHIWORK '26.](https://arxiv.org/abs/2509.10652)
- **Optional** 🟢 — [Sandhaus, H., Gu, Q., Parreira, M.T., Ju, W. 2025. Co-Designing with Transformers: GenAI in Interactive System Design Education. DIS '25.](https://arxiv.org/abs/2410.14048)
- **Optional** 🟢 — [Xia, Q. et al. 2026. "If you're very clever, no one knows you've used it": Social dynamics of GenAI literacy in the workplace. CHIWORK '26.](https://arxiv.org/abs/2602.01386)

**Full course reading list:** [Course readings — all sessions](https://vibe-coding-ethics.tech.cornell.edu/instructions.html?file=planning/readings.md&title=Course%20Readings)
<!-- READINGS:END -->
