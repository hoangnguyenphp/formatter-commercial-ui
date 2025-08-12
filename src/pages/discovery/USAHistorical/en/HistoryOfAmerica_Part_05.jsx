import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../../../layouts/ArticleLayout';
import '../../../../styles/RelatedArtical.css';
import { articleLinks } from '../../../../generic/articleLinks';

export default function HistoryOfAmerica_Part_05() {
  return (
    <ArticleLayout>
      <article className="article">
	  <h2 style={{ fontSize: '1.5em', marginTop: '2em' }}>History of America - Part 05: The Roaring Twenties and the Great Depression (1920–1939)</h2>
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
	  	<Link to={articleLinks.discovery_history_of_america_part_04.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>
	    <div className="next-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_06.to} className="next-chapter-link">
	  	  Next Chapter ➡️
	  	</Link>
	    </div>
	  </div>
	  
	  <p style={{ marginTop: '1em' }}>
	  The 1920s, often called the "Roaring Twenties," were a time of dramatic cultural and economic change in the United States. Following World War I, Americans embraced new freedoms, technologies, and a booming consumer economy. Cities expanded, jazz music flourished, and Hollywood became the epicenter of a growing entertainment industry.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  For many, life was fast-paced and prosperous. Automobiles, radios, and household appliances became common. The stock market soared, and consumer credit allowed people to spend beyond their means. Women, having gained the right to vote in 1920, pushed social boundaries — symbolized by the rise of the “flapper,” a new, freer image of womanhood.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  However, the decade was not universally prosperous. African Americans continued to face discrimination and violence, even as the Harlem Renaissance celebrated Black cultural achievements. Immigrants and laborers faced xenophobia and crackdowns, and Prohibition — the nationwide ban on alcohol — led to speakeasies and the rise of organized crime.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  Then, in October 1929, the stock market crashed. What began as a financial panic spiraled into the Great Depression — the most severe economic downturn in American history. Banks collapsed, businesses failed, and unemployment soared to over 25%. Millions lost their homes, and poverty spread across both cities and rural areas.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  President Herbert Hoover’s attempts to stabilize the economy were seen as too little, too late. In 1932, Franklin D. Roosevelt was elected on a promise of a “New Deal” for the American people. His administration launched unprecedented federal programs to provide relief, create jobs, and reform the financial system.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  The New Deal included initiatives like Social Security, the Civilian Conservation Corps (CCC), and the Works Progress Administration (WPA). These efforts helped stabilize the economy and restore public confidence, though full recovery remained elusive.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  Throughout the 1930s, Americans also faced natural disasters like the Dust Bowl, which devastated farmlands in the Midwest. As the decade ended, the rise of authoritarian regimes in Europe and Asia signaled a new global threat — and set the stage for America’s involvement in World War II.
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
	  	<Link to={articleLinks.discovery_history_of_america_part_04.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>
	    <div className="next-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_06.to} className="next-chapter-link">
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
