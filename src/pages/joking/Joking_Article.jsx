import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../layouts/ArticleLayout';
import '../../styles/RelatedArtical.css';
import { articleLinks } from '../../generic/articleLinks';
import { fetchArticle } from '../../utils/apiCall'; // Import from utils

export default function Joking_Article() {
  const [articleData, setArticleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticle = async () => {
      try {
        // Use the imported fetchArticle function
        const data = await fetchArticle('de9b9207-0b68-44a2-bd84-c2e3d33ac1ab');
        setArticleData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        // Fallback data
        setArticleData({
          articleName: "Programmer Jokes",
          articleContent: "<p>Unable to load content. Please check your connection and try again.</p>"
        });
      }
    };

    getArticle();
  }, []);

  if (loading) {
    return (
      <ArticleLayout>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          Loading article...
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

  return (
    <ArticleLayout>
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
          🗓️ Published on August 01, 2025
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
          <strong>Source:</strong> Internet
        </div>
      </article>

      {/* 👉 Related Articles Section */}
      <div className="related-content-box ">
        <h3>🔗 Related Articles</h3>
        <ul>
          <li>
            <Link to={articleLinks.joking_part_01.to}>
              {articleLinks.joking_part_01.title}
            </Link>
          </li>
        </ul>
      </div>
    </ArticleLayout>
  );
}