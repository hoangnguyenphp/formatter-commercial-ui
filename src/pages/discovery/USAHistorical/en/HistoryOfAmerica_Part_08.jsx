import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../../../layouts/ArticleLayout';
import '../../../../styles/RelatedArtical.css';
import { articleLinks } from '../../../../generic/articleLinks';

export default function HistoryOfAmerica_Part_08() {
  return (
    <ArticleLayout>
      <article className="article">
	  <h2 style={{ fontSize: '1.5em', marginTop: '2em' }}>
	    History of America - Part 08: Vietnam, Watergate, and Economic Challenges (1970–1980)
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
	  	<Link to={articleLinks.discovery_history_of_america_part_07.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>
	    <div className="next-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_09.to} className="next-chapter-link">
	  	  Next Chapter ➡️
	  	</Link>
	    </div>
	  </div>
	  
	  <p style={{ marginTop: '1em' }}>
	  The 1970s marked a turbulent decade for the United States, defined by the ongoing conflict in Vietnam, a political scandal that shook the core of American democracy, and significant economic troubles. It was a time of disillusionment, introspection, and change — both domestically and globally.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  At the start of the decade, the Vietnam War continued to dominate headlines. Although President Richard Nixon promised “peace with honor,” the war dragged on. His administration expanded the conflict into neighboring Cambodia and Laos, sparking widespread protests, most notably the tragic Kent State shootings in 1970. Public opinion turned sharply against the war.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  In 1973, the Paris Peace Accords led to a ceasefire and the withdrawal of U.S. combat troops. However, fighting continued between North and South Vietnam until 1975, when Saigon fell and the country was unified under communist control. The war left deep scars: over 58,000 Americans were killed, millions of Vietnamese civilians and soldiers died, and returning veterans faced trauma and indifference.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  As the war ended, a new crisis emerged. The Watergate scandal, originating from a 1972 break-in at the Democratic National Committee headquarters and the Nixon administration’s efforts to cover it up, led to a dramatic political unraveling. Investigations revealed abuses of power, illegal wiretapping, and a culture of corruption. In 1974, facing almost certain impeachment, Nixon became the first U.S. president to resign.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  This political turmoil was mirrored by economic instability. The 1973 oil embargo, imposed by OPEC in response to U.S. support for Israel during the Yom Kippur War, led to gas shortages, long lines at pumps, and skyrocketing energy prices. The nation entered a period of “stagflation” — a combination of stagnant economic growth and high inflation — which challenged traditional economic policies.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  President Gerald Ford, who succeeded Nixon, struggled to restore trust and revive the economy. His “Whip Inflation Now” campaign met with limited success. In 1976, Democrat Jimmy Carter was elected on promises of honesty and reform. Yet his presidency was marred by economic woes, rising unemployment, and a growing energy crisis. Carter’s foreign policy achievements, including the Camp David Accords between Egypt and Israel, were overshadowed by the 1979 Iranian Revolution and the subsequent hostage crisis at the U.S. embassy in Tehran.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  By the end of the 1970s, Americans faced a sense of national malaise. The decade had tested the country’s institutions and confidence. But it also set the stage for political realignment and a new era of conservatism that would emerge in the following decade under Ronald Reagan.
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
	  	<Link to={articleLinks.discovery_history_of_america_part_07.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>
	    <div className="next-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_09.to} className="next-chapter-link">
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
