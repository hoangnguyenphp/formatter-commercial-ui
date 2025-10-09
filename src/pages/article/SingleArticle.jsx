import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import BlogLayout from '../../layouts/BlogLayout';
import '../../styles/RelatedArtical.css';
import { articleLinks } from '../../generic/articleLinks';
import { fetchArticleByUuidAndLanguage, fetchRelatedArticlesByArticleUuidAndLanguage } from '../../utils/apiCall';
import { useTranslation } from 'react-i18next';

export default function SingleArticle() {
  const { articleUuid } = useParams();
  const [articleData, setArticleData] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingRelated, setLoadingRelated] = useState(false);
  const [error, setError] = useState(null);
  const { i18n } = useTranslation();

  // Pagination states for related articles
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const getArticle = async () => {
      try {
        const languageCode = i18n.language ? 'en' : 'en';
        const data = await fetchArticleByUuidAndLanguage(articleUuid, languageCode);
        setArticleData(data);
        setLoading(false);
        
        // Load initial related articles
        await loadRelatedArticles(0, languageCode);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        setArticleData({
          articleName: "Programmer Jokes",
          articleContent: "<p>Unable to load content. Please check your connection and try again.</p>"
        });
      }
    };

    getArticle();
  }, [articleUuid, i18n.language]);

  // Function to load related articles with pagination
  const loadRelatedArticles = async (page, languageCode) => {
    if (loadingRelated) return;
    
    try {
      setLoadingRelated(true);
      const pageSize = 10; // Load 10 articles at a time
      
      const relatedData = await fetchRelatedArticlesByArticleUuidAndLanguage(articleUuid, languageCode, page, pageSize);
      
      if (relatedData.length === 0) {
        setHasMore(false);
      } else {
        if (page === 0) {
          setRelatedArticles(relatedData);
        } else {
          setRelatedArticles(prev => [...prev, ...relatedData]);
        }
        setCurrentPage(page);
        
        // If we got less than requested, there are no more articles
        if (relatedData.length < pageSize) {
          setHasMore(false);
        }
      }
    } catch (err) {
      console.error('Error loading related articles:', err);
    } finally {
      setLoadingRelated(false);
    }
  };

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container || !hasMore || loadingRelated) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    // Load more when 80% scrolled
    if (scrollTop + clientHeight >= scrollHeight * 0.8) {
      const languageCode = i18n.language || 'en';
      loadRelatedArticles(currentPage + 1, languageCode);
    }
  }, [hasMore, loadingRelated, currentPage, i18n.language]);

  // Set up scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Function to generate appropriate link based on article type
  const generateArticleLink = (article) => {
    if (article.isSerialArticleMaster) {
      return `/serial-article/${article.articleUuid}`;
    } else {
      return `/article/single-article/${article.articleUuid}`;
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <BlogLayout>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          Loading article...
        </div>
      </BlogLayout>
    );
  }

  if (error) {
    return (
      <BlogLayout>
        <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
          Error loading article: {error}
        </div>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      <article className="article">
        <h1 style={{ fontSize: '1.2em', marginBottom: '1.5em', textAlign: 'center' }}>
          {articleData?.articleName || 'Programmer Jokes'}
        </h1>
        {/* ✅ Publish Date */}
        <p
          style={{
            fontSize: '0.85em',
            color: '#777',
            textAlign: 'center',
            marginTop: '0.5em',
            marginBottom: '2em',
          }}
        >
          🗓️ Published on {formatDate(articleData?.dateCreated) || 'August 01, 2025'}
        </p>
        
        {/* Display HTML content here */}
        {articleData?.articleContent && (
          <div 
            dangerouslySetInnerHTML={{ __html: articleData.articleContent }}
            style={{ marginBottom: '2rem' }}
          />
        )}
        
        {/* 📚 Source Reference */}
        <div className="artical-source-reference">
          <strong>Source:</strong> {articleData?.sourceReference || 'Internet'}
        </div>
      </article>

      {/* 👉 Related Articles Section with Infinite Scroll */}
      <div className="related-content-box">
        <h3>🔗 Related Articles</h3>
        
        <div 
          className="related-scroll-container"
          ref={scrollContainerRef}
        >
          {relatedArticles.length > 0 ? (
            <ul>
              {relatedArticles.map((article) => (
                <li key={article.articleUuid}>
                  <Link 
                    to={generateArticleLink(article)}
                    className="related-article-link"
                  >
                    <div className="related-article-content">
                      <span className="related-article-title">
                        {article.articleName}
                      </span>
                      <div className="related-article-meta">
                        {article.dateCreated && (
                          <span className="related-article-date">
                            {formatDate(article.dateCreated)}
                          </span>
                        )}
                        {article.viewCounter !== null && (
                          <span className="related-article-views">
                            👁️ {article.viewCounter} views
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
              
              {/* Loading indicator */}
              {loadingRelated && (
                <li className="loading-item">
                  <div className="loading-text">Loading more articles...</div>
                </li>
              )}
              
              {/* End of results message */}
              {!hasMore && relatedArticles.length > 0 && (
                <li className="end-message">
                  <div className="loading-text">All related articles loaded</div>
                </li>
              )}
            </ul>
          ) : (
            !loadingRelated && (
              <div className="empty-state">
                <p>No related articles found</p>
              </div>
            )
          )}
        </div>
      </div>
    </BlogLayout>
  );
}