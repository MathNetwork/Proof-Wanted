"use client";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default function MarkdownContent({ content, serif }: { content: string; serif?: boolean }) {
  return (
    <div
      className={[
        "prose prose-invert max-w-none",
        "prose-headings:text-[#e8e8e8] prose-headings:font-semibold",
        "prose-p:text-[#ccc] prose-li:text-[#ccc]",
        "prose-a:text-[#93c5fd] prose-a:no-underline hover:prose-a:underline",
        "prose-strong:text-[#e8e8e8]",
        "prose-code:text-[#93c5fd] prose-code:font-normal",
        serif ? "font-serif-math" : "",
      ].join(" ")}
    >
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
