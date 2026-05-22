import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function EmotionBarChart({ data }) {
  const chartData = data
    ? Object.entries(data).map(([name, value]) => ({ name, value }))
    : [];

  return (
    <div className="rounded-3xl bg-slate-950/80 p-4">
      <h3 className="mb-4 text-lg font-semibold text-slate-100">Emotion distribution</h3>
      {chartData.length === 0 ? (
        <p className="text-sm text-slate-400">Emotion bar chart will appear after analysis.</p>
      ) : (
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 10 }}>
            <CartesianGrid stroke="#2d3748" vertical={false} />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" domain={[0, 100]} />
            <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }} />
            <Bar dataKey="value" fill="#34d399" radius={[12, 12, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
