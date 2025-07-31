import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../../layouts/ArticleLayout';
import '../../../styles/RelatedArtical.css';
import { articleLinks } from '../../../generic/articleLinks';

export default function HistoryOfAmerica_Part_12() {
  return (
    <ArticleLayout>
      <article className="article">
	  <h2 style={{ fontSize: '1.5em', marginTop: '2em' }}>
	    History of America - Part 12: Social Change, Polarization, and Innovation (2010–2020)
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
	  	<Link to={articleLinks.discovery_history_of_america_part_11.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>
	    <div className="next-chapter-container">
	  	<Link className="next-chapter-link">
	  	  Next Chapter ➡️
	  	</Link>
	    </div>
	  </div>

	  <p style={{ marginTop: '1em' }}>
	    The 2010s were marked by profound <strong>social transformation</strong>, growing <strong>political polarization</strong>, and unprecedented <strong>technological innovation</strong>. Following the 2008 financial crisis, the U.S. economy gradually recovered, supported by government stimulus and a rebounding tech sector. Unemployment dropped steadily, and the stock market soared, benefiting from innovations in automation, cloud computing, and artificial intelligence.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    Meanwhile, <strong>social movements</strong> gained momentum. The <strong>Black Lives Matter</strong> movement emerged in 2013 in response to police violence against African Americans, while <strong>LGBTQ+ rights</strong> advanced with the 2015 <strong>Supreme Court ruling legalizing same-sex marriage</strong> nationwide. Discussions around gender, race, and inequality became central to the national discourse, amplified by the reach of social media.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    Technology played a defining role during this era. The widespread adoption of smartphones, social media platforms like <strong>Twitter</strong> and <strong>Instagram</strong>, and the rise of <strong>streaming services</strong> such as Netflix revolutionized how Americans communicated and consumed content. At the same time, concerns grew over <strong>data privacy</strong>, <strong>online misinformation</strong>, and the power of tech giants like Google, Facebook, Amazon, and Apple.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    Politically, the country experienced deepening <strong>partisan divides</strong>. The rise of the <strong>Tea Party movement</strong> influenced conservative politics, while progressives pushed for climate action and healthcare reform. The 2016 election of <strong>Donald Trump</strong>, a businessman and political outsider, shocked the political establishment. His presidency sparked intense national debates over immigration, nationalism, media credibility, and America's role in the world.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    On the international stage, the U.S. re-evaluated its commitments. The Trump administration withdrew from several global agreements, including the <strong>Paris Climate Accord</strong> and the <strong>Iran nuclear deal</strong>, and engaged in trade conflicts, particularly with China. These moves signaled a shift toward economic nationalism and a more unilateral approach to foreign policy.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    Innovation surged as the U.S. led advances in <strong>space exploration</strong> (e.g., SpaceX), <strong>renewable energy</strong>, and <strong>biotechnology</strong>. At the same time, underlying societal tensions simmered—income inequality grew, rural and urban divides widened, and trust in institutions declined.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    The decade ended with the emergence of a global threat: the <strong>COVID-19 pandemic</strong>, which began in late 2019 and accelerated in early 2020. It would bring the nation into its next profound crisis, testing both its resilience and unity.
	  </p>
	  <p style={{ marginTop: '2em', textAlign: 'center', }}>
	    <strong>___END___</strong>
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
	  	<Link to={articleLinks.discovery_history_of_america_part_11.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>
	    <div className="next-chapter-container">
	  	<Link className="next-chapter-link">
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
