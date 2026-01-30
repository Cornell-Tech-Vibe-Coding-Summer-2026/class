## [Local Time: 2026-01-30 01:15:00]

**User Prompt**:
> Mobile improvements: Safari bottom bar visibility, TikTok-style instant snap scrolling, remove accelerometer (didn't work).

**Metadata & Annotations**:
- **Time**: 2026-01-30 01:15:00
- **Annotations**: Mobile UX polish and performance.

**Input Files**:
- `code_deliverable/src/App.jsx`
- `code_deliverable/src/index.css`

**Action Summary**:
- Added Safari safe area insets (`env(safe-area-inset-bottom)`) so buttons aren't hidden by Safari's bottom bar
- Removed accelerometer/device orientation code (iOS requires explicit permission popup)
- Made scrolling TikTok-style snappy:
  - Reduced `damping` from 0.1 to 0.05
  - Reduced snap delay from 100ms to 50ms
  - Changed snap from `behavior: 'smooth'` to `behavior: 'instant'`
- Synced 3D/CSS breakpoints to both use 768px

---


**User Prompt**:
> Major content restructure: Change title to hauke.haus, update all links, add dissertation section with Piggy Bank model, add teaching section, update industry section for VW Future Center, etc.

**Metadata & Annotations**:
- **Time**: 2026-01-30 00:25:00
- **Annotations**: Major content and structure update with 6 sections.

**Input Files**:
- `code_deliverable/src/App.jsx`
- `code_deliverable/src/index.css`

**Action Summary**:
- Changed logo from "HAUKE_S." to "hauke.haus"
- Restructured to 6 sections:
  1. **About** - Avatar, Instagram (hauke.haus)
  2. **Scholar** - Paper Stack, Google Scholar + Academic Portfolio
  3. **Research** - Piggy Bank (NEW), Ethical Design dissertation focus, UEEQ, Bright Patterns
  4. **Industry** - Van, VW Future Center experience, old portfolio, CV
  5. **Teaching** - Desk, Vibe coding & AI co-design, ACM paper
  6. **Connect** - Statue, LinkedIn, Email (updated)
- Added Piggy Bank model for ethical design section
- Updated all links per user request
- Added new CSS button styles (figma, cv, teaching)
- Updated section backgrounds

---
## [Local Time: 2026-01-28 17:20:00]

**User Prompt**:
> Is maybe https://github.com/14islands/r3f-scroll-rig and the sticky scroll scene a solution?

**Metadata & Annotations**:
- **Time**: 2026-01-28 17:20:00
- **Annotations**: User suggested switching to r3f-scroll-rig library for better scroll-DOM sync.

**Input Files**:
- `code_deliverable/src/App.jsx`
- `code_deliverable/src/index.css`
- `code_deliverable/package.json`

**Action Summary**:
- Installed `@14islands/r3f-scroll-rig` package.
- Complete architectural rewrite using:
  - `GlobalCanvas` - persistent 3D canvas layer
  - `SmoothScrollbar` - Lenis-powered smooth scroll
  - `UseCanvas` + `ScrollScene` - DOM-tracked 3D scenes
- Each section now has a "track" div that the 3D model follows.
- Native scrollIntoView works for navigation.
- Removed drei's ScrollControls entirely.

---
## [Local Time: 2026-01-28 16:30:00]

**User Prompt**:
> I like this direction! The buttons dont scroll to the sections yet. There seems to be some black overlay in front of everything. Stack of paper needs to be around 5x bigger.

**Metadata & Annotations**:
- **Time**: 2026-01-28 16:30:00
- **Annotations**: Bug fixes for navigation and visibility.

**Input Files**:
- `code_deliverable/src/App.jsx`
- `code_deliverable/src/index.css`

**Action Summary**:
- Added `onClick` handlers to nav links with `scrollIntoView({ behavior: 'smooth' })`.
- Changed section background gradients from opaque black fade to transparent fade.
- Increased Paper Stack scale from 3 to 15.

---
## [Local Time: 2026-01-28 16:15:00]

**User Prompt**:
> ok now I can see them all and scroll through them! ... I want more text... 3D link tree landing page... different background colors... Large Stack of Paper.glb...

**Metadata & Annotations**:
- **Time**: 2026-01-28 16:15:00
- **Annotations**: Major redesign: Link tree style, more content, section backgrounds, in-page nav, new Scholar model.

**Input Files**:
- `code_deliverable/src/App.jsx`
- `code_deliverable/src/index.css`

**Action Summary**:
- Complete redesign as "3D Link Tree" landing page.
- Restructured sections: About, Scholar, Research, Projects, Ethics, Connect.
- Added new Paper Stack model for Scholar section.
- In-page navigation (scroll to #section).
- Unique background color per section.
- Stricter model visibility with spring-like fade animation.
- Removed ContactShadows to fix ground plane artifacts.
- Applied user's model position values.

---
## [Local Time: 2026-01-28 16:00:00]

**User Prompt**:
> So there should always be one model next to the relevant text. I can see at least all things now. The page seems to long though. Maybe add some cotnrols so I can set up the inital position and size of the models...

**Metadata & Annotations**:
- **Time**: 2026-01-28 16:00:00
- **Annotations**: User wants Leva controls back for model tuning and shorter page length.

**Input Files**:
- `code_deliverable/src/App.jsx`

**Action Summary**:
- Re-added Leva controls for each model (scale, position).
- Moved models to the right side of the screen (x offset) so they appear beside the text.
- Reduced page count from 6 to match content better.

---
## [Local Time: 2026-01-28 15:55:00]

**User Prompt**:
> Im stuck with getting the 3d model locations and snapping behavior right.

**Metadata & Annotations**:
- **Time**: 2026-01-28 15:55:00
- **Annotations**: User is blocked on scroll mechanics. Requires architectural simplification.

**Input Files**:
- `code_deliverable/src/App.jsx`

**Action Summary**:
- **Complete Rewrite of Scroll Logic**:
    - Moved 3D models OUTSIDE of `<Scroll>` so they don't move with the scroll container.
    - Each model now animates based on `scroll.offset` directly.
    - Simplified visibility: only show the model for the "current page" based on scroll offset.
    - Removed complex range/visible calculations in favor of simple index comparison.

---
## [Local Time: 2026-01-28 15:10:00]

**User Prompt**:
> seems to not work in terms of snapping and the other moels are not visible just the head.
> It starts at the right position but then kind of scrools in a weird manner.

**Metadata & Annotations**:
- **Time**: 2026-01-28 15:10:00
- **Annotations**: User reported misalignment between scroll snap points and model visibility ranges, causing models to cut off or disappear.

**Input Files**:
- `code_deliverable/src/App.jsx`

**Action Summary**:
- **App.jsx**:
    - Aligned scroll math to match `ScrollControls` snap points.
    - Changed loop divisor from `6` (pages) to `5` (intervals) so centers align at 0.0, 0.2, 0.4, 0.6, 0.8, 1.0.
    - Updated `visible()` check to use overlapping ranges to prevent flickering.
    - Relaxed the snap damping for smoother arrival.

---
## [Local Time: 2026-01-28 15:00:00]

**User Prompt**:
> We need a better way to separate the 3D sections. I want some snap scroll mechanism.
> ... Essentially the other models should fully disappear when in the section.
> ... More like a traditional website, maybe someaht apple inspired. I do like the frosted glasss look.

**Metadata & Annotations**:
- **Time**: 2026-01-28 15:00:00
- **Annotations**: User requested significant UX upgrades: snap scrolling, strict model isolation (visibility toggling), and "Apple-style" full-screen content sections with frosted glass.

**Input Files**:
- `code_deliverable/src/App.jsx`
- `code_deliverable/src/index.css`

**Action Summary**:
- **App.jsx**:
    - Enabled `snap` prop in `ScrollControls`.
    - Refactored `ExpertiseShape` to use `visible` property based on strict scroll ranges (models now disappear when out of focus).
    - Expanded HTML content with lorem ipsum/placeholder text for a "traditional website" feel.
- **index.css**:
    - Enhanced `.section` styles for full-screen snap compatibility.
    - Improved typography and "frosted glass" cards.

---
## [Local Time: 2026-01-27 16:30:00]

**User Prompt**:
> website is not running rn.

**Metadata & Annotations**:
- **Time**: 2026-01-27 16:30:00
- **Annotations**: Development server was down. Restarted it in `activity1_3d-example/code_deliverable`.

**Input Files**:
- N/A

**Action Summary**:
- Checked port 5173 (found empty).
- Restarted `npm run dev` server.
- Verified server is listening on localhost:5173.

---
## [Local Time: 2026-01-27 16:25:00]

**User Prompt**:
> Round to nearer values.
> [List of adjusted values for Avatar, Lib, Pretzel, Statue, Desk, Table]
> I dont like the flag lets remove it.
> had issues getting the van in view since only rot is in the controls not pos.
> ...
> Lets do some typography setting add regular text into the website.
> Also lets add some mouse pointer interaction...

**Metadata & Annotations**:
- **Time**: 2026-01-27 16:25:00
- **Annotations**:
    - Applying user-defined transform values.
    - Removing German Flag.
    - Implementing HTML-based typography (replacing or augmenting 3D text).
    - Adding mouse-based rotation interaction.
    - Fixing Van positioning.

**Input Files**:
- `code_deliverable/src/App.jsx`
- `code_deliverable/src/index.css`

**Action Summary**:
- **App.jsx**:
    - Removed `Leva` controls.
    - Updated `Model` component to rotate based on `state.mouse` instead of `clock.elapsedTime`.
    - Hardcoded new rounded values for all models.
    - Removed German Flag model.
    - Added `position` prop to Van model.
    - Switched from strict 3D Text to HTML typography overlays.
- **index.css**:
    - Added styles for the new HTML text sections.

---
## [Local Time: 2026-01-27 15:55:00]

**User Prompt**:
> Good it works!
> Looks like some are way too big. So 0.1 on the pretzel is still too big.
> Also theh are all visible at first. Maybe add some toggles to turn on off visibility in the controls.

**Metadata & Annotations**:
- **Time**: 2026-01-27 15:55:00
- **Annotations**: User requires finer control over scaling (breaking the 0.1 barrier) and visibility toggles to isolate models during debugging.

**Input Files**:
- `code_deliverable/src/App.jsx`

**Action Summary**:
- Updated `useControls` in `App.jsx`:
    - Decreased `min` scale to `0.001` and `step` to `0.001` for high-precision tuning.
    - Added `visible` toggles for every model instance.
- Applied conditional rendering in the `Scene` component based on the new visibility flags.

---
## [Local Time: 2026-01-27 15:35:00]

**User Prompt**:
> I can seer a bunch of the moels. There seem to be some scaling and size issues.
> Can you add some controls for me to position them and then feed thos values back to you to implement in code?

**Metadata & Annotations**:
- **Time**: 2026-01-27 15:35:00
- **Annotations**: User requested debug controls to manually tune model placement.

**Input Files**:
- `code_deliverable/src/App.jsx`
- `code_deliverable/package.json`

**Action Summary**:
- Installed `leva` dependency.
- Added `useControls` to `App.jsx` for all 3D model groups (Avatar, Mobility, NYC, Germany, Ethics, Teaching).
- Connected the debug control values to the `scale`, `position`, and `rotation` props of the `Model` comopnents.
- This allows the user to interactively adjust the models in the browser and report back the ideal values.

---
## [Local Time: 2026-01-27 15:15:00]

**User Prompt**:
> reached quota. Lets continue with the other model .

**Metadata & Annotations**:
- **Time**: 2026-01-27 15:15:00
- **Annotations**: User switched models. Continuing debugging of Lady Liberty visibility.

**Input Files**:
- `code_deliverable/src/App.jsx`

**Action Summary**:
- Implemented `<Center>` component from `@react-three/drei` to automatically center all 3D models, resolving potential geometry offset issues.
- maintained scale increase for Lady Liberty.
- Removed debug UI (red box and page counter) for a cleaner "premium" look.

---
## [Local Time: 2026-01-26 16:35:00]

**User Prompt**:
> Ok website is there. I dont see most of the content yet. 
> I added a few glb here. week1/7_13/activity2_3d/code_deliverable/public/3D_files
> Most importantly the hauke_avatar.glb
> Connect these to my website where we just scroll down through them.

**Metadata & Annotations**:
- **Time**: 2026-01-26 16:35:00
- **Annotations**: [The user provided actual GLB models and wants to replace the abstract shapes with these models in a scroll-based journey.]

**Input Files**:
- `week1/7_13/activity2_3d/code_deliverable/src/App.jsx`
- `week1/7_13/activity2_3d/code_deliverable/public/3D_files/atttribution.md`

**Action Summary**:
- Integrated provided GLB models into the 3D expertise map:
  - **Hauke Avatar**: Main introduction model.
  - **Van**: Autonomous mobility research.
  - **Lady Liberty**: NYC and urban tech context.
  - **German Flag & Pretzel**: Cultural roots.
  - **Statue**: Representing ethics and philosophy.
  - **School Desk & Drafting Table**: Teaching and Vibe Coding.
- Added `Suspense` and a `Loader` component to manage model loading (especially the 6.8MB avatar).
- Tuned scales and positions for the new real-world models.
- Pre-loaded all models for a seamless scrolling experience.

---
