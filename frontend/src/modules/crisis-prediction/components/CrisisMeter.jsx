import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';

export default function CrisisMeter({ data }) {
  if (!data) {
    return <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 text-slate-400">Analyze text to see crisis risk levels.</div>;
  }

  const risk = data.risk ?? 0;
  const chartData = [{ name: 'Risk', value: risk, fill: risk >= 70 ? '#fb7185' : risk >= 40 ? '#facc15' : '#34d399' }];

  return (
    <div className="rounded-3xl bg-slate-950/80 p-4">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Current risk level</p>
          <p className="mt-2 text-3xl font-semibold text-slate-100">{data.level}</p>
        </div>
        <div className="rounded-full bg-slate-900 p-4 text-center text-xl font-semibold text-slate-100">{risk}%</div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart innerRadius="70%" outerRadius="100%" data={chartData} startAngle={180} endAngle={0}>
            <RadialBar minAngle={15} background clockWise dataKey="value" cornerRadius={12} />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
