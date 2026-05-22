const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000';

export async function evaluateCrisis(text) {
  const response = await fetch(`${API_BASE}/crisis`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error('Crisis prediction failed');
  }

  return response.json();
}
