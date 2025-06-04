import axios from 'axios';

export async function analyzeMenu(menuUrl) {
  const menu = await fetch(menuUrl).then(res => res.text());
  const response = await axios.post('/api/analyze', { menu });
  return response.data;
}
