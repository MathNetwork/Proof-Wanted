"use client";

function highlightLean(code: string): string {
  const keywords =
    /\b(theorem|lemma|def|noncomputable|structure|class|instance|import|open|scoped|where|let|in|have|by|sorry|fun|match|with|if|then|else|do|return|variable|section|namespace|end|example|abbrev|set_option|attribute|private|protected|partial)\b/g;
  const types =
    /\b(Prop|Type|Sort|Nat|Int|Real|Bool|True|False|Set|ℕ|ℤ|ℝ|ℂ|ℍ|ℝ≥0|ℝ≥0∞|Fin|Finset|Multiset|List)\b/g;
  const tactics =
    /\b(sorry|trivial|rfl|simp|ring|norm_num|omega|exact|apply|intro|infer_instance|inferInstance)\b/g;
  const comments = /(--.*$)/gm;

  let result = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  result = result.replace(comments, '<span class="text-gray-500 italic">$1</span>');
  result = result.replace(keywords, '<span class="text-purple-400 font-semibold">$1</span>');
  result = result.replace(types, '<span class="text-sky-400">$1</span>');
  result = result.replace(tactics, '<span class="text-amber-400">$1</span>');

  return result;
}

export default function LeanCodeBlock({ code }: { code: string }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[#2a2a4a] bg-[#12121a]">
      <pre className="p-4 text-sm leading-relaxed">
        <code dangerouslySetInnerHTML={{ __html: highlightLean(code) }} />
      </pre>
    </div>
  );
}
