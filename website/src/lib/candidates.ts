import fs from "fs";
import path from "path";

export interface Candidate {
  slug: string;
  type: "conjecture" | "theorem";
  name: string;
  area: string;
  summary: string;
  status: "verified" | "draft" | "partial" | "blocked";
  estimatedLines: string;
  mathStatement: string;
  source: string;
  whyGood: string;
  infrastructure: string;
  proofComplexity: string;
  leanCode: string;
  contributor: string;
}

const SUMMARIES: Record<string, string> = {
  "frankl-semimodular":
    "Every finite upper semimodular lattice has a join-irreducible element in at most half the lattice.",
  "davenport-rank-two":
    "The Davenport constant of Z_n x Z_n equals 2n - 1.",
  "sl2r-trace-classification":
    "Elements of SL(2,R) are classified as elliptic, parabolic, or hyperbolic by their trace.",
  "sl2r-homogeneous-space":
    "SL(2,R) acts transitively on the upper half-plane with stabilizer SO(2).",
  "cayley-transform":
    "The Cayley transform is a biholomorphism between the Poincare disk and the upper half-plane.",
  "cantor-set-dimh":
    "The middle-thirds Cantor set has Hausdorff dimension log 2 / log 3.",
  "besicovitch-covering":
    "Bounded sets in R^n admit efficient covers by families of disjoint balls.",
  "sard-theorem":
    "Critical values of smooth maps have Lebesgue measure zero.",
  "coarea-formula":
    "Integral of the Jacobian equals the integral of Hausdorff measures of level sets.",
  "azuma-hoeffding":
    "Exponential concentration bound for martingales with bounded increments.",
  "kolmogorov-01":
    "Events in the tail sigma-algebra of independent random variables have probability 0 or 1.",
  "poincare-inequality":
    "L2 norm of a function on a bounded domain is controlled by the L2 norm of its gradient.",
  "lax-milgram":
    "Coercive continuous bilinear forms on Hilbert spaces yield unique solutions.",
  "rellich-kondrachov":
    "Sobolev embeddings below the critical exponent are compact.",
  "maximum-principle-harmonic":
    "Harmonic functions on bounded domains attain their maximum on the boundary.",
};

/** Strip common emoji used as status markers in source READMEs. */
function stripEmoji(s: string): string {
  return s
    .replace(/✅/g, "[yes]")
    .replace(/⚠️?/g, "[partial]")
    .replace(/❌/g, "[no]")
    .replace(/🔴|🟢|🟡/g, "");
}

function extractSection(content: string, heading: string): string {
  const regex = new RegExp(
    `^##\\s+${heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\n([\\s\\S]*?)(?=^##\\s|$)`,
    "m"
  );
  const match = content.match(regex);
  if (!match) return "";
  return stripEmoji(match[1].replace(/<!--[\s\S]*?-->/g, "").trim());
}

function extractField(content: string, heading: string): string {
  const section = extractSection(content, heading);
  return section.split("\n")[0]?.trim() || "";
}

function extractStatus(content: string): Candidate["status"] {
  const leanSection = extractSection(content, "Lean 4 Statement");
  if (/verified/i.test(leanSection)) return "verified";
  if (/partial/i.test(leanSection)) return "partial";
  if (/blocked/i.test(leanSection)) return "blocked";
  const statusSection = extractSection(content, "Status");
  if (/blocked/i.test(statusSection)) return "blocked";
  return "draft";
}

function extractEstimatedLines(content: string): string {
  const section = extractSection(content, "Proof Complexity Estimate");
  const match = section.match(/\*\*Estimated lines:\*\*\s*(.+)/);
  return match ? match[1].trim() : "";
}

export function getAllCandidates(): Candidate[] {
  const types: Array<{ dir: string; type: Candidate["type"] }> = [
    { dir: "open-conjectures", type: "conjecture" },
    { dir: "known-theorems", type: "theorem" },
  ];

  const candidates: Candidate[] = [];
  const contentDir = path.join(process.cwd(), "content");

  for (const { dir, type } of types) {
    const fullDir = path.join(contentDir, dir);
    if (!fs.existsSync(fullDir)) continue;

    const folders = fs
      .readdirSync(fullDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);

    for (const folder of folders) {
      const readmePath = path.join(fullDir, folder, "README.md");
      const leanPath = path.join(fullDir, folder, "Statement.lean");

      const readmeContent = fs.existsSync(readmePath)
        ? fs.readFileSync(readmePath, "utf-8")
        : "";
      const leanCode = fs.existsSync(leanPath)
        ? fs.readFileSync(leanPath, "utf-8")
        : "";

      const readmeSummary = extractField(readmeContent, "Summary");

      candidates.push({
        slug: folder,
        type,
        name: extractField(readmeContent, "Name"),
        area: extractField(readmeContent, "Area"),
        summary: readmeSummary || SUMMARIES[folder] || "",
        status: extractStatus(readmeContent),
        estimatedLines: extractEstimatedLines(readmeContent),
        mathStatement: extractSection(readmeContent, "Mathematical Statement"),
        source: extractSection(readmeContent, "Source"),
        whyGood: extractSection(
          readmeContent,
          "Why this is a good formalization target"
        ),
        infrastructure: extractSection(readmeContent, "Mathlib Infrastructure"),
        proofComplexity: extractSection(
          readmeContent,
          "Proof Complexity Estimate"
        ),
        leanCode: leanCode.replace(/✅|⚠️?|❌|🔴|🟢|🟡/g, "").replace(/  +/g, " "),
        contributor: extractField(readmeContent, "Contributor"),
      });
    }
  }

  return candidates;
}

export function getCandidate(slug: string): Candidate | undefined {
  return getAllCandidates().find((c) => c.slug === slug);
}
