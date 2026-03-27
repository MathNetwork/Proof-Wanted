import { getAllCandidates } from "@/lib/candidates";
import ProblemTabs from "@/components/ProblemTabs";

export default function Home() {
  const candidates = getAllCandidates();
  const conjectures = candidates.filter((c) => c.type === "conjecture");
  const theorems = candidates.filter((c) => c.type === "theorem");
  const verified = candidates.filter((c) => c.status === "verified").length;

  return (
    <>
      {/* Hero */}
      <section className="mb-14">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Proof Wanted
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#999]">
          A registry of mathematical theorems and open conjectures that are
          suitable for formalization in{" "}
          <a
            href="https://leanprover-community.github.io/"
            className="text-[#93c5fd] hover:underline"
          >
            Lean 4
          </a>{" "}
          +{" "}
          <a
            href="https://github.com/leanprover-community/mathlib4"
            className="text-[#93c5fd] hover:underline"
          >
            Mathlib
          </a>
          . Each candidate has a precise Lean statement that type-checks against
          the current version of Mathlib (proofs are{" "}
          <code className="text-[#93c5fd]">sorry</code>). The goal is to
          identify results where the mathematical infrastructure exists in
          Mathlib and the proof is within reach.
        </p>
        <div className="mt-6 flex gap-8 text-sm text-[#666]">
          <div>
            <span className="text-2xl font-semibold text-white">
              {candidates.length}
            </span>{" "}
            problems
          </div>
          <div>
            <span className="text-2xl font-semibold text-green-500">
              {verified}
            </span>{" "}
            verified
          </div>
          <div>
            <span className="text-2xl font-semibold text-amber-500">
              {conjectures.length}
            </span>{" "}
            open
          </div>
          <div>
            <span className="text-2xl font-semibold text-[#93c5fd]">
              {theorems.length}
            </span>{" "}
            theorems
          </div>
        </div>
      </section>

      {/* What we look for */}
      <section className="mb-14 rounded-lg border border-[#252535] bg-[#14141e] p-6 text-sm leading-relaxed text-[#999]">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#666]">
          What makes a good candidate
        </h2>
        <ul className="list-inside list-disc space-y-1.5">
          <li>
            The statement can be expressed using current Mathlib definitions (or
            with minor extensions).
          </li>
          <li>
            Key proof ingredients (lemmas, tactics, type class instances) are
            available or within reach.
          </li>
          <li>
            The result is mathematically significant, self-contained, or fills a
            gap in Mathlib.
          </li>
          <li>
            The proof is estimated at under 3000 lines of Lean (comparable to
            recent Mathlib contributions).
          </li>
        </ul>
        <p className="mt-3">
          Contributions are via pull request. See{" "}
          <a href="/about" className="text-[#93c5fd] hover:underline">
            Contributing
          </a>{" "}
          for details.
        </p>
      </section>

      {/* Tabbed problem list */}
      <ProblemTabs conjectures={conjectures} theorems={theorems} />
    </>
  );
}
