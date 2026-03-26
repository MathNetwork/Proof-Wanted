import { getAllCandidates } from "@/lib/candidates";
import CandidateBlock from "@/components/CandidateBlock";

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
          Open problems and theorems awaiting Lean 4 formalization.{" "}
          {candidates.length} problems, {verified} verified against Mathlib.
        </p>
      </section>

      {conjectures.length > 0 && (
        <section className="mb-14">
          <h2 className="mb-1 text-lg font-semibold uppercase tracking-wide text-[#999]">
            Open Conjectures
          </h2>
          <div className="mb-6 border-b border-[#333]" />
          <div className="space-y-4">
            {conjectures.map((c, i) => (
              <CandidateBlock key={c.slug} candidate={c} index={i} />
            ))}
          </div>
        </section>
      )}

      {theorems.length > 0 && (
        <section className="mb-14">
          <h2 className="mb-1 text-lg font-semibold uppercase tracking-wide text-[#999]">
            Known Theorems
          </h2>
          <div className="mb-6 border-b border-[#333]" />
          <div className="space-y-4">
            {theorems.map((c, i) => (
              <CandidateBlock key={c.slug} candidate={c} index={i} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
