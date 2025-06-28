import React, { useState, useEffect } from 'react';
import './styles/App.css';
import AdsBanner from './components/AdsBanner';
import FormatTab from './components/FormatTab';
import StringifyTab from './components/StringifyTab';
import Tabs from './components/Tabs';

const tabs = [
   /*
  { key: 'format', label: 'Format' },
  { key: 'stringify', label: 'Stringify' }
  */
];

export default function App() {
  const [mode, setMode] = useState('dark');
  const [activeTab, setActiveTab] = useState('format');

  useEffect(() => {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(mode);
  }, [mode]);

  const renderTab = () => {
    switch (activeTab) {
      case 'format':
        return <FormatTab />;
      case 'stringify':
        return <StringifyTab />;
      default:
        return <FormatTab />;
    }
  };

  return (
    <main className="container">
      {/* Right-side Ad */}
      <div className="ads-right">
        <AdsBanner slot="1234567892" layout="vertical" style={{ width: '160px', height: '600px' }} />
      </div>

      {/* Header */}
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
            {mode === 'dark' ? '🌞 Light' : '🌙 Dark'}
          </button>
        </div>
      </header>

      {/* Tabs */}
      <Tabs tabs={tabs} activeKey={activeTab} onChange={setActiveTab} />

      {/* Tab Content */}
      <section className="tab-content">
        {renderTab()}
      </section>

      {/* Footer Ad */}
      <AdsBanner slot="1234567891" layout="horizontal" />

      <footer className="app-footer">
        © {new Date().getFullYear()} Profectus Group. All rights reserved.
      </footer>
    </main>
  );
}
