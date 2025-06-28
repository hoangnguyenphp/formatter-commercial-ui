export async function formatterApiCall(type, action, content) {
  const url = `${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/format/${action}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, content }),
  });

  const data = await response.json();
  if (!data.success) throw new Error(data.message);
  return data.result;
}
