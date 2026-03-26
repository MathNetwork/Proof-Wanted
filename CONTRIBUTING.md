# Contributing

Thank you for your interest in contributing formalization candidates!

## Adding a new candidate

1. **Copy the template** into the appropriate subdirectory:
   ```bash
   # For a proven theorem:
   cp -r TEMPLATE candidates/known-theorems/your-candidate-name
   # For an open conjecture:
   cp -r TEMPLATE candidates/open-conjectures/your-candidate-name
   ```

2. **Fill in `README.md`** following the template fields: name, type, area, mathematical statement, source, Mathlib infrastructure assessment, and proof complexity estimate.

3. **Write `Statement.lean`:**
   - Use specific Mathlib imports (not `import Mathlib`)
   - All proofs should be `sorry`
   - The file must type-check against the current Mathlib version

4. **Add a `lean_lib` entry** in `lakefile.lean`:
   ```lean
   lean_lib YourCandidateName where
     srcDir := "candidates/known-theorems/your-candidate-name"  -- or open-conjectures/
     roots := #[`Statement]
   ```

5. **Verify it compiles:**
   ```bash
   lake exe cache get
   lake build YourCandidateName
   ```

6. **Update the table** in the top-level `README.md`.

7. **Open a pull request.**

## Guidelines

- **One candidate per folder.** Each folder contains exactly one `README.md` and one `Statement.lean`.
- **Statements only.** We verify that statements type-check; proofs are out of scope for this repo.
- **Use correct Mathlib API names.** Search [Mathlib docs](https://leanprover-community.github.io/mathlib4_docs/) or grep the source.
- **Document missing infrastructure.** If a key definition doesn't exist in Mathlib, note it in the README and use `sorry` in the definition.
- **Keep imports minimal.** Import only what you need, not all of Mathlib.

## Naming conventions

- Folder names: lowercase, hyphenated (e.g., `sard-theorem`)
- Lean lib names in lakefile: PascalCase (e.g., `SardTheorem`)
- The Lean file is always called `Statement.lean`

## Updating Mathlib

When Mathlib updates break existing statements:

1. Update `lean-toolchain` to match Mathlib's
2. Run `lake update && lake exe cache get`
3. Fix any broken statements
4. Note changes in `REPORT.md`
