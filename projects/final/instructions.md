# Final Project — Build Something That Benefits Someone Outside the Class

> **📄 This is the full brief.** The day-by-day overview lives on the [Final Project page](https://cornell-tech-vibe-coding-summer-2026.github.io/cornell-tech-vibe-coding-summer-2026-final-project-template/).

**Type:** Group project (your stable teams) · **Weight:** 25% project + 15% presentation
**Runs Tue → Thu, graded as four Canvas checkpoints — the summary is your project grade:**
- **Day 1 — Tue, Jul 28:** Verify — *does the design change anything?* → research deck + verification canvas
- **Day 2 — Wed, Jul 29:** Plan — *what is the problem?* → `planning-report.md`
- **Day 3 — Thu, Jul 30:** Build + pitch — *what's the solution?* → `project-report.md` + app + pitch video (no lecture, no new test)
- **Day 4 — Thu, 3–5 PM:** Present — demo + slides at the shared afternoon showcase

The capstone. Make something that **benefits a real person outside this classroom**,
and that **society keeps benefiting from after the course ends**. This is where the
whole course comes together: vibe coding under control (Wk1), ethics and values
(Wk2), and user-centered evaluation (Wk3).

## The Task
As a team, design, build, test, and present an app that serves a genuine external
beneficiary — a community, an organization, a group of users who are not your
classmates. It must:

- **Serve someone outside the class.** Identify them specifically. "Students" is not specific; "first-year international students navigating NYC transit" is.
- **Carry your value forward.** You keep the value your team has been working with — the final is the **next iteration of that commitment**, not a new theme. Bring Tuesday's verification findings with you.
- **Be tested with real users** and iterated on the evidence.
- **Have a life after class.** Who keeps using or maintaining it? Give a credible answer.

> [!IMPORTANT]
> **One value, all the way through.** Monday closed the Project 2 cycle (usability), Tuesday opened
> the next one (did the design actually produce the value change?). The final project is where you
> act on that answer — often with a **different design for the same value**.

## Accept the assignment — join the team named for your value
[https://classroom.github.com/a/VTWqWkXg](https://classroom.github.com/a/VTWqWkXg). Your team is
**named after the value you commit to** at the start of class (we suggest carrying your Project 2
value — Security · Safety & Autonomy · Sustainability & Trust · Care & Wellbeing · Productivity ·
Sustainability & Transparency — but you may switch or add a secondary value). **One member creates
the team with that exact name; everyone else joins it** — don't create a duplicate. See the
[join table on the Final Project page](https://cornell-tech-vibe-coding-summer-2026.github.io/cornell-tech-vibe-coding-summer-2026-final-project-template/) for who's on which team. The repo comes
pre-seeded: structure, **both report templates**, a `presentation/` folder, Vibe-Trace configs,
and a Pages deploy — everything at the repo root.

---

# The four days

## 🔬 Day 1 — Tue, Jul 28 · Verify: *does the design change anything?*  → research deck + canvas

Value verification of your Project 2, as a team. Decide **which reading of your value you actually
designed for** (privacy as control vs. security vs. contextual integrity — the reading decides the
method), research what's already been tried, run the check, and report what works and what doesn't
across the three lenses. This **opens** the cycle the rest of the week acts on.

**Deliverable →** your **[team research deck](https://drive.google.com/drive/folders/1-NG7Hvk8pdqQqCphLD76IEXZ4bzVEe_R?usp=share_link)** (from the shared Slides folder; each member owns a named slide) + your **team
verification canvas** (each member fills their own reflection lane). Guest lecture: accessibility.
**[→ Full Day-1 brief](verify.md)**

## 📋 Day 2 — Wed, Jul 29 · Plan: *What is the problem?*  → `planning-report.md`

**Start from what Tuesday's verification showed**, then find the real need behind it.

1. **Carry the value in — with the evidence.** You already have your value. Open with Tuesday's board: which reading you designed for, what the verification actually showed, and the **other design options** you flagged. If the old design didn't produce the value change, this is where you change the design — not the value.
2. **Beneficiary.** Someone specific outside the class. Not "students."
3. **Build a persona, then interview it as an AI chatbot.** Build a detailed **persona** of a specific beneficiary — name, situation, goal, frustration, context — using the **[Figma persona template](https://www.figma.com/community/file/1335748909887675654/user-persona-template-set)** or a Google Slides deck. Then turn that persona into an **AI chatbot** (Claude / ChatGPT), give it rich detail, and run a **short interview** about *its* problem (ask about the problem, not your idea). Write the need **in its words**, and **paste the setup prompt + the conversation into `planning-report.md`** — that's your elicitation evidence. Treat what it says as a **hypothesis, not proof**: it's an AI voiced by your own assumptions and tends to agree with you (skeptical read: [NN/g — Synthetic Users](https://www.nngroup.com/articles/synthetic-users/)).
4. **Operationalize the value.** What is concretely true of a good solution if the value is present? Say it as behavior / understanding / affect (the Tuesday lens).
5. **Storyboard — rough, then refined.** **Each member** sketches a **rough** 4–8-frame storyboard of their own idea (diverge — rough is the point; it helps you think). Then the team picks and combines the best into **one refined storyboard** that communicates the idea (converge) — your Thursday build plan + pitch skeleton. Use the **[Figma storyboard template](https://www.figma.com/community/file/853170162772539008/storyboard-template)** or Google Slides (one frame per slide); hand-drawn or AI-assisted is fine.
6. **Scope.** The smallest real thing you can ship *and* demo Thursday — one complete action. Split who does what.

7. **Get a head start.** Spend the **last 30 minutes vibe coding** — open the repo, run the first prompt from your value tree, and get *anything* on screen. Thursday is a full build day with no lecture, so every minute you start now is a minute you keep.

*(Storyboards and personas can both be AI-assisted — the AI is a co-designer, not the author. On GenAI in storyboarding/design, see [Sandhaus et al. 2025, "Co-Designing with Transformers" (DIS '25)](https://dl.acm.org/doi/10.1145/3715336.3735805); on AI vs. real personas, [NN/g — Synthetic Users](https://www.nngroup.com/articles/synthetic-users/).)*

**Deliverable → `planning-report.md`** (value, beneficiary, **persona (link) + AI-persona interview: prompt + conversation**, operationalization, **rough storyboards + one refined team storyboard (link)**, scope). Due end of Wednesday. *Open with **Remy Stewart's Figma guest talk**, then a short planning lecture (personas + storyboards, with and without AI), then plan — and use the **last 30 minutes to start vibe coding**.*

## 🛠️ Day 3 — Thu, Jul 30 · Build + pitch: *What's the solution?*  → `project-report.md`

**No lecture today — a full heads-down build day.** And **no new user test**: you already
tested Monday (usability) and researched the value Tuesday. Spend the time making the thing
real and telling its story well.

1. **Build** the smallest real thing from your storyboard — hosted, one complete action a stranger can finish, with the value living in the *design*, not just the copy.
2. **Pitch video / showcase.** Produce a short video that **shows the idea of your app**. It **doesn't have to be AI-generated** — a screen-recorded demo, an acted skit, a hand-animated walkthrough, or an AI video (**Google Veo 3.1 · Runway · Kling · Pika** — OpenAI retired the Sora app in April 2026) all work. Pick whatever feels **authentic to your team**. Put it in `presentation/`, link it in the report, and **embed it in your final slides**.

**Deliverable → `project-report.md`** (build, first prompt, screenshots, ethical + individual reflections, live link, pitch-video link) + the hosted app + the pitch in `presentation/` and embedded in your slides.

## 🎤 Day 4 — Thu, 3–5 PM · Present: the showcase

A **shared afternoon showcase** — you present alongside other classes' work, with a **keynote for
families**. Present live — **prototype and slides on the monitors, with your pitch video embedded**.
Tell the **whole arc of your value**, not a test report: the artifact, who it's for (persona +
storyboard), your research findings, the **design alternatives you considered** and how the design
**progressed** from Project 2, your pitch, and the afterlife. Final tweaks + submission can come
after the showcase.

---

## Deliverables checklist (team repo, at root)
1. **Research deck + verification canvas** (Tue) — value verification of Project 2.
2. **`planning-report.md`** (Wed) — problem, value, persona, storyboard, scope.
3. **Hosted app** — source in `code_deliverable/`, live link in your report.
4. **`project-report.md`** (Thu) — build, first prompt, screenshots, human-written ethical + individual reflections, live link, pitch link.
5. **AI interaction log** — `log_deliverable/history.md`.
6. **Pitch video / showcase** — in `presentation/`, embedded in your slides.
7. **Presentation** — delivered Thu afternoon (3–5 showcase), pitch video embedded.

Graded across **four Canvas checkpoints** (Tue verify · Wed plan · Thu build · Thu-aft present) against the [Project Rubric](../rubric.md) — the summary is your project grade (25%) — plus a separate Final Presentation grade (15%). The **ethical and individual reflections must be written by students**; AI may help only with grammar.

## The Presentation (Thu, 3–5 PM showcase)
Combine the week into one story — the arc of your value, not a test report. Each team shows, in a tight slot:
- **The artifact** — live demo, the value living in the design.
- **The value + who** — what it operationalizes and for **whom**, with your **persona** and **storyboard**.
- **The journey** — your **research findings**, the **design alternatives** you considered, and how the design **progressed** from Project 2 to now.
- **The pitch** — your **embedded** video.
- **Afterlife** — who keeps using/maintaining it, and how.

## Host & Submit
Host via GitHub Pages (static) or Vercel (frameworks); put the live link in your report.
Commit and push to the team GitHub Classroom repo before presentations. Submit whatever
the Canvas final-project page asks for (usually the live link and/or a zip snapshot). Demo
from the hosted link, not localhost, and keep a screen-recording backup in `presentation/`
in case Wi-Fi fails.
