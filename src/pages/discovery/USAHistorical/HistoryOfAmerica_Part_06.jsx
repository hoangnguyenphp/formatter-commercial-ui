import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../../layouts/ArticleLayout';
import '../../../styles/RelatedArtical.css';
import { articleLinks } from '../../../generic/articleLinks';

export default function HistoryOfAmerica_Part_06() {
  return (
    <ArticleLayout>
      <article className="article">
	  <h2 style={{ fontSize: '1.5em', marginTop: '2em' }}>
	    History of America - Part 06: World War II and Its Aftermath (1939–1950)
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
	    🗓️ Published on July 30, 2025
	  </p>

	  {/* 👉 Next Chapter Section */} 
	  <div className="chapter-navigation">
	    <div className="prev-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_05.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>
	    <div className="next-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_07.to} className="next-chapter-link">
	  	  Next Chapter ➡️
	  	</Link>
	    </div>
	  </div>

	  <p style={{ marginTop: '1em' }}>
	  When World War II broke out in Europe in 1939, the United States initially remained neutral. However, it provided material support to the Allies through programs like Lend-Lease, as public opinion gradually shifted in favor of intervention. The turning point came on December 7, 1941, when Japan attacked the U.S. naval base at Pearl Harbor, prompting the United States to declare war on Japan — and soon after, on Germany and Italy.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  The United States became a central force in the Allied war effort. American factories ramped up production, transforming the economy and ending the Great Depression. Millions of men and women served in the military, while others supported the war effort on the home front through rationing, war bonds, and working in defense industries. Women entered the workforce in large numbers, symbolized by "Rosie the Riveter."
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  The war was fought on two major fronts: Europe and the Pacific. In Europe, American forces landed in North Africa, Italy, and France — most famously during the D-Day invasion of Normandy in 1944. In the Pacific, they engaged in brutal island-hopping campaigns to push back Japanese forces. The war culminated in the dropping of atomic bombs on Hiroshima and Nagasaki in August 1945, leading to Japan's surrender and the official end of World War II.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  The victory came at a great cost — over 400,000 American lives lost — but it also cemented the United States’ status as a global superpower. In the postwar years, America helped lead the reconstruction of Europe through the Marshall Plan, supported the founding of the United Nations, and established NATO to counter the growing influence of the Soviet Union.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  At home, the postwar period brought economic prosperity and the beginning of the "baby boom." Yet, it was also marked by growing tensions with the Soviet Union, signaling the start of the Cold War. Domestically, returning veterans benefited from the GI Bill, which expanded access to education and homeownership, helping to fuel the rise of a strong middle class.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  Racial segregation and discrimination, however, persisted. African American veterans returned to a country still deeply divided by Jim Crow laws. The seeds of the Civil Rights Movement began to take root during this time, setting the stage for the social and political struggles of the decades to follow.
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
	  	<Link to={articleLinks.discovery_history_of_america_part_05.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>
	    <div className="next-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_07.to} className="next-chapter-link">
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
