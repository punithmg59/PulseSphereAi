import { useState } from 'react';
import { analyzeEmotion } from '../services/emotionApi';

export default function useEmotion() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchEmotion(text) {
    setLoading(true);
    const result = await analyzeEmotion(text);
    setData(result);
    setLoading(false);
    return result;
  }

  return { data, loading, fetchEmotion };
}
