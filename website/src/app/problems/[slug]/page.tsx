import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
import { getAllCandidates, getCandidate } from "@/lib/candidates";
import LeanCodeBlock from "@/components/LeanCodeBlock";
import MarkdownContent from "@/components/MarkdownContent";

export function generateStaticParams() {
  return getAllCandidates().map((c) => ({ slug: c.slug }));
}

function StatusIndicator({ status }: { status: string }) {
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

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCandidate(slug);
  if (!c) notFound();

  const ghFolder =
    c.type === "conjecture"
      ? `candidates/open-conjectures/${c.slug}`
      : `candidates/known-theorems/${c.slug}`;
  const ghUrl = `https://github.com/MathNetwork/Proof-Wanted/tree/main/${ghFolder}`;

  const typeLabel = c.type === "conjecture" ? "Open Conjecture" : "Known Theorem";
  const meta = [typeLabel, c.area, undefined, c.estimatedLines ? `Est. ${c.estimatedLines} lines` : ""].filter(Boolean);

  return (
    <>
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-[#888899] hover:text-[#93c5fd]"
      >
        &larr; Back
      </Link>

      <h1 className="text-2xl font-semibold text-white">
        {c.name || c.slug}
      </h1>

      <p className="mt-2 text-sm text-[#888899]">
        {meta.join(" · ")} · <StatusIndicator status={c.status} />
      </p>

      <hr className="my-8 border-[#2a2a3a]" />

      {/* Mathematical Statement */}
      {c.mathStatement && (
        <section className="mb-10">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#888899]">
            Mathematical Statement
          </h2>
          <div className="rounded border border-[#2a2a3a] bg-[#1a1a24] p-6">
            <MarkdownContent content={c.mathStatement} serif />
          </div>
        </section>
      )}

      {/* Lean 4 Statement */}
      {c.leanCode && (
        <section className="mb-10">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#888899]">
            Lean 4 Statement
          </h2>
          <LeanCodeBlock code={c.leanCode} />
        </section>
      )}

      {/* Context: why good + infrastructure + proof complexity + source */}
      {(c.whyGood || c.infrastructure || c.proofComplexity || c.source) && (
        <section className="mb-10">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#888899]">
            Context
          </h2>
          <div className="space-y-6 text-sm text-[#ccc]">
            {c.whyGood && (
              <div>
                <h3 className="mb-2 font-semibold text-[#e8e8e8]">
                  Why this is a good formalization target
                </h3>
                <MarkdownContent content={c.whyGood} />
              </div>
            )}
            {c.infrastructure && (
              <div>
                <h3 className="mb-2 font-semibold text-[#e8e8e8]">
                  Mathlib infrastructure
                </h3>
                <MarkdownContent content={c.infrastructure} />
              </div>
            )}
            {c.proofComplexity && (
              <div>
                <h3 className="mb-2 font-semibold text-[#e8e8e8]">
                  Proof complexity
                </h3>
                <MarkdownContent content={c.proofComplexity} />
              </div>
            )}
            {c.source && (
              <div>
                <h3 className="mb-2 font-semibold text-[#e8e8e8]">Sources</h3>
                <MarkdownContent content={c.source} />
              </div>
            )}
          </div>
        </section>
      )}

      <hr className="my-8 border-[#2a2a3a]" />

      <a
        href={ghUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[#93c5fd] hover:underline"
      >
        View on GitHub &rarr;
      </a>
    </>
  );
}
