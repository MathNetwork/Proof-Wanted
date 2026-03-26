import { notFound } from "next/navigation";
import { getAllCandidates, getCandidate } from "@/lib/candidates";
import TypeBadge from "@/components/TypeBadge";
import StatusBadge from "@/components/StatusBadge";
import LeanCodeBlock from "@/components/LeanCodeBlock";
import MarkdownContent from "@/components/MarkdownContent";

export function generateStaticParams() {
  return getAllCandidates().map((c) => ({ slug: c.slug }));
}

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const candidate = getCandidate(slug);
  if (!candidate) notFound();

  const ghFolder =
    candidate.type === "conjecture"
      ? `candidates/open-conjectures/${candidate.slug}`
      : `candidates/known-theorems/${candidate.slug}`;
  const ghUrl = `https://github.com/MathNetwork/Proof-Wanted/tree/main/${ghFolder}`;

  return (
    <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-10">
      {/* Main content */}
      <div className="min-w-0">
        <h1 className="text-3xl font-extrabold text-white">
          {candidate.name || candidate.slug}
        </h1>

        <div className="mt-4 flex flex-wrap gap-2">
          <TypeBadge type={candidate.type} />
          <StatusBadge status={candidate.status} />
          {candidate.area && (
            <span className="inline-flex items-center rounded-full border border-gray-600/50 bg-gray-800/50 px-2.5 py-0.5 text-xs text-gray-300">
              {candidate.area}
            </span>
          )}
        </div>

        {/* Math statement */}
        {candidate.mathStatement && (
          <section className="mt-8">
            <h2 className="mb-3 text-xl font-bold text-gray-100">
              Mathematical Statement
            </h2>
            <div className="rounded-lg border border-[#2a2a4a] bg-[#1a1a2e] p-5">
              <MarkdownContent content={candidate.mathStatement} />
            </div>
          </section>
        )}

        {/* Lean code */}
        {candidate.leanCode && (
          <section className="mt-8">
            <h2 className="mb-3 text-xl font-bold text-gray-100">
              Lean 4 Statement
            </h2>
            <LeanCodeBlock code={candidate.leanCode} />
          </section>
        )}

        {/* Why good */}
        {candidate.whyGood && (
          <section className="mt-8">
            <h2 className="mb-3 text-xl font-bold text-gray-100">
              Why This Is a Good Formalization Target
            </h2>
            <MarkdownContent content={candidate.whyGood} />
          </section>
        )}

        {/* Mathlib infrastructure */}
        {candidate.infrastructure && (
          <section className="mt-8">
            <h2 className="mb-3 text-xl font-bold text-gray-100">
              Mathlib Infrastructure
            </h2>
            <MarkdownContent content={candidate.infrastructure} />
          </section>
        )}

        {/* Proof complexity */}
        {candidate.proofComplexity && (
          <section className="mt-8">
            <h2 className="mb-3 text-xl font-bold text-gray-100">
              Proof Complexity Estimate
            </h2>
            <MarkdownContent content={candidate.proofComplexity} />
          </section>
        )}

        {/* Source */}
        {candidate.source && (
          <section className="mt-8">
            <h2 className="mb-3 text-xl font-bold text-gray-100">Source</h2>
            <MarkdownContent content={candidate.source} />
          </section>
        )}
      </div>

      {/* Sidebar */}
      <aside className="mt-10 lg:mt-0">
        <div className="sticky top-24 space-y-6">
          <div className="rounded-lg border border-[#2a2a4a] bg-[#1a1a2e] p-5">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Metadata
            </h3>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-gray-500">Type</dt>
                <dd className="text-gray-200">
                  {candidate.type === "conjecture"
                    ? "Open Conjecture"
                    : "Known Theorem"}
                </dd>
              </div>
              <div>
                <dt className="text-gray-500">Area</dt>
                <dd className="text-gray-200">{candidate.area || "—"}</dd>
              </div>
              <div>
                <dt className="text-gray-500">Status</dt>
                <dd>
                  <StatusBadge status={candidate.status} />
                </dd>
              </div>
              {candidate.estimatedLines && (
                <div>
                  <dt className="text-gray-500">Estimated Lines</dt>
                  <dd className="text-gray-200">{candidate.estimatedLines}</dd>
                </div>
              )}
              {candidate.contributor && (
                <div>
                  <dt className="text-gray-500">Contributor</dt>
                  <dd className="text-gray-200">{candidate.contributor}</dd>
                </div>
              )}
            </dl>
          </div>

          <a
            href={ghUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border border-purple-600/50 bg-purple-900/20 px-4 py-3 text-sm font-medium text-purple-300 transition-colors hover:bg-purple-900/40"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </aside>
    </div>
  );
}
