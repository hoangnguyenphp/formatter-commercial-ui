import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ArticleLayout from '../../layouts/ArticleLayout';
import '../../styles/RelatedArtical.css';
import { articleLinks } from '../../generic/articleLinks';

export default function Joking_Topic() {
  const { topic_code } = useParams();

  // Convert object to array and filter by topic_code
  const filteredArticles = Object.values(articleLinks).filter(
    (link) => link.topic_code === topic_code
  );

  return (
    <ArticleLayout>
      <div className="related-articles">
        <h2 style={{ marginTop: '1em' }}>Joking Articles</h2>
        <ul className="article-list">
          {filteredArticles.map((link, idx) => (
            <li key={idx}>
              <Link to={link.to}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </ArticleLayout>
  );
}
