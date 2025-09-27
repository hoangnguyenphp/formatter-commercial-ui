import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlogLayout from "../../layouts/BlogLayout";
import "../../styles/SerialArticleChapterList.css";
import { useTranslation } from "react-i18next";
import {
  fetchSerialArticleByUuidAndLanguage,
  fetchChaptersBySerialUuidAndLanguage 
} from '../../utils/apiCall';

export default function SerialArticleChapterList() {
  const { serialArticleUuid } = useParams(); // ✅ we need the serial article uuid here
  const [serialArticle, setSerialArticle] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { i18n } = useTranslation();
  const pageSize = 3;

  useEffect(() => {
    const fectchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const languageCode = i18n.language ? "en" : "en";
		
		const serialArticleData = await fetchSerialArticleByUuidAndLanguage(serialArticleUuid, languageCode);
		
		setSerialArticle(serialArticleData);	
				
        const chaptersData = await fetchChaptersBySerialUuidAndLanguage(serialArticleUuid, languageCode, page, pageSize);

        if (chaptersData.length > 0) {
          setChapters((prev) => [...prev, ...chaptersData]);
        } else {
          setHasMore(false); // no more data
        }
      } catch (err) {
        console.error("Error fetching chapters:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fectchData();
  }, [page, serialArticleUuid, i18n.language]);

  if (error) {
    return (
      <BlogLayout>
        <div style={{ textAlign: "center", padding: "2rem", color: "red" }}>
          Error: {error}
        </div>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      <div className="serial-article-chapter-list-container">
        {/* Header */}
        <div className="serial-article-chapter-list-header">
          <h1 className="serial-article-chapter-list-title">{serialArticle?.serialArticleName}</h1>
          <p className="serial-article-chapter-list-subtitle">
            Explore all chapters of this serial article
          </p>
        </div>

        {/* Chapters Section */}
        <section className="section chapters-section">
          <div className="section-header">
            <h2 className="section-title">All Chapters</h2>
            <p className="section-subtitle">Multi-part chapters</p>
          </div>
          <div className="scrollable-content">
            <div className="chapter-list">
              {chapters.map((chapter) => (
                <div key={chapter.articleUuid} className="chapter-item">
                  <Link
                    to={`/article/serial-article/${chapter.articleUuid}`}
                    className="chapter-link"
                  >
                    Chapter {chapter.chapterId}: {chapter.articleName}
                  </Link>
                  <div className="chapter-meta">
                    <span>{chapter.viewCounter} views</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            {hasMore && !loading && (
              <div style={{ textAlign: "center", margin: "1rem 0" }}>
                <button
                  className="load-more-btn"
                  onClick={() => setPage((prev) => prev + 1)}
                >
                  Load More
                </button>
              </div>
            )}
            {loading && (
              <div style={{ textAlign: "center", padding: "1rem" }}>
                Loading...
              </div>
            )}
          </div>
        </section>
      </div>
    </BlogLayout>
  );
}
