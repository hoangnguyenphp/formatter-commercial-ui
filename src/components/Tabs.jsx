import React from 'react';
import '../styles/Tabs.css';

export default function Tabs({ tabs = [], activeKey, onChange }) {
  return (
    <nav className="tab-nav">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={activeKey === tab.key ? 'tab active' : 'tab'}
          onClick={() => onChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
