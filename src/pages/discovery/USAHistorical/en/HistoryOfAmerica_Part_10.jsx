import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../../../layouts/ArticleLayout';
import '../../../../styles/RelatedArtical.css';
import { articleLinks } from '../../../../generic/articleLinks';

export default function HistoryOfAmerica_Part_10() {
  return (
    <ArticleLayout>
      <article className="article">
	  <h2 style={{ fontSize: '1.5em', marginTop: '2em' }}>
	    History of America - Part 10: The Post–Cold War Era and Globalization (1991–2001)
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
	  	<Link to={articleLinks.discovery_history_of_america_part_09.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>
	    <div className="next-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_11.to} className="next-chapter-link">
	  	  Next Chapter ➡️
	  	</Link>
	    </div>
	  </div>
	  
	  <p style={{ marginTop: '1em' }}>
	    The end of the Cold War in 1991 ushered in a new era of American dominance in global affairs, as the United States emerged as the <strong>world’s sole superpower</strong>. This period, defined by relative geopolitical stability and rapid technological change, became a critical time of <strong>economic expansion, globalization, and digital transformation</strong>.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    Under President <strong>George H. W. Bush</strong>, the U.S. led a multinational coalition during the <strong>Gulf War</strong> in 1991 to expel Iraqi forces from Kuwait, demonstrating its military strength and its leadership role in the post-Cold War world order. The successful operation reinforced confidence in American power, but also signaled the complexities of Middle Eastern geopolitics that would persist into the 21st century.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    The 1990s were characterized by <strong>unprecedented economic growth</strong>, low unemployment, and technological innovation. Much of this success was driven by the rapid expansion of the <strong>internet and information technology</strong>. The rise of companies like Microsoft, Intel, and later Amazon and Google helped make the U.S. the global leader in the digital economy. A booming stock market, particularly in tech sectors, fueled what became known as the <strong>dot-com bubble</strong>.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    The presidency of <strong>Bill Clinton</strong> (1993–2001) focused on centrist domestic policies, budget surpluses, welfare reform, and expanded international trade. Major trade agreements like <strong>NAFTA (North American Free Trade Agreement)</strong> were signed to deepen economic ties with neighboring countries. However, globalization also led to concerns over job outsourcing and growing inequality—debates that continue today.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    Internationally, the U.S. engaged in peacekeeping and conflict resolution, including in the Balkans (Bosnia and Kosovo), Haiti, and the Middle East. At the same time, terrorism began to emerge as a new threat, marked by events like the <strong>1993 World Trade Center bombing</strong> and the 1998 <strong>U.S. embassy bombings in Kenya and Tanzania</strong> by al-Qaeda.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    The decade also saw cultural shifts, with increasing social liberalization, growing racial and gender equality, and debates over technology's role in privacy and society. The impeachment of President Clinton in 1998 over the Monica Lewinsky scandal highlighted deep political divisions but did not derail the broader economic boom.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    By 2001, the United States stood at the peak of its global influence—economically, militarily, and culturally. However, challenges loomed beneath the surface: <strong>economic bubbles, unresolved geopolitical tensions, and a growing threat from international terrorism</strong>. The events that would unfold in the following years would dramatically reshape both America’s role in the world and its domestic priorities.
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
	  	<Link to={articleLinks.discovery_history_of_america_part_09.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>
	    <div className="next-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_11.to} className="next-chapter-link">
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
