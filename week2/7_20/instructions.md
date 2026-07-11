# Values in Vibe Coding (Light) — AI as Moral Assistant

> **Theme:** Use AI to be more rational and act more in line with your values. Vibe code a small tool that helps *someone* (you, a friend, a hypothetical user) make a more moral decision or behave more morally — and own the value the tool argues for.

## Pre-Class Setup

### Tooling Preparation
- Bring your hosted Week 1 site or another simple web project you can edit.
- You may use HTML, CSS, JavaScript, or any vibe coding tool from Week 1.
- Come with a rough idea of *one decision* you'd like a small tool to help you (or someone) think about more clearly. It can be tiny.

### Folder Structure
```text
week2/7_20/
├── code_deliverable/        # your hosted tool
├── log_deliverable/         # AI usage logs (history.md etc.)
└── vibe-report.md           # reflection
```

---

## What we are arguing today

Every tool embeds values — efficiency, attention, scale, autonomy, sustainability, accessibility, sovereignty, frugality, dignity. Some get *pushed* on you by the defaults; others you have to opt into. Vibe coding tools are no exception.

In a 15-minute opening discussion we will sketch:

- Which values do *the vibe coding tools you already use* push on you? (e.g., "ship fast", "don't worry about deps", "scale-first defaults")
- Which values would you rather they push on you?
- Which values can AI actually *help you act on* — not as a topic, but as a personal accountability tool?

We are deliberately **not** running the full Values at Play discovery canvas today. That's Week 3 Tuesday. Today is the lightweight version: name a value, then build something small that argues for it.

---

## The Task

**Build a small tool that helps someone make a more moral decision or behave more morally.** The user can be you, a friend, a fictional persona, or a class of people. The tool can be a calculator, a comparison, a checker, a nudge, a journaling prompt, a quiz, a what-if simulator — whatever fits the value you're arguing for.

Three loose rules:

1. **The tool argues for something.** It pushes the user toward a specific behaviour or framing. Name it explicitly in the UI (a "what this tool argues" line, a recommended action, a values statement — whatever works). If you don't know what your tool argues for, you don't have a tool yet.
2. **The artifact is small on purpose.** A single page or screen, built and hosted in one session. The point is the *value clarification* you do while building, not the polish.
3. **If your tool relies on numbers, cite them on the page.** Methodology is part of the design surface. Numbers without sources visible to the user are not numbers — they're vibes pretending to be numbers.

There is **no required topic**. Some directions students have taken or could take:

- A footprint+offset calculator for your own AI use (see the offset calculator example below)
- A "before you reply" decision aid that scores draft messages against the values you said you cared about
- A daily "did I act on it?" check-in for one specific value (kindness, focus, frugality, honesty, …)
- A protein/diet suffering index (see the protein suffering example)
- A "would the affected person endorse this?" prompt before posting/sharing
- A spending-against-values tracker
- A "small kindness" generator that suggests one concrete thing in the next 24h
- A "nudge yourself with cited numbers" reframer for any habit you're trying to change

Pick one. Don't over-scope. The tool should fit on one page.

### Two precedent examples

Look at both before you start. They argue for different things and use different formats.

**`examples/vibe-coding-offset-calculator/`** — turns your week of AI use into carbon, water, and energy, then translates the carbon into everyday-swap equivalents (beef→veggie, car→bike, shower-time, flights skipped). What it argues: *AI's footprint is small relative to things you already control; spend your moral attention where it matters.* Single-file HTML, Tailwind CDN, vanilla JS, every constant cited.

**`examples/protein-suffering-calculator/`** — Hauke's "Protein Suffering Index": quantifies animal, human-worker, and planetary costs across 13+ protein sources. What it argues: *choose protein that aligns with your values* (specifically, your stated values, not your habits). Multi-component React app with citations rendered inline and a deep-dive methodology modal.

These are precedents, not requirements. Your tool can be much simpler. What matters is that it argues for a value, names it, and grounds it.

---

## Validated data sources (use these if your tool needs numbers)

If your tool quantifies anything, prefer citations from this list. Don't make numbers up.

### AI energy / water / carbon

| Source | What it gives you |
| --- | --- |
| Luccioni, Jernite, Strubell. **["Power Hungry Processing: Watts Driving the Cost of AI Deployment?"](https://dl.acm.org/doi/10.1145/3630106.3658542)** *FAccT '24*. | Per-task energy benchmarks across model sizes; methodology for measuring inference cost. |
| You, Owen et al. **["How much energy does ChatGPT use?"](https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use)** *Epoch AI* (2025). | Modern revised estimate: **~0.3 Wh per query** for GPT-4o-class models, ~10× lower than older estimates still circulating. |
| Jegham et al. **["How Hungry is AI? Benchmarking Energy, Water, and Carbon Footprint of LLM Inference"](https://arxiv.org/abs/2505.09598)** (2025). | Energy + water + carbon by model family. |
| Li, Yang, Islam, Ren. **["Making AI Less 'Thirsty'"](https://dl.acm.org/doi/10.1145/3724499)** *CACM* (2025; arXiv [2304.03271](https://arxiv.org/abs/2304.03271)). | Water per inference. GPT-3 ≈ 500 ml per 10–50 medium responses. Varies 2–4× by region. |

### Food / meals

| Source | What it gives you |
| --- | --- |
| Poore & Nemecek. **["Reducing food's environmental impacts through producers and consumers"](https://www.science.org/doi/10.1126/science.aaq0216)** *Science* (2018). | The canonical food LCA meta-analysis: 38,700 farms, 119 countries, 40 products. |
| **[Our World in Data — Environmental Impacts of Food](https://ourworldindata.org/environmental-impacts-of-food)** | Per-kg / per-100g-protein / per-1000-kcal CO₂e, land, water — built on Poore & Nemecek. |

### Transport, flights, household

| Source | What it gives you |
| --- | --- |
| **[EPA — Greenhouse gas emissions, typical passenger vehicle](https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle)** | ~404 g CO₂e per mile, US average. |
| **[ICAO Carbon Calculator](https://www.icao.int/environmental-protection/Carbonoffset/Pages/default.aspx)** | Per-passenger flight CO₂ by route. |
| **[EPA Energy Star](https://www.energystar.gov/)** | Household appliance energy use, including washers/dryers/heating. |

### Optional (credibility / context)

- **[Hugging Face AI Energy Score](https://huggingface.co/spaces/AIEnergyScore/Leaderboard)** — community leaderboard with per-task numbers.
- **[ML CO2 Impact Calculator](https://mlco2.github.io/impact/)** — Lacoste et al., for training cost.

If your tool argues about something *outside* the topics above (kindness, attention, honesty, time, money), the same rule applies: cite where your framing comes from. A philosopher, a study, a specific piece of journalism — anything as long as the user can see the lineage.

---

## What "good" looks like

- A hosted tool at a public URL, single page, finished enough to use end-to-end.
- The value the tool argues for is **named explicitly in the UI**.
- Every number, claim, or scoring rule has a source link visible to the user (not buried in your report).
- Your `vibe-report.md` is honest about whether building/using the tool actually changed your behavior, and which value tradeoff is now more salient to you.

## What to avoid

- Generic "AI is bad" / "AI is great" framings. The value should be *actionable* and *specific*.
- Made-up numbers. Use the sources above or note clearly that you're estimating and why.
- Hiding the methodology. If a non-technical reader can't tell where the tool's argument comes from, the tool fails on its own terms.

---

## Submission: Vibe Report

Use [`vibe-report-template.md`](vibe-report-template.md) (in this folder). Required sections:

1. **The Value Your Tool Argues For** — one or two sentences naming what your tool pushes the user toward, and why that value over a competing one.
2. **Sources & Methodology** — link every source you cited. Note any that you struggled to find, and what you fell back to. If you used a number that didn't come from the recommended sources, justify it.
3. **The Output** — what does the tool actually show the user? A screenshot or short flow.
4. **Did Knowing Change Anything?** — honest reflection on whether building/using the tool shifted your behavior in the day or two since, and which value tradeoff (if any) is now more salient.
5. **AI Usage Trace** — link `log_deliverable/history.md`.

Graded against the [In-Class Activity Rubric](../../planning/activity_rubric.md) (40% Completion, 30% AI-Use Documentation, 30% Reflection Quality).

### Deliverables
- `code_deliverable/` — the hosted tool. The **deployed public URL alone is enough** — paste it in your Canvas submission and `vibe-report.md`. A `code_deliverable/README.md` is **optional**; if you add one, keep it to a line or two (what the tool is, the live link, and the data sources you cited).
- `log_deliverable/` — prompts and tool transcripts
- `vibe-report.md`

### Submission
Submit on Canvas: upload a zip of the entire `week2/7_20/` folder and paste your deployed assignment link. Before submitting, commit and push your `code_deliverable/`, `log_deliverable/history.md`, and `vibe-report.md` to your GitHub Classroom repo. We grade the Canvas submission against your GitHub commit history and hosted page; commits pushed after the Canvas submission time do not count unless the instructor asks you to resubmit.


<!-- READINGS:START (generated by scripts/sync_readings.py — edit activities-manifest.json instead) -->

## 📖 Reading

- **Primary** 🟢 — [Common Cause Foundation. 2023. The Values Map.](https://commoncausefoundation.org/_resources/the-values-map/)
- **Optional** 🔵 — [Flanagan, M., Nissenbaum, H. Values at Play — Ch. 1: Groundwork for Values in Games.](https://drive.google.com/file/d/14fTIg05HNcARYP5JrEJ87KC29D2QAgqM/view?usp=drive_link)
- **Optional** 🟢 — [Karpus, J. et al. 2021. Algorithm exploitation: Humans are keen to exploit benevolent AI. iScience 24(6).](https://doi.org/10.1016/j.isci.2021.102679)

**Full course reading list:** [Course readings — all sessions](https://vibe-coding-ethics.tech.cornell.edu/instructions.html?file=planning/readings.md&title=Course%20Readings)
<!-- READINGS:END -->
