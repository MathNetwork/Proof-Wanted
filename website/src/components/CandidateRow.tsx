import Link from "next/link";
import type { Candidate } from "@/lib/candidates";

function StatusText({ status }: { status: Candidate["status"] }) {
  const map: Record<string, { label: string; color: string }> = {
    verified: { label: "Verified", color: "text-[#4ade80]" },
    draft: { label: "Draft", color: "text-[#fbbf24]" },
    partial: { label: "Partial", color: "text-[#fbbf24]" },
    blocked: { label: "Blocked", color: "text-[#f87171]" },
  };
  const { label, color } = map[status] ?? map.draft;
  return <span className={color}>{label}</span>;
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
            <StatusText status={candidate.status} />
            {candidate.estimatedLines && (
              <span className="text-[#555566]">
                {candidate.estimatedLines} lines
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
