"use client";

import { useRouter } from "next/navigation";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import type { Candidate } from "@/lib/candidates";

function StatusIndicator({ status }: { status: Candidate["status"] }) {
  switch (status) {
    case "verified":
      return (
        <span className="inline-flex items-center gap-1 text-green-500">
          <CheckCircleIcon className="h-4 w-4" />
          Verified
        </span>
      );
    case "blocked":
      return (
        <span className="inline-flex items-center gap-1 text-red-400">
          <XCircleIcon className="h-4 w-4" />
          Blocked
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center gap-1 text-amber-500">
          <ExclamationTriangleIcon className="h-4 w-4" />
          {status === "partial" ? "Partial" : "Draft"}
        </span>
      );
  }
}

export default function CandidateBlock({
  candidate,
  index,
}: {
  candidate: Candidate;
  index: number;
}) {
  const router = useRouter();
  const prefix = candidate.type === "conjecture" ? "C" : "T";
  const id = `${prefix}-${String(index + 1).padStart(2, "0")}`;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => router.push(`/problems/${candidate.slug}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter") router.push(`/problems/${candidate.slug}`);
      }}
      className="group cursor-pointer border-b border-[#252535] px-2 py-6 transition-colors hover:bg-[#14141e]"
    >
      <div className="flex items-start gap-5">
        {/* Left column: ID + status */}
        <div className="flex w-16 shrink-0 flex-col items-center gap-1 pt-1">
          <span className="font-mono text-sm text-[#555]">{id}</span>
          <StatusIndicator status={candidate.status} />
        </div>

        {/* Right column: content */}
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-[#e8e8e8] group-hover:text-[#93c5fd]">
            {candidate.name || candidate.slug}
          </h3>

          {candidate.mathStatement && (
            <div className="mt-2 font-serif-math text-[14px] leading-relaxed text-[#aaa] [&_.katex]:text-[#ccc]">
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                  a: ({ children }) => <span>{children}</span>,
                  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                }}
              >
                {candidate.mathStatement}
              </ReactMarkdown>
            </div>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            {candidate.area && (
              <span className="rounded bg-[#1a1a2a] px-2 py-0.5 text-[#888]">
                {candidate.area}
              </span>
            )}
            {candidate.estimatedLines && (
              <span className="text-[#555]">
                {candidate.estimatedLines} lines
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
