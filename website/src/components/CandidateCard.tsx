import Link from "next/link";
import TypeBadge from "./TypeBadge";
import StatusBadge from "./StatusBadge";
import type { Candidate } from "@/lib/candidates";

export default function CandidateCard({ candidate }: { candidate: Candidate }) {
  return (
    <Link
      href={`/problems/${candidate.slug}`}
      className="group flex flex-col rounded-lg border border-[#2a2a4a] bg-[#1a1a2e] p-5 transition-all hover:border-purple-600/50 hover:bg-[#1f1f35]"
    >
      <h3 className="text-lg font-semibold text-gray-100 group-hover:text-purple-300">
        {candidate.name || candidate.slug}
      </h3>

      <div className="mt-3 flex flex-wrap gap-2">
        <TypeBadge type={candidate.type} />
        <StatusBadge status={candidate.status} />
        {candidate.area && (
          <span className="inline-flex items-center rounded-full border border-gray-600/50 bg-gray-800/50 px-2.5 py-0.5 text-xs text-gray-300">
            {candidate.area}
          </span>
        )}
      </div>

      {candidate.estimatedLines && (
        <p className="mt-3 text-sm text-gray-500">
          ~{candidate.estimatedLines} lines
        </p>
      )}

      <p className="mt-2 line-clamp-2 flex-1 text-sm text-gray-400">
        {candidate.mathStatement
          .replace(/\$[^$]*\$/g, "...")
          .replace(/\\\[[\s\S]*?\\\]/g, "...")
          .slice(0, 150)}
      </p>
    </Link>
  );
}
