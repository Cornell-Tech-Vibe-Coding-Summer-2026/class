# Value Verification — Does It Embed the Value It Claims?

Yesterday you tested whether people **can use** your team's Project 2 prototype. Today you
test the harder thing: whether it actually **does the right thing** — whether it delivers the
**value your team claimed**, for the person you claimed to serve.

**This is an individual activity on your team's deployed Project 2 prototype** — the same
live link you tested Monday. Everyone runs their own verification and writes their own
report. **No coding today** — you're the values researcher.

> **Usable ≠ right.** A tool can be flawless to use and still fail the value it promised —
> quietly nudging, excluding, or manipulating the very person it claims to help. Monday
> asked *"can they use it?"* Today asks *"does it do what it claims to do?"*

> [!NOTE]
> **Today's guest lecture is on accessibility** — itself one of the clearest values to
> verify. Borrow its lens even if your team's value is something else: who does your
> design quietly exclude?

## The idea: you can't verify a value until you operationalize it

From **[Values at Play](https://drive.google.com/file/d/1FGbCVYgsKt9kW_sH0R2_B-LFcTmJum04/view?usp=share_link)**
(Flanagan & Nissenbaum): a value like *privacy*, *care*, or *autonomy* is too abstract to
test directly. You first **operationalize** it — say what is concretely true of the product
if the value is present — and then **verify** it three ways:

- **Behavior** — do people *act* / decide differently in line with the value?
- **Understanding** — do people *understand* the value (or the harm) better?
- **Affect / attitude** — do people *feel*, judge, or empathize differently because of it?

## Step 1 — State & operationalize the claim
Pull the value your team claimed in your Project 2 report, then make it testable:
- **The value:** [name it]
- **Operationalized:** complete — *"If this product embeds [value], then a user will* ___ */ understands* ___ */ feels* ___*."* Be concrete: "privacy" can mean control, secrecy, or contextual integrity — pick your reading.
- **For whom** it should hold — and **who could be excluded, misled, or harmed.**
- **The one claim you'll test today:** the single most important thing that must be true.

## Step 2 — Pick your verification lens + a method
Choose the **lens** that best fits your value, and at least one concrete method under it:

| Lens | The question | Methods you can run today |
| :-- | :-- | :-- |
| **Behavior** | Do users' actions/decisions align with the value? | Task-completion observation · A/B two versions · before/after choice · usage trace |
| **Understanding** | Do users understand the value / harm better? | Think-aloud · pre/post question · scenario question · knowledge-transfer task |
| **Affect / attitude** | Do attitudes, empathy, or feelings shift? | Attitude survey (pre/post) · short interview · empathy map · choice under pressure |

## Step 3 — Add a validated instrument (don't just eyeball it)
Pick **at least one**, matched to your value — a real instrument beats questions you invented:
- **[UEQ](https://www.ueq-online.org/)** — measures UX *beyond* usability: attractiveness, novelty, stimulation, dependability. Use it when your value is about delight, trust, or craft.
- **A validated scale for your specific value** — browse the **[HRI Scale Database](http://hriscaledatabase.psychology.gmu.edu/)** (trust, warmth, competence, safety…) or the **[METUX / Self-Determination scales](https://selfdeterminationtheory.org/metux-scales/)** (autonomy, competence, relatedness) for wellbeing/empowerment values.
- **[The Vibed Slop Detector](https://github.com/HaukeCornell/Vibed-Slop-Detector)** (built on the [impeccable.style](https://impeccable.style/slop/) slop rules) — run it on your deployed page. Generic **AI "slop"** is evidence that craft, care, and originality did *not* get embedded; a clean result is weak evidence they did.

> [!TIP]
> Match the instrument to the value. Autonomy/empowerment → METUX/SDT. Trust/safety → an HRI trust scale. Beauty/originality/craft → UEQ + slop detector. Don't run all of them — run the *right* one, well.

## Step 4 — Run a small verification
Gather **real evidence**, not opinion:
- Test with 2–3 people (can be yesterday's testers), **or** administer the scale, **or** run the instrument/tool.
- Record what you *observed or measured* — not what you hoped.
- Note where the **AI's defaults bent your value**: a dark-patterny default, a manipulative nudge, a generic slop design that ignores the specific user you named.

## Step 5 — Verdict
Answer honestly: **does the built thing deliver the value it claims?**
- Behavior / understanding / affect evidence — for *and* against.
- Who it serves well, and who it excludes or nudges.
- The **one change** you'd make to close the biggest claim-vs-reality gap. (You won't build it today — Wednesday and Thursday are for the final project.)

## Deliverable
Fill in the provided **`vibe-report.md`** (edit it in place — don't make a copy). **No `code_deliverable/` today** — you're verifying, not building.
- `vibe-report.md` — your value-verification report: claim, operationalization, method + instrument, evidence, verdict, and the fix.
- `log_deliverable/history.md` — any AI you used (running the slop detector, help drafting a survey, etc.).

Everyone submits **one write-up.** Due Tuesday (Jul 28) — see `deadline.json`.


<!-- READINGS:START (generated by scripts/sync_readings.py — edit activities-manifest.json instead) -->

## 📖 Reading

- **Primary** 🔵 — [Flanagan, M., Nissenbaum, H. Values at Play — Verification: operationalize a value, then test whether the built thing realizes it (behavior · understanding · affect).](https://drive.google.com/file/d/1FGbCVYgsKt9kW_sH0R2_B-LFcTmJum04/view?usp=share_link)
- **Reference** 🟢 — [UEQ — User Experience Questionnaire: a validated scale measuring not just usability but attractiveness, novelty, and stimulation. Laugwitz, Held & Schrepp 2008.](https://www.ueq-online.org/)
- **Reference** 🟢 — [HRI Scale Database (George Mason) — 'Finding the Perfect Scale': browse validated scales (trust, warmth, competence…) rated for psychometric quality, to test the value you claim.](http://hriscaledatabase.psychology.gmu.edu/)
- **Reference** 🟢 — [METUX / Self-Determination Theory scales — measure autonomy, competence, and relatedness for wellbeing-oriented values. Peters, Calvo & Ryan 2018.](https://selfdeterminationtheory.org/metux-scales/)
- **Reference** 🟢 — [Vibed Slop Detector (Sandhaus/Hayatt), built on the impeccable.style 'slop' rules — flag generic AI-slop design tells as a proxy for craft, care, and originality.](https://github.com/HaukeCornell/Vibed-Slop-Detector)
- **Reference** 🟢 — [Sandhaus, H., Rhomberg, D.M., Nissenbaum, H. 2026. Making Indecent Persuasion Visible: How Evaluation Metrics Shape UX Designers' Ethical Reasoning. CHIWORK '26 (LBW, preprint).](https://osf.io/nw2tj/files/g2ctu)
- **Optional** 🟢 — [Romero, K., Wiese, I., Balancieri, R., Leal, G.C., Guerino, G. 2026. Usable but Conventional: An Empirical Study on the UX of AI-Generated Interface Prototypes (UEQ-S). arXiv:2605.15124.](https://arxiv.org/abs/2605.15124)
- **Optional** 🔵 — [Flanagan, M., Nissenbaum, H. Values at Play in Digital Games — full digital book.](https://drive.google.com/drive/folders/1qZ8x8MXbJaex-7LnnrBUVR0_H87oBz24?usp=share_link)

**Full course reading list:** [Course readings — all sessions](https://vibe-coding-ethics.tech.cornell.edu/instructions.html?file=planning/readings.md&title=Course%20Readings)
<!-- READINGS:END -->
