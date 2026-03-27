"use client";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";

function injectStatusIcons(md: string): string {
  return md
    .replace(
      /\[yes\]/g,
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#4ade80" style="display:inline;width:14px;height:14px;vertical-align:text-bottom"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clip-rule="evenodd"/></svg>'
    )
    .replace(
      /\[partial\]/g,
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#fbbf24" style="display:inline;width:14px;height:14px;vertical-align:text-bottom"><path fill-rule="evenodd" d="M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/></svg>'
    )
    .replace(
      /\[no\]/g,
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#f87171" style="display:inline;width:14px;height:14px;vertical-align:text-bottom"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.166-4.834a.75.75 0 0 0 0-1.06L8.06 7l2.106-2.106a.75.75 0 1 0-1.06-1.06L7 5.94 4.894 3.834a.75.75 0 1 0-1.06 1.06L5.94 7 3.834 9.106a.75.75 0 1 0 1.06 1.06L7 8.06l2.106 2.106a.75.75 0 0 0 1.06 0Z" clip-rule="evenodd"/></svg>'
    );
}

export default function MarkdownContent({
  content,
  serif,
  compact,
}: {
  content: string;
  serif?: boolean;
  compact?: boolean;
}) {
  const processed = injectStatusIcons(content);

  return (
    <div
      className={[
        "prose prose-invert max-w-none",
        compact ? "prose-sm" : "",
        "prose-headings:text-[#e8e8e8] prose-headings:font-semibold prose-headings:mt-6 prose-headings:mb-3",
        "prose-h1:text-xl prose-h2:text-lg prose-h2:border-b prose-h2:border-[#252535] prose-h2:pb-2",
        "prose-p:text-[#ccc] prose-li:text-[#ccc]",
        "prose-a:text-[#93c5fd] prose-a:no-underline hover:prose-a:underline",
        "prose-strong:text-[#e8e8e8]",
        "prose-code:text-[#93c5fd] prose-code:font-normal",
        serif ? "font-serif-math" : "",
      ].join(" ")}
    >
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeKatex]}
      >
        {processed}
      </ReactMarkdown>
    </div>
  );
}
