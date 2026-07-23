# Team Repo — Project 2 · Ethical Vibe Coding (TECHIE 1121)

This is the shared repository for the **same team you worked with in Project 1**.
Every teammate should accept the assignment, join the team, and commit here so
the git history and AI-interaction log reflect the whole group:
[Join the Project 2 team repo](https://classroom.github.com/a/RkRB5iqO).

Read the full course brief before building:
[Project 2 — Build for a Human Value](https://vibe-coding-ethics.tech.cornell.edu/instructions.html?file=projects/project2/instructions.md&title=Project%202).

## What you submit

Submit a hosted app in `code_deliverable/`, your real AI interactions in
`log_deliverable/history.md`, and one completed `project-report.md`. The report
includes your planning, exact first prompt, screenshots, red-team result,
informal classmate test, teamwork, reflections, and public app link. Project 2
does not require a separate `user-test.md`.

```text
code_deliverable/     # hosted app source
log_deliverable/      # history.md — shared AI-interaction log
project-report.md     # one report completed by the team
deadline.json         # submission deadline
```

## Work as a team

Make sure every Project 1 teammate has joined and commits at least once. Rotate
who drives the AI, review its work together, and keep the main design decisions
with the team.

## Build and log

Build one complete experience that supports a specific human value for a
specific person in a specific situation. Whenever AI edits
`code_deliverable/`, the configured Vibe-Trace rules should record the
interaction in `log_deliverable/history.md`. Check that the log is filling up
and add any missing prompts yourself.

## Run, test, and publish

For a static app, run `npm run dev` and open
[http://localhost:8000](http://localhost:8000). For a framework app, work inside
`code_deliverable/` with its normal install and development commands. Run
`npm run test:build` before pushing to test the same build used by GitHub Pages.

Publish through GitHub Pages by choosing **Settings → Pages → Source: GitHub
Actions**. Your app will be available at
`https://cornell-tech-vibe-coding-summer-2026.github.io/<repo-name>/code_deliverable/`.
A framework app may use Vercel instead.

## Complete the report

Use the provided `project-report.md` template. Briefly identify the value, user,
main action, success sign, and tradeoff; compare three ideas; include the exact
first value-centered prompt; and show the finished experience. Check the AI's
work, test one realistic ethical risk, and observe 1–2 classmates completing a
task without giving them a tour. Record what happened and at least one change
your team made.

Complete the teamwork and AI-attribution sections together. The team ethical
reflection and every member's individual reflection must be human-written; AI
may check grammar but may not draft them.

## Finish and submit

Open the public app in a private or incognito window, confirm the AI log and
report are complete, and make sure every teammate's work is committed. Push the
app, log, and report before the time in `deadline.json`, then complete the
required Canvas submission.
