import React, { useEffect, useState } from 'react';
import copy from 'copy-to-clipboard';
import { FormatterFactory } from '../formatter/FormatterFactory';

const languages = [
  { key: 'JSON', label: 'JSON' },
  { key: 'HTML', label: 'HTML' },
  { key: 'CSS', label: 'CSS' },
  { key: 'JavaScript', label: 'Java Script' },
  { key: 'SQL', label: 'SQL' },
  { key: 'XML', label: 'XML' },
  /*
  { key: 'MD', label: 'Markdown' },
  { key: 'YAML', label: 'YAML' },
  */
];

export default function FormatTab() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('JSON');

  useEffect(() => {
    const loadSampleFile = async () => {
      try {
        const res = await fetch(`/samples/${language.toLowerCase()}.txt`);
        if (!res.ok) throw new Error('Sample not found');
        const text = await res.text();
        setInput(text);
        setOutput('');
      } catch {
        setInput(`// Sample not found for ${language}`);
        setOutput('');
      }
    };

    loadSampleFile();
  }, [language]);

  const handleAction = async (action) => {
    if (!input.trim()) return;

    const formatter = FormatterFactory.getFormatter(language);
    if (!formatter || typeof formatter[action] !== 'function') {
      setOutput(`No handler for ${language} ${action}`);
      return;
    }

    try {
      const result = await formatter[action](input);
      setOutput(result);
    } catch (err) {
      setOutput(`Error: ${err.message}`);
    }
  };

  const handleCopy = () => output && copy(output);

  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `formatted.${language.toLowerCase()}`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <>
      <section className="controls">
        <label>
          Language:
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            {languages.map(({ key, label }) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </section>

      <section className="editor-row">
        <div className="editor-column">
          <h3>Input</h3>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your code here..."
          />
          <div className="button-group center-buttons">
            <button onClick={() => handleAction('minify')} disabled={!input.trim()}>Minify</button>
            <button onClick={() => handleAction('beautify')} disabled={!input.trim()}>Beautify</button>
            <button onClick={() => handleAction('verify')} disabled={!input.trim()}>Verify</button>
          </div>
        </div>

        <div className="editor-column">
          <h3>Output</h3>
          <textarea readOnly value={output} placeholder="Formatted result will appear here..." />
          <div className="button-group center-buttons">
            <button onClick={handleCopy} disabled={!output.trim()}>Copy</button>
            <button onClick={handleDownload} disabled={!output.trim()}>Download</button>
          </div>
        </div>
      </section>
    </>
  );
}
