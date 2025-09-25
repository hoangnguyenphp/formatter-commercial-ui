import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import BlogLayout from '../../layouts/BlogLayout';
import '../../styles/RelatedArtical.css';
import '../../styles/SerialArticle.css';
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
  
  // Inside your component:
  const [chapters, setChapters] = useState([]);
  const [chapterPage, setChapterPage] = useState(0);
  const [hasMoreChapters, setHasMoreChapters] = useState(true);
  const [loadingChapters, setLoadingChapters] = useState(false);
  const PAGE_SIZE = 4;

  const [topDropdownOpen, setTopDropdownOpen] = useState(false);
  const [bottomDropdownOpen, setBottomDropdownOpen] = useState(false);
  // Add state for selected chapter
  const [selectedChapter, setSelectedChapter] = useState(null);
  
  const topDropdownRef = useRef(null);
  const bottomDropdownRef = useRef(null);

  
  const loadChapters = async (page = 0) => {
    if (!articleData?.serialArticle || loadingChapters) return;
    try {
      setLoadingChapters(true);
      const languageCode = i18n.language ? "en" : "en";
      const data = await apiCall(
        `/articles/serial-article-chapters/${articleData.serialArticle}/${languageCode}?page=${page}&size=${PAGE_SIZE}`
      );
      if (data && data.length > 0) {
        setChapters((prev) => [...prev, ...data]);
        setChapterPage(page);
      } else {
        setHasMoreChapters(false);
      }
    } catch (err) {
      console.error("Error loading chapters:", err);
    } finally {
      setLoadingChapters(false);
    }
  };

  // Handle scroll inside dropdown
  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 5 && hasMoreChapters) {
      loadChapters(chapterPage + 1);
    }
  };

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
        
		// ✅ keep dropdown button in sync with article
		if (data?.chapterId && data?.articleName) {
		  setSelectedChapter({
		    id: data.chapterId,
		    name: data.articleName,
		  });
		}
		
        // If this is a serial article, fetch previous and next chapter data
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
        }
      } catch (err) {
        console.error('Error fetching article:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticleData();
	
	const handleClickOutside = (event) => {
	  if (topDropdownRef.current && !topDropdownRef.current.contains(event.target)) {
	    setTopDropdownOpen(false);
	  }
	  if (bottomDropdownRef.current && !bottomDropdownRef.current.contains(event.target)) {
	    setBottomDropdownOpen(false);
	  }
	};

	document.addEventListener("mousedown", handleClickOutside);
	return () => {
	  document.removeEventListener("mousedown", handleClickOutside);
	};
	setDropdownOpen(false);
	
  }, [articleUuid, i18n.language]);

  if (loading) {
    return (
      <BlogLayout>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <div className="loading-spinner">Loading article...</div>
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

  if (!articleData) {
    return (
      <BlogLayout>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          Article not found.
        </div>
      </BlogLayout>
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
  
  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..▾" : text;
  };
  
  return (
    <BlogLayout>
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


		  {/* Middle Dropdown for All Chapters */}
		  <div className="chapter-dropdown-container" ref={topDropdownRef}>
		  	  <div className="chapter-dropdown-label">All Chapters:</div>
			  <button
			    type="button"
			    className="chapter-dropdown-btn"
			    onClick={() => {
			      setTopDropdownOpen((prev) => !prev);
			      if (!topDropdownOpen && chapters.length === 0) {
			        loadChapters(0);
			      }
			    }}
			  >
			  📖 {selectedChapter ? `${selectedChapter.id}. ${truncateText(selectedChapter.name, 30)} ▾` : "All Chapters"} ▾
			  </button>

		    {topDropdownOpen && (
		      <div className="chapter-dropdown-menu" onScroll={handleScroll}>
		        {chapters.map((ch) => (
					<Link
					  key={ch.articleUuid}
					  to={`/article/serial-article/${ch.articleUuid}`}
					  className={`chapter-dropdown-item ${
					    ch.chapterId === currentChapterId ? "active" : ""
					  }`}
					  onClick={() => {
					    setSelectedChapter({ id: ch.chapterId, name: ch.articleName });
					    setTopDropdownOpen(false); // close after click
					  }}
					>
					  {ch.chapterId}. {ch.articleName}
					</Link>
		        ))}
		        {loadingChapters && <div className="chapter-loading">Loading more...</div>}
		        {!hasMoreChapters && <div className="chapter-end">No more chapters</div>}
		      </div>
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
		
		{/* Middle Dropdown for All Chapters */}
		<div className="chapter-dropdown-container" ref={bottomDropdownRef}>
		  <div className="chapter-dropdown-label">All Chapters:</div>
		  <button
		    type="button"
		    className="chapter-dropdown-btn"
		    onClick={() => {
		      setBottomDropdownOpen((prev) => !prev);
		      if (!bottomDropdownOpen && chapters.length === 0) {
		        loadChapters(0);
		      }
		    }}
		  >
		  📖 {selectedChapter ? `${selectedChapter.id}. ${truncateText(selectedChapter.name, 30)} ▾` : "All Chapters"} ▾
		  </button>

		  {bottomDropdownOpen && (
		    <div className="chapter-dropdown-menu" onScroll={handleScroll}>
		      {chapters.map((ch) => (
				<Link
				  key={ch.articleUuid}
				  to={`/article/serial-article/${ch.articleUuid}`}
				  className={`chapter-dropdown-item ${
				    ch.chapterId === currentChapterId ? "active" : ""
				  }`}
				  onClick={() => {
				    setSelectedChapter({ id: ch.chapterId, name: ch.articleName });
				    setBottomDropdownOpen(false); // close after click
				  }}
				>
				  {ch.chapterId}. {ch.articleName}
				</Link>
		      ))}
		      {loadingChapters && <div className="chapter-loading">Loading more...</div>}
		      {!hasMoreChapters && <div className="chapter-end">No more chapters</div>}
		    </div>
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
    </BlogLayout>
  );
}