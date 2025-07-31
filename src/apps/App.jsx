// src/components/App.jsx
import React, { useState } from 'react';
import '../styles/App.css';
import AppLayout from '../layouts/AppLayout';
import Tabs from '../components/Tabs';
import FormatTab from '../components/FormatTab';
import StringifyTab from '../components/StringifyTab';

const tabs = [
//  { key: 'format', label: 'Format' },
//  { key: 'stringify', label: 'Stringify' }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('format');

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
    <AppLayout>
      <Tabs tabs={tabs} activeKey={activeTab} onChange={setActiveTab} />
      <section className="tab-content">{renderTab()}</section>
    </AppLayout>
  );
}
