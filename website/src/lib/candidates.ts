import fs from "fs";
import path from "path";

export interface Candidate {
  slug: string;
  type: "conjecture" | "theorem";
  name: string;
  area: string;
  status: "verified" | "draft" | "partial" | "blocked";
  estimatedLines: string;
  mathStatement: string;
  source: string;
  whyGood: string;
  infrastructure: string;
  proofComplexity: string;
  fullReadme: string;
  leanCode: string;
  leanStatus: string;
  contributor: string;
}

function extractSection(content: string, heading: string): string {
  const regex = new RegExp(
    `^##\\s+${heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\n([\\s\\S]*?)(?=^##\\s|$)`,
    "m"
  );
  const match = content.match(regex);
  if (!match) return "";
  return match[1]
    .replace(/<!--[\s\S]*?-->/g, "")
    .trim();
}

function extractField(content: string, heading: string): string {
  const section = extractSection(content, heading);
  return section.split("\n")[0]?.trim() || "";
}

function extractStatus(content: string): Candidate["status"] {
  const leanSection = extractSection(content, "Lean 4 Statement");
  if (/✅\s*verified/i.test(leanSection)) return "verified";
  if (/⚠️?\s*partial/i.test(leanSection)) return "partial";
  if (/❌\s*blocked/i.test(leanSection)) return "blocked";
  if (/⚠️?\s*draft/i.test(leanSection)) return "draft";
  // Also check Status section
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

      candidates.push({
        slug: folder,
        type,
        name: extractField(readmeContent, "Name"),
        area: extractField(readmeContent, "Area"),
        status: extractStatus(readmeContent),
        estimatedLines: extractEstimatedLines(readmeContent),
        mathStatement: extractSection(readmeContent, "Mathematical Statement"),
        source: extractSection(readmeContent, "Source"),
        whyGood: extractSection(readmeContent, "Why this is a good formalization target"),
        infrastructure: extractSection(readmeContent, "Mathlib Infrastructure"),
        proofComplexity: extractSection(readmeContent, "Proof Complexity Estimate"),
        fullReadme: readmeContent,
        leanCode,
        leanStatus: extractSection(readmeContent, "Lean 4 Statement"),
        contributor: extractField(readmeContent, "Contributor"),
      });
    }
  }

  return candidates;
}

export function getCandidate(slug: string): Candidate | undefined {
  return getAllCandidates().find((c) => c.slug === slug);
}
