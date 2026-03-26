import Link from "next/link";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
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
  const prefix = candidate.type === "conjecture" ? "C" : "T";
  const id = `${prefix}-${String(index + 1).padStart(2, "0")}`;
  const label = candidate.type === "conjecture" ? "CONJECTURE" : "THEOREM";

  return (
    <Link
      href={`/problems/${candidate.slug}`}
      className="group block rounded-lg border border-[#252535] bg-[#14141e] p-6 transition-colors hover:border-[#3a3a5a] hover:bg-[#18182a]"
    >
      {/* Top row: label + id */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#666]">
          {label}
        </span>
        <span className="font-mono text-xs text-[#555]">{id}</span>
      </div>

      {/* Title */}
      <h3 className="text-[17px] font-semibold leading-snug text-[#e8e8e8] group-hover:text-[#93c5fd]">
        {candidate.name || candidate.slug}
      </h3>

      {/* Summary */}
      {candidate.summary && (
        <p className="mt-2 text-sm leading-relaxed text-[#999]">
          {candidate.summary}
        </p>
      )}

      {/* Bottom row: area, status, lines */}
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#666]">
        {candidate.area && <span>{candidate.area}</span>}
        <StatusIndicator status={candidate.status} />
        {candidate.estimatedLines && (
          <span>Est. {candidate.estimatedLines} lines</span>
        )}
      </div>
    </Link>
  );
}
