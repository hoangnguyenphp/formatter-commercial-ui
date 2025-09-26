import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BlogLayout from '../../layouts/BlogLayout';
import '../../styles/ArticlesByTopic.css';
import { 
  fetchSingleArticlesByTopicAndLanguage, 
  fetchTopicTranslation, 
  fetchSerialArticlesByTopicAndLanguage 
} from '../../utils/apiCall';
import { useTranslation } from 'react-i18next';

export default function ArticlesByTopic() {
  const { topicUuid } = useParams();
  const [articles, setArticles] = useState([]);
  const [serialArticles, setSerialArticles] = useState([]);
  const [topicName, setTopicName] = useState(''); // ✅ add topic name state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const languageCode = i18n.language || 'en';

        // ✅ fetch topic translation
        const topicData = await fetchTopicTranslation(topicUuid, languageCode);
        if (topicData?.topicName) {
          setTopicName(topicData.topicName);
        }

        // ✅ fetch articles under this topic
        const data = await fetchSingleArticlesByTopicAndLanguage(topicUuid, languageCode);
        setArticles(data);
		
		// ✅ fetch serial articles
		const serialData = await fetchSerialArticlesByTopicAndLanguage(topicUuid, languageCode);
		setSerialArticles(serialData || []);
      } catch (err) {
        console.error('Error fetching articles by topic:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [topicUuid, i18n.language]);

  if (loading) {
    return (
      <BlogLayout>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <div className="loading-spinner">Loading articles...</div>
        </div>
      </BlogLayout>
    );
  }

  if (error) {
    return (
      <BlogLayout>
        <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
          Error: {error}
        </div>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      <div className="articles-by-topic-container">
        {/* Header */}
        <div className="topic-header">
          <h1 className="topic-title">{topicName || 'Topic Articles'}</h1>
          <p className="topic-subtitle">Explore all articles in this topic</p>
        </div>

        {/* Single Articles Section */}
        {articles.length === 0 ? '' : (<section className="section single-articles-section">
          <div className="section-header">
            <h2 className="section-title">Single Articles</h2>
            <p className="section-subtitle">Standalone articles on this topic</p>
          </div>
		  <div className="articles-list">
		    {articles.map((article) => (
		      <div key={article.articleUuid} className="article-item">
		        <Link
		          to={`/article/single-article/${article.articleUuid}`}
		          className="article-link"
		        >
		          <span>{article.articleName}</span>
		          <div className="article-info">
		            <span>{article.languageName}</span>
		            <span>•</span>
		            <span>{article.viewCounter} views</span>
		            {article.serialArticle && (
		              <span>• Series: {article.serialArticle}</span>
		            )}
		          </div>
		        </Link>
		      </div>
		    ))}
		  </div>
        </section>)}

		{/* Serial Articles Section */}
		<section className="section serial-articles-section">
		  <div className="section-header">
		    <h2 className="section-title">Serial Articles</h2>
		    <p className="section-subtitle">Multi-part article series</p>
		  </div>

		  {serialArticles.length === 0 ? (
		    <div className="placeholder-content">
		      <p>No serial articles available for this topic.</p>
		    </div>
		  ) : (
		    <div className="serial-articles-list">
		      {serialArticles.map((serial) => (
		        <div key={serial.serialArticleUuid} className="serial-article-item">
		          <Link
		            to={`/article/serial-article/${serial.serialArticleUuid}`}
		            className="serial-article-link"
		          >
		            📚 {serial.serialArticleName}
		          </Link>
		        </div>
		      ))}
		    </div>
		  )}
		</section>
      </div>
    </BlogLayout>
  );
}
