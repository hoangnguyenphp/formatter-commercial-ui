import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArticleLayout from '../../layouts/ArticleLayout';
import '../../styles/RelatedArtical.css';
import '../../styles/SerialArticle.css';
import { articleLinks } from '../../generic/articleLinks';
import { apiCall, fetchArticleByUuidAndLanguage } from '../../utils/apiCall'; 
import { useTranslation } from 'react-i18next';
import { ArticleLinkFactory } from '../ArticleLinkFactory'; // Adjust path as needed

export default function SerialArticle() {
  const { articleUuid } = useParams();
  const [articleData, setArticleData] = useState(null);
  const [nextChapterData, setNextChapterData] = useState(null);
  const [previousChapterData, setPreviousChapterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { i18n } = useTranslation();

  // Pagination states
  const [currentPage, setCurrentPage] = useState(0);
  const [loadedChapters, setLoadedChapters] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loadingChapters, setLoadingChapters] = useState(false);
  
  const LOAD_MORE_CHAPTER_SIZE = 2;

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Get current language from i18n
        const languageCode = i18n.language ? 'en' : 'en';
        
        // Fetch main article data
        const data = await fetchArticleByUuidAndLanguage(articleUuid, languageCode);
        setArticleData(data);
        
        // If this is a serial article, fetch previous, next chapter data, and initial chapters
        if (data.serialArticle && data.chapterId) {
          // Previous Chapter
          try {
            const previousChapter = await apiCall(
              `/articles/article-by-serial-article-chapter-language/${data.serialArticle}/${data.chapterId - 1}/${languageCode}`
            );
            setPreviousChapterData(previousChapter);
          } catch (previousChapterError) {
            console.log('Error fetching previous chapter:', previousChapterError);
            setPreviousChapterData(null);
          }
          
          // Next Chapter
          try {
            const nextChapter = await apiCall(
              `/articles/article-by-serial-article-chapter-language/${data.serialArticle}/${data.chapterId + 1}/${languageCode}`
            );
            setNextChapterData(nextChapter);
          } catch (nextChapterError) {
            console.log('Error fetching next chapter:', nextChapterError);
            setNextChapterData(null);
          }
          
          // Load initial chapters (page 0, size 10)
          await loadChapters(0, LOAD_MORE_CHAPTER_SIZE, data.serialArticle, languageCode);
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

  // Function to load chapters with pagination
  const loadChapters = async (page, size, serialArticleUuid, languageCode) => {
    try {
      setLoadingChapters(true);
      const chapters = await apiCall(
        `/articles/serial-article-chapters/${serialArticleUuid}/${languageCode}?page=${page}&size=${size}`
      );
      
      if (chapters.length === 0) {
        setHasMore(false);
      } else {
        if (page === 0) {
          setLoadedChapters(chapters);
        } else {
          setLoadedChapters(prev => [...prev, ...chapters]);
        }
        setCurrentPage(page);
        
        // Check if we might have more chapters (if we got exactly the requested size)
        if (chapters.length < size) {
          setHasMore(false);
        }
      }
    } catch (error) {
      console.log('Error fetching chapters:', error);
    } finally {
      setLoadingChapters(false);
    }
  };

  // Function to load more chapters
  const loadMoreChapters = () => {
    if (articleData && articleData.serialArticle && hasMore && !loadingChapters) {
      const languageCode = i18n.language ? 'en' : 'en';
      loadChapters(currentPage + 1, LOAD_MORE_CHAPTER_SIZE, articleData.serialArticle, languageCode);
    }
  };

  // Combined function for scrolling and loading more
  const handleNextButtonClick = () => {
    // First try to scroll
    document.querySelector(".chapters-scroll-container")?.scrollBy({ 
      left: 250, 
      behavior: "smooth" 
    });
    
    // If we're near the end and have more chapters, load more
    const scrollContainer = document.querySelector(".chapters-scroll-container");
    if (scrollContainer) {
      const scrollLeft = scrollContainer.scrollLeft;
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;
      
      // If we're at 80% of the scroll position and have more chapters, load more
      if (scrollLeft + clientWidth >= scrollWidth * 0.8 && hasMore) {
        loadMoreChapters();
      }
    }
  };

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

  // Get current chapter number for highlighting
  const currentChapterId = articleData.chapterId;

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
                to={ArticleLinkFactory.createSerialArticleLink(previousChapterData.articleUuid)}
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
                to={ArticleLinkFactory.createSerialArticleLink(nextChapterData.articleUuid)}
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
              to={ArticleLinkFactory.createSerialArticleLink(previousChapterData.articleUuid)}
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
              to={ArticleLinkFactory.createSerialArticleLink(nextChapterData.articleUuid)}
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

      {/* 👉 All Chapters Section - With Pagination */}
      {articleData.serialArticle && (
        <div className="all-chapters-section">
          <div className="section-header">
            <h3>📖 All Chapters</h3>
            <p className="section-subtitle">Complete series navigation</p>
            {loadingChapters && (
              <span className="chapters-loading-text">Loading more chapters...</span>
            )}
          </div>

          <div className="chapters-wrapper">
            {/* Previous Button */}
            <button
              className="scroll-btn prev-btn"
              onClick={() => {
                document.querySelector(".chapters-scroll-container")
                  .scrollBy({ left: -250, behavior: "smooth" });
              }}
            >
              ❮
            </button>

            <div className="chapters-scroll-container">
              <div className="chapters-grid">
                {loadedChapters.length > 0 ? (
                  loadedChapters.map((chapter) => {
                    const isCurrentChapter = currentChapterId === chapter.chapterId;

                    return (
                      <div
                        key={chapter.articleUuid}
                        className={`chapter-item ${isCurrentChapter ? "current-chapter" : ""}`}
                      >
                        <Link
                          to={ArticleLinkFactory.createSerialArticleLink(chapter.articleUuid)}
                          className="chapter-link"
                          title={chapter.articleName}
                        >
                          <span className="chapter-number">Chapter {chapter.chapterId}</span>
                          <span className="chapter-title">{chapter.articleName}</span>
                        </Link>
                      </div>
                    );
                  })
                ) : (
                  // Fallback UI if no chapters data
                  <div className="chapters-error-message">
                    <p>Failed to load all chapters</p>
                  </div>
                )}
              </div>
            </div>

            {/* Next Button - Now handles both scrolling and loading more */}
            <button
              className="scroll-btn next-btn"
              onClick={handleNextButtonClick}
              disabled={!hasMore && loadingChapters}
            >
              {loadingChapters ? '⏳' : '❯'}
            </button>
          </div>

          {/* Loading indicator for chapters */}
          {loadingChapters && (
            <div className="chapters-loading">
              <div className="loading-spinner">Loading more chapters...</div>
            </div>
          )}
        </div>
      )}

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