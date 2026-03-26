"use client";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose prose-invert max-w-none prose-headings:text-gray-100 prose-p:text-gray-300 prose-a:text-purple-400 prose-strong:text-gray-200 prose-code:text-purple-300 prose-li:text-gray-300 prose-ul:text-gray-300">
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
