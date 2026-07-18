## Verification Workflow

- Do NOT start the Vite dev server (`npm run dev` / `vite`) or open a browser preview after edits. I run that myself.
- Do NOT run the app end-to-end or attempt manual/visual verification unless I explicitly ask.
- Run `npm run typecheck` (or `tsc --noEmit`) only if you touched `.ts`/`.tsx` files, changed function signatures, props, or types. Skip it for style-only, text-only, or JSX-markup-only changes.
- Do NOT run full test suites automatically. Run a single relevant test file only if I ask or if you changed logic covered by existing tests.
- After making changes, stop and give me a short summary of what changed and why. Don't chase "green" verification for its own sake.
- If you're not sure whether a change needs type-checking, ask me instead of running it "just in case."
