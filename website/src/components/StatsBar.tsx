interface StatsBarProps {
  total: number;
  conjectures: number;
  theorems: number;
  verified: number;
}

export default function StatsBar({ total, conjectures, theorems, verified }: StatsBarProps) {
  const stats = [
    { label: "Total", value: total, color: "text-purple-400" },
    { label: "Open Conjectures", value: conjectures, color: "text-rose-400" },
    { label: "Known Theorems", value: theorems, color: "text-sky-400" },
    { label: "Verified", value: verified, color: "text-emerald-400" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-lg border border-[#2a2a4a] bg-[#1a1a2e] p-4 text-center"
        >
          <div className={`text-3xl font-bold ${s.color}`}>{s.value}</div>
          <div className="mt-1 text-sm text-gray-400">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
