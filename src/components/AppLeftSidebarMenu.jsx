// src/components/AppLeftSidebarMenu.jsx
import React, { useEffect, useState } from 'react';
import '../styles/AppLeftSidebarMenu.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { apiCall } from '../utils/apiCall';
import { ArticleLinkFactory } from '../pages/ArticleLinkFactory';

export default function AppLeftSidebarMenu() {
  const [hotArticles, setHotArticles] = useState([]);
  const [jokingArticles, setJokingArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jokingLoading, setJokingLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jokingError, setJokingError] = useState(null);
  const { i18n } = useTranslation();
  
  const numberOfHotArticles = 10;
  const jokingTopicUuid = 'b2775a2b-3cdb-46a4-a9ba-9ea1f3b68bcc'; // Joking topic UUID
  const jokingArticleQuantity = 10;

  useEffect(() => {
    const fetchHotArticles = async () => {
      try {
        setLoading(true);
        const languageCode = i18n.language ? 'en' : 'en';
        const data = await apiCall(`/articles/hot-articles/${numberOfHotArticles}/${languageCode}`);
        setHotArticles(data);
      } catch (err) {
        console.error('Error fetching hot articles:', err);
        setError(err.message);
        setHotArticles([]);
      } finally {
        setLoading(false);
      }
    };

    const fetchJokingArticles = async () => {
      try {
        setJokingLoading(true);
        const languageCode = i18n.language || 'en';
        const data = await apiCall(`/articles/single-articles-by-topic-language/${jokingTopicUuid}/${languageCode}?quantity=${jokingArticleQuantity}`);
        setJokingArticles(data);
      } catch (err) {
        console.error('Error fetching joking articles:', err);
        setJokingError(err.message);
        setJokingArticles([]);
      } finally {
        setJokingLoading(false);
      }
    };

    fetchHotArticles();
    fetchJokingArticles();
  }, [i18n.language]);

  const truncate = (text, max = 30) =>
    text.length > max ? text.slice(0, max - 3) + '...' : text;

  return (
    <aside className="sidebar-left">
      <div className="sidebar-section tools">
        <h3>🛠️ Tools</h3>
        <ul>
          <li><Link to="/">Code Formatter</Link></li>
          <li><Link to="/apps/uuid-generator">UUID Generator</Link></li>
        </ul>
      </div>
      
      <div className="sidebar-section hot-articles">
        <h3>🔥 Hot Articles</h3>
        
        {loading && (
          <div style={{ padding: '0.5rem', textAlign: 'center' }}>
            <div className="loading-spinner-small">Loading...</div>
          </div>
        )}
        
        {error && (
          <div style={{ 
            padding: '0.5rem', 
            color: '#d32f2f', 
            fontSize: '0.8rem',
            backgroundColor: '#ffebee',
            borderRadius: '4px',
            margin: '0.5rem 0'
          }}>
            Failed to load hot articles
          </div>
        )}
        
        <ul>
          {hotArticles.length === 0 && !loading ? (
            <li style={{ color: '#666', fontStyle: 'italic', padding: '0.5rem' }}>
              No hot articles available
            </li>
          ) : (
            hotArticles.map((article) => (
              <li key={article.articleUuid}>
                <Link 
                  to={ArticleLinkFactory.createArticleLink(article)} 
                  title={article.articleName}
                  className="hot-article-link"
                >
                  {truncate(article.articleName)}
                  {article.serialArticle && (
                    <span className="serial-indicator" title="Serial Article"> 📖</span>
                  )}
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
      
      <div className="sidebar-section joking-section">
        <h3>🤣 Joking</h3>
        
        {jokingLoading && (
          <div style={{ padding: '0.5rem', textAlign: 'center' }}>
            <div className="loading-spinner-small">Loading...</div>
          </div>
        )}
        
        {jokingError && (
          <div style={{ 
            padding: '0.5rem', 
            color: '#d32f2f', 
            fontSize: '0.8rem',
            backgroundColor: '#ffebee',
            borderRadius: '4px',
            margin: '0.5rem 0'
          }}>
            Failed to load joking articles
          </div>
        )}
        
        <ul>
          {jokingArticles.length === 0 && !jokingLoading ? (
            <li style={{ color: '#666', fontStyle: 'italic', padding: '0.5rem' }}>
              No joking articles available
            </li>
          ) : (
            jokingArticles.map((article) => (
              <li key={article.articleUuid}>
                <Link 
                  to={ArticleLinkFactory.createArticleLink(article)} 
                  title={article.articleName}
                  className="joking-article-link"
                >
                  {truncate(article.articleName)}
                  {article.serialArticle && (
                    <span className="serial-indicator" title="Serial Article"> 📖</span>
                  )}
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </aside>
  );
}