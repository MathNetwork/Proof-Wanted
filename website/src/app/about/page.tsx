import fs from "fs";
import path from "path";
import MarkdownContent from "@/components/MarkdownContent";

export default function AboutPage() {
  const contributingPath = path.join(process.cwd(), "..", "CONTRIBUTING.md");
  let content = "";
  try {
    content = fs.readFileSync(contributingPath, "utf-8");
  } catch {
    content = "# Contributing\n\nSee the [GitHub repo](https://github.com/MathNetwork/Proof-Wanted) for details.";
  }

  return (
    <div className="mx-auto max-w-3xl">
      <MarkdownContent content={content} />
    </div>
  );
}
