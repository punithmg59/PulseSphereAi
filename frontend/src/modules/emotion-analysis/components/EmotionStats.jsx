export default function EmotionStats({ data }) {
  if (!data) {
    return <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-slate-400">Run an analysis to display emotion scores.</div>;
  }

  return (
    <div className="space-y-4 rounded-3xl bg-slate-950/80 p-4">
      {Object.entries(data).map(([name, value]) => (
        <div key={name} className="space-y-2">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.18em] text-slate-400">
            <span>{name.replace('-', ' ')}</span>
            <span>{value}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full rounded-full bg-emerald-400" style={{ width: `${value}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
