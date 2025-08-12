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
  const { t, i18n } = useTranslation();

  // Theme state with localStorage
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('themeMode') || 'dark';
  });

  useEffect(() => {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(mode);
    localStorage.setItem('themeMode', mode);
  }, [mode]);
  
  const truncate = (text, max = 30) =>
    text.length > max ? text.slice(0, max - 3) + '...' : text;

  // ✅ Define changeLanguage
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); // optional: remember choice
  };

  return (
    <main className="container">
      <ToolLeftSidebarMenu />

      {/* Right-side Ad */}
      <div className="ads-right">
        <AdsBanner slot="1234567892" layout="vertical" style={{ width: '160px', height: '600px' }} />
      </div>

      <div className="main-content">
        {/* Header */}
        <header className="app-header">
          <div 
            className="header-content"
            onClick={() => (window.location.href = '/')}
            style={{ cursor: 'pointer' }}
          >
            <h1>Online Code Formatter</h1>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Link
                to={topicLinks.discovery('discovery').to_value}
                className="from-tool-to-blog-link"
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
              {/* ✅ Move dropdown inside clickable area but prevent header redirect */}
              <select style={{ display: 'none'}}
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
                onClick={(e) => e.stopPropagation()} // ✅ stop header click
              >
                <option value="en">English</option>
                <option value="vi">Tiếng Việt</option>
              </select>
            </div>
          </div>
        </header>

        {children}

        <div style={{ textAlign: 'center', fontSize: '0.9rem', margin: '1em 0' }}>
          <PageVisitCounter />
        </div>
        <footer className="app-footer">
          <nav className="footer-nav">
            <a href="/about.html" target="_blank" rel="noopener noreferrer">
              {t('about')}
            </a>{" "}
            |{" "}
            <a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer">
              {t('privacyPolicy')}
            </a>{" "}
            |{" "}
            <a href="/terms-of-service.html" target="_blank" rel="noopener noreferrer">
              {t('terms')}
            </a>{" "}
            |{" "}
            <a href="/contact.html" target="_blank" rel="noopener noreferrer">
              {t('contact')}
            </a>
          </nav>
          <div>© {new Date().getFullYear()} Online Code Formatter. All rights reserved.</div>
        </footer>
      </div>
    </main>
  );
}
