import React, { useState } from 'react';

export default function StringifyTab() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [format, setFormat] = useState('JSON');

  const handleStringify = () => {
    try {
      if (format === 'JSON') {
        const obj = JSON.parse(input);
        setOutput(JSON.stringify(obj));
      } else if (format === 'XML') {
        // Basic mock stringify for XML
        setOutput(JSON.stringify({ xml: input }));
      }
    } catch (err) {
      setOutput(`Error: ${err.message}`);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Format:
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          >
            <option value="JSON">JSON</option>
            <option value="XML">XML</option>
          </select>
        </label>
      </div>

      <div className="editor-row">
        <div className="editor-column">
          <h3>Input</h3>
          <textarea
            placeholder={format === 'JSON' ? 'Paste your JavaScript object or JSON here...' : 'Paste your XML string here...'}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleStringify} disabled={!input.trim()}>
            Stringify
          </button>
        </div>

        <div className="editor-column">
          <h3>Output</h3>
          <textarea
            readOnly
            placeholder="Stringified result will appear here..."
            value={output}
          />
        </div>
      </div>
    </div>
  );
}
