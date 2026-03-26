import { getAllCandidates } from "@/lib/candidates";
import CandidateCard from "@/components/CandidateCard";
import StatsBar from "@/components/StatsBar";

export default function Home() {
  const candidates = getAllCandidates();
  const conjectures = candidates.filter((c) => c.type === "conjecture");
  const theorems = candidates.filter((c) => c.type === "theorem");
  const verified = candidates.filter((c) => c.status === "verified");

  return (
    <>
      {/* Hero */}
      <section className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-white">
          Proof Wanted
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
          Open problems and theorems awaiting Lean 4 formalization.
          Each statement has been verified to type-check against{" "}
          <a
            href="https://github.com/leanprover-community/mathlib4"
            className="text-purple-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mathlib
          </a>
          .
        </p>
      </section>

      {/* Stats */}
      <section className="mb-12">
        <StatsBar
          total={candidates.length}
          conjectures={conjectures.length}
          theorems={theorems.length}
          verified={verified.length}
        />
      </section>

      {/* Open Conjectures */}
      {conjectures.length > 0 && (
        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold text-rose-300">
            Open Conjectures
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {conjectures.map((c) => (
              <CandidateCard key={c.slug} candidate={c} />
            ))}
          </div>
        </section>
      )}

      {/* Known Theorems */}
      {theorems.length > 0 && (
        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold text-sky-300">
            Known Theorems
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {theorems.map((c) => (
              <CandidateCard key={c.slug} candidate={c} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
