# Project 1 — Vibe Code Something Your Team Wants or Needs

**Type:** Group project (teams of 3–4) · **Weight:** 15% · **Assigned:** Thu, Jul 16 · **Due:** Mon, Jul 20 *before class*

Your first team project. Apply the strongest **tool + prompt** combination your
team discovered in the Week 1 activities and ship a small, hosted app that solves
a **real problem one of you actually has.** But this project is as much about
finding out whether you're building the **right thing** as it is about building —
before you polish anything, you'll fake it, test it, and re-scope.

## The Task
As a team, pick one genuine problem from a team member's own life — something you'd
actually use — and build a working app for it. Scope it so it can be *finished and
hosted*, not just started.

- It must **do something** (not just be an info page).
- It must be **hosted and reachable by link**.
- The build must be **vibe-coded**, with the prompt trail to prove it.
- You must run **at least two prototype→test→re-scope loops** (one in today's class).

> [!TIP]
> Good week-1 scope: a tip splitter, a shared packing list, a habit tracker, a
> "which of us pays next" tracker, a study-timer, a tiny recommendation quiz.
> If you can describe it in one sentence and demo it in 60 seconds, the scope is right.

## The Method — Fake It, Test It, Rescope

Vibe coding makes some parts of an app *very fast* to build — and Wizard-of-Oz
prototyping covers the rest with **theater**. The reading below (yes, that's the
same first author as Tuesday's *Why Johnny Can't Prompt*, with Cornell Tech
co-authors) shows how researchers act out the parts of a system that don't exist
yet to learn whether it's worth building at all. You'll do the same:

1. **Diverge.** Brainstorm problems and app ideas quickly, then pick one.
2. **Make the quick parts real (AI-assisted).** With your vibe coding tool, build
   only the pieces you can make **interactive quickly** — a screen, a button flow,
   one core interaction.
3. **Act out the rest (Wizard of Oz).** For everything that's missing, fake it
   theater-style: a teammate *plays* the app — speaks the notification, hands over
   the "generated" result on a sticky note, updates the "database" by hand.
4. **Test with teammates.** One of you (or a neighboring team) is the user. Act the
   whole flow through, realistically, start to finish. Watch what they *do*, where
   they hesitate, what they ask.
5. **Converge — are we making the right thing?** Discuss what the test revealed.
   **Redefine** the problem if needed, then **re-scope** what you'll actually build.
6. **Loop again.** Repeat 2–5 with your sharpened scope, making more of it real
   each pass.

> [!IMPORTANT]
> **Minimum one full loop in today's class.** The second loop **can** happen after
> class. Your team decides how much time to invest beyond that — a strong write-up
> of two honest loops beats hours of extra features, and you are **not** expected
> to spend a lot of hours outside class.

## Deliverables
**Accept the team assignment first:** [https://classroom.github.com/a/fw74T59W](https://classroom.github.com/a/fw74T59W) —
one member creates the team, the others join it. The team repo comes pre-seeded
with the folder structure, report template, and Vibe-Trace configuration, all at
the repo root:
1. **Hosted app** — source in `code_deliverable/`, live link in your report.
2. **AI interaction log** — `log_deliverable/history.md` (Vibe-Trace logs this automatically; verify it captured everyone's prompts).
3. **Project report** — fill in the provided `project-report.md`. It includes:
   - the record of your **two prototype→test→re-scope loops** (what was real, what was acted, what you learned, how you re-scoped),
   - the team's **ethical reflection** (human-written),
   - an **individual reflection from every team member** on collaborating with human teammates and collaborating with AI (human-written).

Full write-up is due **Monday before class**. Graded against the [Project Rubric](../rubric.md).

## Host
- **Static (HTML/CSS/JS):** GitHub Pages — repo *Settings → Pages → GitHub Actions* (the deploy workflow is included in the team repo).
- **Framework (React/Vue/Next):** Vercel — connect the team repo for auto-deploy.

## Submit
Commit and push to the team GitHub Classroom repo. Host via GitHub Pages (static) or Vercel (frameworks) and put the live link in your report. Submit whatever the Canvas project page asks for, usually the live link and/or a zip snapshot. We grade against the team repo's commit history and your live link, so push before the deadline in `deadline.json`.

## 📖 Reading

- **Primary** 🔵 — [Zamfirescu-Pereira, J.D., Sirkin, D., Goedicke, D., LC, R., Friedman, N., Mandel, I., Martelaro, N., Ju, W. 2021. Fake It to Make It: Exploratory Prototyping in HRI. HRI '21 Companion.](https://dl.acm.org/doi/10.1145/3434074.3446909)
