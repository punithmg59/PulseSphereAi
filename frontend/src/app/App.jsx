import { useState } from 'react';
import useEmotion from '../modules/emotion-analysis/hooks/useEmotion';
import useCrisis from '../modules/crisis-prediction/hooks/useCrisis';
import useFakeNews from '../modules/fake-news/hooks/useFakeNews';
import EmotionStats from '../modules/emotion-analysis/components/EmotionStats';
import EmotionBarChart from '../modules/emotion-analysis/components/EmotionBarChart';
import EmotionRadar from '../modules/emotion-analysis/components/EmotionRadar';
import CrisisMeter from '../modules/crisis-prediction/components/CrisisMeter';
import FakeNewsCard from '../modules/fake-news/components/FakeNewsCard';

const SAMPLE_TEXT = 'The situation is urgent and dangerous, with panic spreading quickly and many people demanding help.';

export default function App() {
  const [text, setText] = useState(SAMPLE_TEXT);
  const { data: emotionData, loading: emotionLoading, fetchEmotion } = useEmotion();
  const { data: crisisData, loading: crisisLoading, fetchCrisis } = useCrisis();
  const { data: fakeNewsData, loading: fakeNewsLoading, fetchFakeNews } = useFakeNews();

  const isLoading = emotionLoading || crisisLoading || fakeNewsLoading;

  async function handleAnalyze() {
    await Promise.all([fetchEmotion(text), fetchCrisis(text), fetchFakeNews(text)]);
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/50 backdrop-blur-xl">
        <header className="mb-8">
          <h1 className="text-4xl font-semibold text-emerald-300">PulseSphere AI</h1>
          <p className="mt-2 max-w-2xl text-slate-400">Analyze emotion, predict crises, and uncover fake news with a transformer-powered intelligence engine.</p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-slate-200">Analyze text</label>
            <textarea
              className="h-40 w-full rounded-3xl border border-slate-800 bg-slate-950/90 p-4 text-slate-100 outline-none transition focus:border-emerald-400"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
            <button
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
              onClick={handleAnalyze}
              disabled={isLoading}
            >
              {isLoading ? 'Analyzing...' : 'Run Intelligence Engine'}
            </button>
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
            <h2 className="text-xl font-semibold text-slate-100">Quick results</h2>
            <div className="space-y-4">
              <div className="rounded-3xl bg-slate-900/90 p-4 shadow-inner shadow-slate-950/20">
                <h3 className="text-sm uppercase tracking-[0.24em] text-slate-400">Crisis risk</h3>
                <p className="mt-2 text-4xl font-semibold text-rose-400">{crisisData?.risk ?? '--'}</p>
                <p className="text-sm text-slate-400">{crisisData?.level ?? 'No analysis yet'}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-4 shadow-inner shadow-slate-950/20">
                <h3 className="text-sm uppercase tracking-[0.24em] text-slate-400">Fake news probability</h3>
                <p className="mt-2 text-4xl font-semibold text-amber-300">{fakeNewsData?.fake_probability ?? '--'}%</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[0.9fr_0.9fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
            <h2 className="text-2xl font-semibold text-slate-100">Emotion analysis</h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <EmotionStats data={emotionData} />
              <EmotionBarChart data={emotionData} />
            </div>
            <div className="mt-6 rounded-3xl bg-slate-950/80 p-4">
              <EmotionRadar data={emotionData} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
              <h2 className="text-2xl font-semibold text-slate-100">Crisis meter</h2>
              <div className="mt-6">
                <CrisisMeter data={crisisData} />
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
              <h2 className="text-2xl font-semibold text-slate-100">Fake news alert</h2>
              <div className="mt-6">
                <FakeNewsCard data={fakeNewsData} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
