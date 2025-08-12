import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../../../layouts/ArticleLayout';
import '../../../../styles/RelatedArtical.css';
import { articleLinks } from '../../../../generic/articleLinks';

export default function HistoryOfAmerica_Part_09() {
  return (
    <ArticleLayout>
      <article className="article">
	  <h2 style={{ fontSize: '1.5em', marginTop: '2em' }}>
	    History of America - Part 09: The Reagan Era and the End of the Cold War (1980–1991)
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
	  	<Link to={articleLinks.discovery_history_of_america_part_08.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>
	    <div className="next-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_10.to} className="next-chapter-link">
	  	  Next Chapter ➡️
	  	</Link>
	    </div>
	  </div>
	  
	  <p style={{ marginTop: '1em' }}>
	    The 1980s marked a transformative chapter in American history, dominated by the presidency of <strong>Ronald Reagan</strong> and culminating in the <strong>end of the Cold War</strong>—an ideological and geopolitical struggle that had defined global politics for over four decades.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    Ronald Reagan entered office in 1981 with a bold vision to <strong>restore American confidence</strong>, <strong>reinvigorate the economy</strong>, and <strong>challenge Soviet communism</strong>. His presidency ushered in a period of <strong>conservative resurgence</strong>, marked by policies known as <strong>Reaganomics</strong>, which included significant tax cuts, deregulation of industries, and reductions in social spending. These policies aimed to stimulate economic growth by empowering private enterprise and curbing the perceived excesses of government intervention. While critics argued they deepened income inequality and deficits, the economy did experience a period of expansion in the mid-to-late 1980s.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    On the world stage, Reagan adopted a <strong>hardline stance against the Soviet Union</strong>, famously labeling it the "Evil Empire." He increased defense spending dramatically, launching ambitious programs like the <strong>Strategic Defense Initiative (SDI)</strong>—a proposed missile defense system that symbolized America's technological ambitions. The pressure of this military buildup, coupled with internal economic stagnation within the USSR, forced Soviet leaders to reconsider their posture.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    In 1985, <strong>Mikhail Gorbachev</strong> came to power in the Soviet Union, introducing the reformist policies of <strong>glasnost</strong> (openness) and <strong>perestroika</strong> (restructuring). Reagan and Gorbachev developed a cautious but impactful diplomatic relationship, leading to several <strong>arms control agreements</strong>, including the landmark <strong>Intermediate-Range Nuclear Forces (INF) Treaty</strong> in 1987. These agreements marked the beginning of a de-escalation of Cold War tensions.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    At home, Reagan’s administration also saw challenges. The <strong>Iran-Contra scandal</strong>, in which senior officials secretly facilitated arms sales to Iran and diverted the proceeds to fund Contra rebels in Nicaragua (against Congress’s explicit ban), damaged the administration’s credibility but did not derail Reagan’s popularity or the broader conservative movement.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    The decade ended with a cascade of events that signaled the <strong>collapse of the Soviet Bloc</strong>: the fall of the Berlin Wall in 1989, revolutions in Eastern Europe, and ultimately the <strong>dissolution of the Soviet Union</strong> in 1991 under President George H. W. Bush. While multiple factors contributed to the end of the Cold War, Reagan’s strategic mix of <strong>military pressure, ideological resolve, and eventual diplomacy</strong> played a central role.
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
	  	<Link to={articleLinks.discovery_history_of_america_part_08.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>
	    <div className="next-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_10.to} className="next-chapter-link">
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
