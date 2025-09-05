export async function formatterApiCall(type, action, content) {
  const url = `${process.env.REACT_APP_ONLINE_CODE_FORMATTER_API_URL || 'http://localhost:8080'}/api/format/${action}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, content }),
  });

  const data = await response.json();
  if (!data.success) throw new Error(data.message);
  return data.result;
}

export async function fetchVisits() {
  try {
    const res = await fetch(`${process.env.REACT_APP_ONLINE_CODE_FORMATTER_API_URL || 'https://service.online-code-formatter.com'}/api/page-visit-counter`);
    const count = await res.text();
    return count;
  } catch (err) {
    console.error('Failed to load visit counter:', err);
  }
};
