export default function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { label: string; color: string }> = {
    verified: { label: "✅ Verified", color: "bg-emerald-900/50 text-emerald-300 border-emerald-700/50" },
    draft: { label: "⚠️ Draft", color: "bg-amber-900/50 text-amber-300 border-amber-700/50" },
    partial: { label: "⚠️ Partial", color: "bg-amber-900/50 text-amber-300 border-amber-700/50" },
    blocked: { label: "❌ Blocked", color: "bg-red-900/50 text-red-300 border-red-700/50" },
  };
  const { label, color } = config[status] ?? config.draft;
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${color}`}>
      {label}
    </span>
  );
}
