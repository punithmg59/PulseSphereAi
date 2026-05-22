import { useState } from 'react';
import { evaluateCrisis } from '../services/crisisApi';

export default function useCrisis() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchCrisis(text) {
    setLoading(true);
    const result = await evaluateCrisis(text);
    setData(result);
    setLoading(false);
    return result;
  }

  return { data, loading, fetchCrisis };
}
