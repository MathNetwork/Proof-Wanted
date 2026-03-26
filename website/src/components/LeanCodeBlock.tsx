import type { JSX } from "react";

const KEYWORDS = new Set([
  "theorem", "lemma", "def", "noncomputable", "structure", "class",
  "instance", "import", "open", "scoped", "where", "let", "in",
  "have", "by", "sorry", "fun", "match", "with", "if", "then",
  "else", "do", "return", "variable", "section", "namespace", "end",
  "example", "abbrev", "set_option", "attribute", "private",
  "protected", "partial",
]);

function tokenizeLine(line: string): JSX.Element {
  // Check for comment
  const commentIdx = line.indexOf("--");
  if (commentIdx === 0) {
    return <span className="lean-comment">{line}</span>;
  }

  const parts: JSX.Element[] = [];
  let before = line;
  let comment = "";

  if (commentIdx > 0) {
    before = line.slice(0, commentIdx);
    comment = line.slice(commentIdx);
  }

  // Tokenize the non-comment part by word boundaries
  const tokens = before.split(/(\b\w+\b)/);
  tokens.forEach((tok, i) => {
    if (KEYWORDS.has(tok)) {
      parts.push(<span key={i} className="lean-keyword">{tok}</span>);
    } else {
      parts.push(<span key={i}>{tok}</span>);
    }
  });

  if (comment) {
    parts.push(<span key="cmt" className="lean-comment">{comment}</span>);
  }

  return <>{parts}</>;
}

export default function LeanCodeBlock({ code }: { code: string }) {
  const lines = code.split("\n");

  return (
    <div className="overflow-x-auto rounded border border-[#2a2a3a] bg-[#0d0d14]">
      <pre className="font-mono-code p-4 text-sm leading-relaxed text-[#d4d4d4]">
        <code>
          {lines.map((line, i) => (
            <div key={i}>{line === "" ? "\n" : tokenizeLine(line)}</div>
          ))}
        </code>
      </pre>
    </div>
  );
}
