# Project 2 — Build for a Human Value

**Teams:** 3–4 students  
**Worth:** 15% of your course grade  
**Assigned:** Thursday, July 23  
**Due:** Monday, July 27, before class  
**Join your team repo:** https://classroom.github.com/a/RkRB5iqO

## What are you making?

Build a small website or app that helps a **specific person** in a **specific situation**.

Your project must support one human value, such as:

- privacy
- accessibility
- fairness
- dignity
- honesty
- care
- safety
- autonomy
- sustainability
- trust

Your app should not only talk about the value. Its features, language, defaults, and choices should actually support it.

> [!TIP]
> **Value ≠ topic.** “A recycling app” is a topic. “Helps renters without cars find the nearest drop-off, so sustainability is not gated by access to a car” is a value made concrete.
>
> This example names the **value** (sustainability and fairness), the **user** (renters without cars), and the **problem** (recycling access).

## Deliverables at a glance

Submit exactly these three things in your team repo:

1. **Hosted app** — the working project in `code_deliverable/`, with its public link in `project-report.md`.
2. **AI interaction log** — your real prompts, responses, mistakes, and revisions in `log_deliverable/history.md`.
3. **Project report** — one completed `project-report.md`, including your framing, explored ideas, first prompt, red-team result, informal classmate test, screenshots, and reflections.

For Project 2, the informal classmate test belongs **inside `project-report.md`**. You do not need a separate `user-test.md`.

[View the Project 2 walkthrough slides](/projects/project2/project2-walkthrough.pptx)

## Your team must answer five questions

Before building, write down:

1. **What value are we supporting?**
2. **Who is the app for?**
3. **What problem or decision are they facing?**
4. **What will the app do to support the value?**
5. **How will we know whether it is working?**

Also name one tension or tradeoff.

Example:

> We are supporting privacy, even if that means collecting less user data and giving up some personalization.

## Choose one project direction

Your team may:

### 1. Help someone act on a value

Example: a habit tracker that encourages consistency without guilt or shame.

### 2. Help someone notice or avoid a harm

Example: a checker that points out privacy risks in a sign-up form.

### 3. Improve a harmful design

Example: redesign a confusing cancellation flow so it is easy to understand and easy to leave.

### 4. Use technology to defend against technology

Example: a tool that blocks a tracking script, warns about manipulative language, or helps a creator protect their work from unwanted AI use.

> [!TIP]
> The project does not need to solve a huge social problem. It needs to make one thoughtful, defensible improvement for one user.

# What to do in class

Follow these steps in order.

## Step 1 — Choose your value and user

Pick one value and one specific user.

Do not choose “everyone.”

> [!TIP]
> **Specific is better.** “Students” is too broad. “High school students who want to study without feeling guilty when they take breaks” gives you a real person and situation to design for.

Write a one-sentence project statement:

> We are building **[tool]** for **[user]** to help them **[action]** while supporting **[value]**.

## Step 2 — Decide what the app should help the user do

Choose one small task the user can complete from beginning to end.

Examples:

- compare two choices
- check a message before sending it
- understand a privacy risk
- make a fairer decision
- avoid a manipulative design
- choose a more sustainable option
- protect personal information or creative work

> [!TIP]
> Pick **one main action**. A small app that works is stronger than a large app with many unfinished features.

## Step 3 — Explore more than one idea

Before choosing your final design, briefly consider at least **three possible approaches**.

For each idea, ask:

- How does it support the value?
- What could go wrong?
- Is it realistic to finish by Monday?

Record the three ideas in `project-report.md`, then explain why your team selected one.

> [!TIP]
> Do not accept the first idea the AI gives you. Ask for alternatives, compare them, and make the decision as a team.

## Step 4 — Write your first prompt before using AI

Your first prompt must clearly include:

- the user
- the situation
- the value
- the main task
- one behavior or design choice to avoid

> [!TIP]
> A weak prompt says: “Build a habit tracker.”
>
> A stronger prompt says: “Build a habit tracker for a student recovering from burnout. The app should support consistency without shame. Missing a day should never be shown as failure, and the interface should not use guilt, streak loss, or threatening notifications.”

Paste this first prompt into `project-report.md` exactly as you wrote it.

## Step 5 — Build the smallest working version

Make one complete experience that a classmate can try from beginning to end.

Your app should:

- open from a public link
- have a clear purpose
- let the user complete one main task
- show the value through the design, not only through a paragraph explaining it
- avoid broken buttons, placeholder pages, or fake features presented as real

> [!IMPORTANT]
> Your project needs **one complete, usable flow**. Extra features do not help if the main experience is unfinished.

## Step 6 — Check the AI’s work

Do not assume generated code or content is correct.

Check:

- Do all buttons and links work?
- Are the instructions understandable?
- Are any claims or numbers unsupported?
- Did the AI invent information?
- Did it add unnecessary tracking, data collection, dark patterns, or persuasive language?
- Does the design actually support your chosen value?

Fix or remove anything you cannot defend.

## Step 7 — Red-team your own app

Try to find at least one realistic way your app could pressure, mislead, exclude, expose, or disadvantage the user.

Ask:

- Could it pressure the user?
- Could it hide an important choice?
- Could it collect too much information?
- Could it exclude someone?
- Could it give unfair or misleading advice?
- Could the AI add a dark pattern or manipulative feature?
- Could a protective feature also harm someone else?

Document:

1. the risk you tested,
2. what happened,
3. what you changed.

> [!TIP]
> Red-teaming does not mean trying to destroy your whole project. Find one believable failure or harm, then improve the design.

## Step 8 — Test it with 1–2 classmates

Give each tester one realistic task.

Example:

> Use this tool to decide whether you should share your location with this app.

Do not explain every button. Watch what they do.

Look for:

- hesitation
- confusion
- wrong clicks
- unexpected reactions
- places where the value is not clear
- moments where the app pressures or misleads them

Afterward, ask:

- What did you think this tool was trying to help you do?
- What value did you think it supported?
- Was there any moment you felt confused, pressured, or unsure?

Make at least one change based on what you learned.

> [!TIP]
> Do not give the tester a tour. Give them a task, stay quiet, and watch. Confusion is useful evidence.

## Step 9 — Finish, host, and submit

Before the deadline:

- test the public link in a private/incognito window
- make sure your report links to the hosted app
- confirm that all team members’ work is committed
- check that your AI log is complete
- push the final version to GitHub

# Submission

Push the hosted app, AI log, and completed report to your team GitHub Classroom repo before the deadline in `deadline.json`.

Then complete the Canvas submission. Canvas may ask for the live link, a zip file, or both.

Project 2 uses the shared [course project rubric](../rubric.md). The ethical reflection in your report must be written by your team; AI may help only with grammar checking.
