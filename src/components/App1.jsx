import React, { useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';
import '../styles/App.css';
import AdsBanner from '../components/AdsBanner';

const languages = ['JSON', 'XML', 'SQL', 'HTML', 'CSS', 'MD', 'YAML', 'JAVA'];

export default function App1() {
  const [mode, setMode] = useState('dark');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('JSON');

  useEffect(() => {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(mode);
  }, [mode]);

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

  const loadSampleFile = async (lang) => {
    try {
      const res = await fetch(`/samples/${lang.toLowerCase()}.txt`);
      if (!res.ok) throw new Error('Sample not found');
      const text = await res.text();
      setInput(text);
      setOutput('');
    } catch (e) {
      setInput(`// Sample not found for ${lang}`);
      setOutput('');
    }
  };

  useEffect(() => {
    loadSampleFile(language);
  }, [language]);

  return (
    <main className="container">
      <div className="ads-right">
        <AdsBanner slot="1234567892" layout="vertical" style={{ width: '160px', height: '600px' }} />
      </div>

      <header className="app-header">
        <div className="header-ad">
          <AdsBanner slot="1234567890" layout="horizontal" />
        </div>
        <div className="header-content">
          <h1>Code Formatter</h1>
          <button
            className="theme-toggle"
            onClick={() => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))}
            title="Toggle theme"
          >
            {mode === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </header>

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
          <textarea
            placeholder="Paste your code here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="button-group center-buttons">
            <button onClick={() => callFormatApi('minify')} disabled={!input.trim()}>Minify</button>
            <button onClick={() => callFormatApi('beautify')} disabled={!input.trim()}>Beautify</button>
            <button onClick={() => callFormatApi('verify')} disabled={!input.trim()}>Verify</button>
          </div>
        </div>

        <div className="editor-column">
          <h3>Output</h3>
          <textarea
            readOnly
            placeholder="Formatted result will appear here..."
            value={output}
          />
          <div className="button-group center-buttons">
            <button onClick={handleCopy} disabled={!output.trim()}>Copy</button>
            <button onClick={handleDownload} disabled={!output.trim()}>Download</button>
          </div>
        </div>
      </section>

      <AdsBanner slot="1234567891" layout="horizontal" />
      <footer className="app-footer">
        © {new Date().getFullYear()} Profectus Group. All rights reserved.
      </footer>
    </main>
  );
}
