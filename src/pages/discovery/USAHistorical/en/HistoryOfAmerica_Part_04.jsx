import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../../../layouts/ArticleLayout';
import '../../../../styles/RelatedArtical.css';
import { articleLinks } from '../../../../generic/articleLinks';

export default function HistoryOfAmerica_Part_04() {
  return (
    <ArticleLayout>
      <article className="article">
	  <h2 style={{ fontSize: '1.5em', marginTop: '2em' }}>History of America - Part 04: The Gilded Age and Progressive Era (1877–1920)</h2>
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
	    🗓️ Published on July 30, 2025
	  </p>
	  {/* 👉 Next Chapter Section */} 
	  <div className="chapter-navigation">
	    <div className="prev-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_03.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>
	    <div className="next-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_05.to} className="next-chapter-link">
	  	  Next Chapter ➡️
	  	</Link>
	    </div>
	  </div>
	  
	  <p style={{ marginTop: '1em' }}>
	  After the end of Reconstruction in 1877, the United States entered a period of rapid industrialization, urbanization, and economic expansion known as the Gilded Age. Coined by Mark Twain, the term reflects the glittering prosperity that masked deep social problems like inequality, corruption, and exploitation.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  Massive growth in steel, oil, and railroads made industrialists like Andrew Carnegie and John D. Rockefeller immensely wealthy. Cities swelled as millions of immigrants from Europe arrived, seeking opportunity. But tenement housing, poor labor conditions, and political machines like Tammany Hall revealed the darker side of this boom.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  Labor unrest grew. Strikes like the Great Railroad Strike of 1877 and the Haymarket Affair of 1886 highlighted tensions between workers and industrialists. Unions such as the American Federation of Labor began to organize for better wages, hours, and working conditions.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  Meanwhile, the federal government often sided with big business. Corruption was rampant, and reform seemed distant. Yet reformers and muckrakers — investigative journalists like Upton Sinclair and Ida Tarbell — began exposing abuses in industry, politics, and society.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  This led to the Progressive Era, beginning around 1890 and lasting into the early 20th century. Progressives pushed for reforms: breaking up monopolies, improving urban life, advancing women’s suffrage, and regulating food and drugs. Presidents like Theodore Roosevelt and Woodrow Wilson championed many of these efforts.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  During this time, the U.S. also emerged as a global power. The Spanish-American War in 1898 resulted in control over territories like Puerto Rico, Guam, and the Philippines. The construction of the Panama Canal and Roosevelt’s “Big Stick” diplomacy signaled growing American influence abroad.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  Socially, the movement for women’s rights gained momentum. Activists like Susan B. Anthony and Alice Paul fought for the vote, culminating in the 19th Amendment in 1920, which granted women nationwide suffrage.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  By 1920, the United States had been transformed — from a mostly rural society into an industrial and urban powerhouse. But new challenges loomed, including the aftermath of World War I, economic instability, and unresolved racial and class tensions.
	  </p>
	  {/* 📚 Source Reference */}
	  <div className="artical-source-reference">
	    <strong>Source:</strong>{' '}
	    <a
	      href="https://www.archives.gov/founding-docs"
	      target="_blank"
	      rel="noopener noreferrer"
	    >
	      U.S. National Archives - Founding Documents
	    </a>
	  </div>
      </article>

	  {/* 👉 Next Chapter Section */} 
	  <div className="chapter-navigation">
	    <div className="prev-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_03.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>
	    <div className="next-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_05.to} className="next-chapter-link">
	  	  Next Chapter ➡️
	  	</Link>
	    </div>
	  </div>

      {/* 👉 Related Articles Section */}
      <div className="related-content-box ">
        <h3>🔗 Related Articles</h3>
        <ul>
			<li>
			  <Link to={articleLinks.discovery_history_of_america_part_01.to}>{articleLinks.discovery_history_of_america_part_01.title}</Link>
			</li>
			<li>
			  <Link to={articleLinks.discovery_history_of_america_part_02.to}>{articleLinks.discovery_history_of_america_part_02.title}</Link>
			</li>
			<li>
			  <Link to={articleLinks.discovery_history_of_america_part_03.to}>{articleLinks.discovery_history_of_america_part_03.title}</Link>
			</li>
			<li>
			  <Link to={articleLinks.discovery_history_of_america_part_04.to}>{articleLinks.discovery_history_of_america_part_04.title}</Link>
			</li>
			<li>
			  <Link to={articleLinks.discovery_history_of_america_part_05.to}>{articleLinks.discovery_history_of_america_part_05.title}</Link>
			</li>
			<li>
			  <Link to={articleLinks.discovery_history_of_america_part_06.to}>{articleLinks.discovery_history_of_america_part_06.title}</Link>
			</li>
			<li>
			  <Link to={articleLinks.discovery_history_of_america_part_07.to}>{articleLinks.discovery_history_of_america_part_07.title}</Link>
			</li>
			<li>
			  <Link to={articleLinks.discovery_history_of_america_part_08.to}>{articleLinks.discovery_history_of_america_part_08.title}</Link>
			</li>
			<li>
			  <Link to={articleLinks.discovery_history_of_america_part_09.to}>{articleLinks.discovery_history_of_america_part_09.title}</Link>
			</li>
			<li>
			  <Link to={articleLinks.discovery_history_of_america_part_10.to}>{articleLinks.discovery_history_of_america_part_10.title}</Link>
			</li>
			<li>
			  <Link to={articleLinks.discovery_history_of_america_part_11.to}>{articleLinks.discovery_history_of_america_part_11.title}</Link>
			</li>
			<li>
			  <Link to={articleLinks.discovery_history_of_america_part_12.to}>{articleLinks.discovery_history_of_america_part_12.title}</Link>
			</li>
        </ul>
      </div>
    </ArticleLayout>
  );
}
