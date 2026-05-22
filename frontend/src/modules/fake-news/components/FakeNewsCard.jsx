export default function FakeNewsCard({ data }) {
  if (!data) {
    return <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 text-slate-400">Fake news probability will appear here after analysis.</div>;
  }

  const probability = data.fake_probability ?? 0;
  const status = probability >= 70 ? 'Critical misinformation risk' : probability >= 40 ? 'Potential misinformation' : 'Low misinformation concern';
  const color = probability >= 70 ? '#fb7185' : probability >= 40 ? '#facc15' : '#34d399';

  return (
    <div className="rounded-3xl bg-slate-950/80 p-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Fake news probability</p>
          <p className="mt-2 text-4xl font-semibold text-slate-100">{probability}%</p>
        </div>
      </div>
      <p className="mb-4 text-sm text-slate-300">{status}</p>
      <div className="h-3 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full rounded-full" style={{ width: `${probability}%`, background: color }} />
      </div>
    </div>
  );
}
