"use client";

import { useState } from "react";
import CandidateBlock from "./CandidateBlock";
import type { Candidate } from "@/lib/candidates";

export default function ProblemTabs({
  conjectures,
  theorems,
}: {
  conjectures: Candidate[];
  theorems: Candidate[];
}) {
  const [tab, setTab] = useState<"conjectures" | "theorems">("conjectures");

  const items = tab === "conjectures" ? conjectures : theorems;

  return (
    <div>
      {/* Toggle */}
      <div className="mb-8 flex items-center gap-1 rounded-lg border border-[#252535] bg-[#14141e] p-1">
        <button
          onClick={() => setTab("conjectures")}
          className={`flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
            tab === "conjectures"
              ? "bg-[#252540] text-white"
              : "text-[#888] hover:text-white"
          }`}
        >
          Open Conjectures
          <span className="ml-2 text-xs text-[#666]">
            {conjectures.length}
          </span>
        </button>
        <button
          onClick={() => setTab("theorems")}
          className={`flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
            tab === "theorems"
              ? "bg-[#252540] text-white"
              : "text-[#888] hover:text-white"
          }`}
        >
          Known Theorems
          <span className="ml-2 text-xs text-[#666]">{theorems.length}</span>
        </button>
      </div>

      {/* Cards */}
      <div className="space-y-5">
        {items.map((c, i) => (
          <CandidateBlock key={c.slug} candidate={c} index={i} />
        ))}
      </div>
    </div>
  );
}
