// src/components/ArticleLeftSidebarMenu.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogLeftSidebarMenu.css';
import { scrollToTop, scrollToBottom } from '../utils/scrollUtils';
import { topicLinks } from '../generic/topicLinks';
import GoTopBottomButtons from './GoTopBottomButtons';
import { useTranslation } from 'react-i18next';
import { fetchTopicsByLanguageCode } from '../utils/apiCall';

export default function BlogLeftSidebarMenu() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { i18n } = useTranslation();

  const truncate = (text, max = 30) =>
    text.length > max ? text.slice(0, max - 3) + '...' : text;
  
  const btnStyle = {
    padding: '10px 1rem',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Get current language and pass it to the API function
        const languageCode = i18n.language || 'en';
        const data = await fetchTopicsByLanguageCode(languageCode);
        
        setTopics(data);
      } catch (err) {
        console.error('Error fetching topics:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, [i18n.language]);

  // Function to provide fallback topics based on language
  const getFallbackTopics = (language) => {
    if (language === 'vi') {
      return [
        {
          topicUuid: "1f8de625-f71c-4c0f-997b-9a158b744c4d",
          topicName: "Khám Phá",
          languageCode: "vi",
          languageName: "Vietnamese"
        },
        {
          topicUuid: "b2775a2b-3cdb-46a4-a9ba-9ea1f3b68bcc",
          topicName: "Truyện cười",
          languageCode: "vi",
          languageName: "Vietnamese"
        }
      ];
    } else {
      // Default to English
      return [
        {
          topicUuid: "1f8de625-f71c-4c0f-997b-9a158b744c4d",
          topicName: "Discovery",
          languageCode: "en",
          languageName: "English"
        },
        {
          topicUuid: "b2775a2b-3cdb-46a4-a9ba-9ea1f3b68bcc",
          topicName: "Joking",
          languageCode: "en",
          languageName: "English"
        }
      ];
    }
  };

  // Function to generate topic link based on topic UUID
  const getTopicLink = (topicUuid, topicName) => {
    // Convert topic name to lowercase for routing
    const topicSlug = topicName.toLowerCase().replace(/\s+/g, '-');
    return `/topic/${topicUuid}`;
  };

  return (
    <aside className="blog-sidebar-left">
      <div className="blog-sidebar-section topics">
        <h3>📚 Topics</h3>
        
        {loading && (
          <div style={{ padding: '0.5rem', textAlign: 'center' }}>
            <div className="loading-spinner">Loading topics...</div>
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
            Failed to load topics: {error}
          </div>
        )}
        
        <ul>
          {topics.map((topic) => (
            <li key={topic.topicUuid}>
              <Link 
                to={getTopicLink(topic.topicUuid, topic.topicName)}
                title={topic.topicName}
                onClick={(e) => {
                  // You can add topic tracking or analytics here
                  console.log('Topic selected:', topic.topicName);
                }}
              >
                {truncate(topic.topicName)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div style={{flexDirection: 'column', gap: '0.5rem' }}>
        <button onClick={scrollToTop} style={btnStyle}>⬆ Top</button>
        <button onClick={scrollToBottom} style={btnStyle}>⬇ Bottom</button>
      </div>
    </aside>
  );
}