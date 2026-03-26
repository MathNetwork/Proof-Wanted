export default function TypeBadge({ type }: { type: "conjecture" | "theorem" }) {
  if (type === "conjecture") {
    return (
      <span className="inline-flex items-center rounded-full border border-rose-700/50 bg-rose-900/50 px-2.5 py-0.5 text-xs font-medium text-rose-300">
        Open Conjecture
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full border border-sky-700/50 bg-sky-900/50 px-2.5 py-0.5 text-xs font-medium text-sky-300">
      Known Theorem
    </span>
  );
}
