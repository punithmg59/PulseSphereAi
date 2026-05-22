import { useState } from 'react';
import { checkFakeNews } from '../services/fakeNewsApi';

export default function useFakeNews() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchFakeNews(text) {
    setLoading(true);
    const result = await checkFakeNews(text);
    setData(result);
    setLoading(false);
    return result;
  }

  return { data, loading, fetchFakeNews };
}
