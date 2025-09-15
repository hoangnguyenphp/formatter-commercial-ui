import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArticleLayout from '../../layouts/ArticleLayout';
import '../../styles/RelatedArtical.css';
import { articleLinks } from '../../generic/articleLinks';
import { apiCall, fetchArticleByUuidAndLanguage } from '../../utils/apiCall'; 
import { useTranslation } from 'react-i18next';

export default function SerialArticle() {
  const { articleUuid } = useParams();
  const [articleData, setArticleData] = useState(null);
  const [nextChapterData, setNextChapterData] = useState(null);
  const [previousChapterData, setPreviousChapterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Get current language from i18n
        const languageCode = i18n.language ? 'en' : 'en';
        
        // Fetch main article data
        const data = await await fetchArticleByUuidAndLanguage(articleUuid, languageCode);
        setArticleData(data);
		
        // If this is a serial article, fetch previous and next chapter data
        if (data.serialArticle && data.chapterId) {
		  // Previous Chapter
		  try {
		  const previousChapterData = await apiCall(
		  	`/articles/article-by-serial-article-chapter-language/${data.serialArticle}/${data.chapterId - 1}/${languageCode}`);
		  setPreviousChapterData(previousChapterData);			
		  } catch (previousChapterError) {
		    console.log('Error fetching previous chapter:', previousChapterError);
		  	setPreviousChapterData(null);
		  }		  
			
		  // Next chapter	
          try {
            const nextChapterData = await apiCall(
              `/articles/article-by-serial-article-chapter-language/${data.serialArticle}/${data.chapterId + 1}/${languageCode}`
            );
            setNextChapterData(nextChapterData);
          } catch (nextChapterError) {
            console.log('Error fetching next chapter:', nextChapterError);
            setNextChapterData(null);
          }
        }
      } catch (err) {
        console.error('Error fetching article:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticleData();
  }, [articleUuid, i18n.language]);

  if (loading) {
    return (
      <ArticleLayout>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <div className="loading-spinner">Loading article...</div>
        </div>
      </ArticleLayout>
    );
  }

  if (error) {
    return (
      <ArticleLayout>
        <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
          Error loading article: {error}
        </div>
      </ArticleLayout>
    );
  }

  if (!articleData) {
    return (
      <ArticleLayout>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          Article not found.
        </div>
      </ArticleLayout>
    );
  }

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

  return (
    <ArticleLayout>
      <article className="article">
        <h2 style={{ fontSize: '1.2em', marginBottom: '1.5em', textAlign: 'center' }}>
          {articleData.articleName}
        </h2>
        
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
          🗓️ Published on {formatDate(articleData.dateCreated)}
        </p>
        
        {/* Chapter Navigation - Top */}
        <div className="chapter-navigation">
          <div className="prev-chapter-container">
			{previousChapterData ? (
			  <Link 
			    to={`/article/serial-article/${previousChapterData.articleUuid}`} 
			    className="prev-chapter-link"
			  >
			    ⬅️ Previous Chapter
			  </Link>
			) : (
			  <span className="prev-chapter-link" style={{ opacity: 0.5 }}>
			    ⬅️ Previous Chapter
			  </span>
			)}			
          </div>

          <div className="next-chapter-container">
            {nextChapterData ? (
              <Link 
                to={`/article/serial-article/${nextChapterData.articleUuid}`} 
                className="next-chapter-link"
              >
                Next Chapter ➡️
              </Link>
            ) : (
              <span className="next-chapter-link" style={{ opacity: 0.5 }}>
                Next Chapter ➡️
              </span>
            )}
          </div>
        </div>
        
        {/* Display HTML content */}
        {articleData.articleContent && (
          <div 
            dangerouslySetInnerHTML={{ __html: articleData.articleContent }}
            className="article-content"
            style={{ 
              marginBottom: '2rem',
              lineHeight: '1.6',
              fontSize: '1rem'
            }}
          />
        )}
        
        {/* 📚 Source Reference */}
        <div className="artical-source-reference">
          <strong>Source:</strong>{' '}
          {articleData.sourceReference ? (
            <a
              href={articleData.sourceReference.startsWith('http') ? articleData.sourceReference : '#'}
              target="_blank"
              rel="noopener noreferrer"
            >
              {articleData.sourceReference}
            </a>
          ) : (
            'Not specified'
          )}
        </div>
      </article>

      {/* 👉 Next Chapter Section - Bottom */}
      <div className="chapter-navigation">
		<div className="prev-chapter-container">
		  {previousChapterData ? (
			    <Link 
			      to={`/article/serial-article/${previousChapterData.articleUuid}`} 
			      className="prev-chapter-link"
			    >
			      ⬅️ Previous Chapter
			    </Link>
			  ) : (
			    <span className="prev-chapter-link" style={{ opacity: 0.5 }}>
			      ⬅️ Previous Chapter
			    </span>
			  )}			
		</div>
        
        <div className="next-chapter-container">
          {nextChapterData ? (
            <Link 
              to={`/article/serial-article/${nextChapterData.articleUuid}`} 
              className="next-chapter-link"
            >
              Next Chapter ➡️
            </Link>
          ) : (
            <span className="next-chapter-link" style={{ opacity: 0.5 }}>
              Next Chapter ➡️
            </span>
          )}
        </div>
      </div>

      {/* 👉 Related Articles Section */}
      <div className="related-content-box">
        <h3>🔗 Related Articles</h3>
        <ul>
          {[
            'discovery_history_of_america_part_01',
            'discovery_history_of_america_part_02',
            'discovery_history_of_america_part_03',
            'discovery_history_of_america_part_04',
            'discovery_history_of_america_part_05',
            'discovery_history_of_america_part_06',
            'discovery_history_of_america_part_07',
            'discovery_history_of_america_part_08',
            'discovery_history_of_america_part_09',
            'discovery_history_of_america_part_10',
            'discovery_history_of_america_part_11',
            'discovery_history_of_america_part_12'
          ].map((articleKey) => (
            <li key={articleKey}>
              <Link to={articleLinks[articleKey]?.to}>
                {articleLinks[articleKey]?.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </ArticleLayout>
  );
}