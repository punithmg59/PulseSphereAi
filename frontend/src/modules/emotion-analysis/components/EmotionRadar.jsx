import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';

export default function EmotionRadar({ data }) {
  const chartData = data
    ? Object.entries(data).map(([name, value]) => ({ subject: name, A: value }))
    : [];

  return (
    <div className="rounded-3xl bg-slate-950/80 p-4">
      <h3 className="mb-4 text-lg font-semibold text-slate-100">Emotion radar</h3>
      {chartData.length === 0 ? (
        <p className="text-sm text-slate-400">Emotion radar will appear after analysis.</p>
      ) : (
        <ResponsiveContainer width="100%" height={360}>
          <RadarChart data={chartData} outerRadius="80%">
            <PolarGrid stroke="#334155" />
            <PolarAngleAxis dataKey="subject" stroke="#94a3b8" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#94a3b8" />
            <Radar name="Emotion" dataKey="A" stroke="#34d399" fill="#34d399" fillOpacity={0.35} />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
