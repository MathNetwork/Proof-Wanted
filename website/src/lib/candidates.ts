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
  verdict: string;
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
  "wasserstein-metric":
    "The p-Wasserstein distance defines a metric on probability measures with finite p-th moment.",
  "kantorovich-duality-discrete":
    "The minimum transport cost equals the maximum dual value (LP duality for the discrete Kantorovich problem).",
  "optimal-coupling-existence":
    "The Kantorovich optimal transport problem has a minimizer when the spaces are compact and the cost is lower semicontinuous.",
  "erdos-straus":
    "Every fraction 4/n with n >= 2 can be written as a sum of three unit fractions.",
  "sunflower-conjecture":
    "Any sufficiently large uniform family contains a sunflower, with a conjectured C^k bound.",
  "chvatal-conjecture":
    "In any ideal family, the largest intersecting subfamily consists of all sets containing some fixed element.",
  "erdos-matching":
    "Maximum size of a k-uniform family with bounded matching number.",
  "sensitivity-conjecture-tight":
    "Block sensitivity of Boolean functions is at most the square of sensitivity.",
  "equational-theories-samples":
    "Specific undecided implications between equational theories of magmas.",
};

// Use Unicode escapes to strip emoji without emoji literals in source.
// U+2705 = checkmark, U+26A0 = warning, U+FE0F = variation selector,
// U+274C = cross, U+1F534 = red circle, U+1F7E2 = green circle, U+1F7E1 = yellow circle
const EMOJI_RE = /[\u2705\u274C\u26A0]\uFE0F?|[\u{1F534}\u{1F7E2}\u{1F7E1}]/gu;

function stripForMarkdown(s: string): string {
  return s
    .replace(/\u2705\uFE0F?/g, "[yes]")
    .replace(/\u26A0\uFE0F?/g, "[partial]")
    .replace(/\u274C\uFE0F?/g, "[no]")
    .replace(/[\u{1F534}\u{1F7E2}\u{1F7E1}]/gu, "");
}

function stripForCode(s: string): string {
  return s.replace(EMOJI_RE, "").replace(/ {2,}/g, " ");
}

function extractSection(content: string, heading: string): string {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(
    `^##\\s+${escaped}\\s*\\n([\\s\\S]*?)(?=\\n##\\s|\\n#\\s|$(?!\\n))`,
    "m"
  );
  const match = content.match(regex);
  if (!match) return "";
  return stripForMarkdown(match[1].replace(/<!--[\s\S]*?-->/g, "").trim());
}

function extractField(content: string, heading: string): string {
  const section = extractSection(content, heading);
  return section.split("\n")[0]?.trim() || "";
}

function extractStatus(slug: string): Candidate["status"] {
  if (slug === "rellich-kondrachov") return "partial";
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
        status: extractStatus(folder),
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
        leanCode: stripForCode(leanCode),
        contributor: extractField(readmeContent, "Contributor"),
        verdict: extractSection(readmeContent, "6. Verdict"),
      });
    }
  }

  return candidates;
}

export function getCandidate(slug: string): Candidate | undefined {
  return getAllCandidates().find((c) => c.slug === slug);
}
