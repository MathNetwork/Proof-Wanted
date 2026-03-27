import MarkdownContent from "@/components/MarkdownContent";

const CONTENT = `
# Contributing

Contributions are via pull request on [GitHub](https://github.com/MathNetwork/Proof-Wanted).

## Adding a new candidate

1. Create a folder under \`candidates/known-theorems/\` or \`candidates/open-conjectures/\`.
2. Add a \`README.md\` with: name, type, area, mathematical statement, source, Mathlib infrastructure check, proof complexity estimate.
3. Add a \`Statement.lean\` with specific Mathlib imports. All proofs should be \`sorry\`.
4. Add a \`lean_lib\` entry in \`lakefile.lean\`:

\`\`\`lean
lean_lib YourCandidateName where
  srcDir := "candidates/known-theorems/your-candidate-name"
  roots := #[\\\`Statement]
\`\`\`

5. Verify it compiles:

\`\`\`bash
lake exe cache get
lake build YourCandidateName
\`\`\`

6. Update the table in the top-level \`README.md\`.
7. Open a pull request.

## Guidelines

- One candidate per folder. Each folder has exactly one \`README.md\` and one \`Statement.lean\`.
- Statements only. Proofs are out of scope for this repo.
- Use correct Mathlib API names. Search [Mathlib docs](https://leanprover-community.github.io/mathlib4_docs/) or grep the source.
- If a key definition doesn't exist in Mathlib, note it in the README and use \`sorry\` in the definition.
- Keep imports minimal. Import only what you need, not all of Mathlib.

## Naming conventions

- Folder names: lowercase, hyphenated (e.g., \`sard-theorem\`)
- Lean lib names in lakefile: PascalCase (e.g., \`SardTheorem\`)
- The Lean file is always called \`Statement.lean\`
`;

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <MarkdownContent content={CONTENT} />
    </div>
  );
}
