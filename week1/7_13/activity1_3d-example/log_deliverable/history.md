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
