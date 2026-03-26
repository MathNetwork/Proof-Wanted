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
        <span className="inline-flex items-center gap-1 text-[#4ade80]">
          <CheckCircleIcon className="h-3.5 w-3.5" />
          Verified
        </span>
      );
    case "blocked":
      return (
        <span className="inline-flex items-center gap-1 text-[#f87171]">
          <XCircleIcon className="h-3.5 w-3.5" />
          Blocked
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center gap-1 text-[#fbbf24]">
          <ExclamationTriangleIcon className="h-3.5 w-3.5" />
          {status === "partial" ? "Partial" : "Draft"}
        </span>
      );
  }
}

export default function CandidateRow({ candidate }: { candidate: Candidate }) {
  return (
    <Link
      href={`/problems/${candidate.slug}`}
      className="group block py-5 transition-colors hover:bg-[#1a1a24]/50"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-[#e8e8e8] group-hover:text-[#93c5fd]">
            {candidate.name || candidate.slug}
          </h3>
          {candidate.summary && (
            <p className="mt-1 text-sm text-[#888899]">{candidate.summary}</p>
          )}
        </div>
        <div className="shrink-0 text-right text-sm">
          <div className="text-[#888899]">{candidate.area}</div>
          <div className="mt-1 space-x-2">
            <StatusIndicator status={candidate.status} />
            {candidate.estimatedLines && (
              <span className="text-[#555566]">
                · {candidate.estimatedLines} lines
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
