// /components/FormatTab.jsx
import React, { useEffect, useState } from 'react';
import copy from 'copy-to-clipboard';

const languages = ['JSON', 'XML', 'SQL', 'HTML', 'CSS', 'MD', 'YAML', 'JAVA'];

export default function FormatTab() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('JSON');

  const callFormatApi = async (action) => {
    if (!input.trim()) return;

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/format/${action}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: language.toLowerCase(),
            content: input,
          }),
        }
      );
      const data = await response.json();
      setOutput(data.success ? data.result : `Error: ${data.message}`);
    } catch (err) {
      setOutput(`Request failed: ${err.message}`);
    }
  };

  const handleCopy = () => output && copy(output);
  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'formatted.txt';
    link.click();
    URL.revokeObjectURL(link.href);
  };


  return (
    <>
      <section className="controls">
        <label>
          Language:
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </label>
      </section>

      <section className="editor-row">
        <div className="editor-column">
          <h3>Input</h3>
          <textarea value={input} onChange={(e) => setInput(e.target.value)} />
          <div className="button-group center-buttons">
            <button onClick={() => callFormatApi('minify')} disabled={!input.trim()}>Minify</button>
            <button onClick={() => callFormatApi('beautify')} disabled={!input.trim()}>Beautify</button>
            <button onClick={() => callFormatApi('verify')} disabled={!input.trim()}>Verify</button>
          </div>
        </div>

        <div className="editor-column">
          <h3>Output</h3>
          <textarea readOnly value={output} />
          <div className="button-group center-buttons">
            <button onClick={handleCopy} disabled={!output.trim()}>Copy</button>
            <button onClick={handleDownload} disabled={!output.trim()}>Download</button>
          </div>
        </div>
      </section>
    </>
  );
}
