import { getAllCandidates } from "@/lib/candidates";
import CandidateRow from "@/components/CandidateRow";

export default function Home() {
  const candidates = getAllCandidates();
  const conjectures = candidates.filter((c) => c.type === "conjecture");
  const theorems = candidates.filter((c) => c.type === "theorem");
  const verified = candidates.filter((c) => c.status === "verified").length;

  return (
    <>
      <section className="mb-12">
        <h1 className="text-3xl font-semibold text-white">Proof Wanted</h1>
        <p className="mt-3 text-[#888899]">
          Open problems and theorems awaiting Lean 4 formalization.
          {" "}{candidates.length} problems, {verified} verified against Mathlib.
        </p>
      </section>

      {conjectures.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#888899]">
            Open Conjectures
          </h2>
          <div className="divide-y divide-[#2a2a3a] border-y border-[#2a2a3a]">
            {conjectures.map((c) => (
              <CandidateRow key={c.slug} candidate={c} />
            ))}
          </div>
        </section>
      )}

      {theorems.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#888899]">
            Known Theorems
          </h2>
          <div className="divide-y divide-[#2a2a3a] border-y border-[#2a2a3a]">
            {theorems.map((c) => (
              <CandidateRow key={c.slug} candidate={c} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
