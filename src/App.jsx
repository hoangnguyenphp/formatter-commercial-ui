import React, { useState } from 'react';
import './styles/App.css';
import AdsBanner from './components/AdsBanner';
import FormatTab from './components/FormatTab';
import StringifyTab from './components/StringifyTab';

const tabs = [
  // { key: 'format', label: 'Format' },
  //{ key: 'stringify', label: 'Stringify' },
];

export default function App() {
  const [mode, setMode] = useState('dark');
  const [activeTab, setActiveTab] = useState('format');

  React.useEffect(() => {
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
            {mode === 'dark' ? '🌞 Light' : '🌙 Dark'}
          </button>
        </div>
      </header>

      <nav className="tab-nav">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={activeTab === tab.key ? 'tab active' : 'tab'}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <section className="tab-content">{renderTab()}</section>

      <AdsBanner slot="1234567891" layout="horizontal" />
      <footer className="app-footer">
        © {new Date().getFullYear()} Profectus Group. All rights reserved.
      </footer>
    </main>
  );
}
