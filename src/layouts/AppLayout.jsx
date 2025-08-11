import React, { useState, useEffect } from 'react';
import AdsBanner from '../components/AdsBanner';
import PageVisitCounter from '../components/pagevisitcounter/PageVisitCounter';
import '../styles/App.css';
import '../styles/global.css';
import { Link } from 'react-router-dom';
import ToolLeftSidebarMenu from '../components/ToolLeftSidebarMenu';
import { topicLinks } from '../generic/topicLinks';
import { useTranslation } from 'react-i18next';

export default function AppLayout({ children }) {
  const [mode, setMode] = useState('dark');
  const truncate = (text, max = 30) =>
    text.length > max ? text.slice(0, max - 3) + '...' : text;
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(mode);
  }, [mode]);

  return (
    <main className="container">
      {/* Sidebar */}
      <ToolLeftSidebarMenu />

	  {/*Left-side Ad */}
	  {/*
	  <div className="ads-left">
	    <AdsBanner slot="1234567892" layout="vertical" style={{ width: '160px', height: '600px' }} />
	  </div>
	  */}

      {/* Right-side Ad */}
      <div className="ads-right">
        <AdsBanner slot="1234567892" layout="vertical" style={{ width: '160px', height: '600px' }} />
      </div>

      {/* Main Content Wrapper */}
      <div className="main-content">
        {/* Header */}
        <header className="app-header" onClick={() => (window.location.href = '/')}>
          <div className="header-content">
            <h1 style={{ cursor: 'pointer' }}>Online Code Formatter</h1>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Link to={topicLinks.discovery('discovery').to_value} className="from-tool-to-blog-link"
                onClick={(e) => e.stopPropagation()}
              >
                Blog
              </Link>
              <button
                className="theme-toggle"
                onClick={(e) => {
                  e.stopPropagation();
                  setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
                }}
                title="Toggle theme"
              >
                {mode === 'dark' ? '🌞 Light' : '🌙 Dark'}
              </button>
            </div>
          </div>
        </header>

        {/* Main Children Content */}
        {children}

        {/* Footer */}
        <div style={{ textAlign: 'center', fontSize: '0.9rem', margin: '1em 0' }}>
          <PageVisitCounter />
        </div>
        <footer className="app-footer">
          <nav className="footer-nav">
            <a href="/about.html" target="_blank" rel="noopener noreferrer">{t('about')}</a> |{" "}
            <a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer">{t('privacyPolicy')}</a> |{" "}
            <a href="/terms-of-service.html" target="_blank" rel="noopener noreferrer">{t('terms')}</a> |{" "}
            <a href="/contact.html" target="_blank" rel="noopener noreferrer">{t('contact')}</a>
          </nav>
          <div>
            © {new Date().getFullYear()} Online Code Formatter. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}
