import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../../layouts/ArticleLayout';
import '../../../styles/RelatedArtical.css';
import { articleLinks } from '../../../generic/articleLinks';

export default function HistoryOfAmerica_Part_07() {
  return (
    <ArticleLayout>
      <article className="article">
	  <h2 style={{ fontSize: '1.5em', marginTop: '2em' }}>
	    History of America - Part 07: The Cold War and Civil Rights Era (1950–1970)
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
	  	<Link to={articleLinks.discovery_history_of_america_part_06.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>
	    <div className="next-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_08.to} className="next-chapter-link">
	  	  Next Chapter ➡️
	  	</Link>
	    </div>
	  </div>

	  <p style={{ marginTop: '1em' }}>
	  After World War II, tensions between the United States and the Soviet Union intensified, giving rise to the Cold War — a period of geopolitical rivalry that would shape global politics for decades. Though the two superpowers avoided direct military conflict, they competed in an arms race, a space race, and influence over developing nations through proxy wars and diplomacy.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  The early 1950s were marked by fears of communist infiltration. Senator Joseph McCarthy led investigations into alleged communist sympathizers, resulting in widespread paranoia and the violation of civil liberties in what became known as McCarthyism. At the same time, the Korean War (1950–1953) was the first major military conflict of the Cold War, with the U.S. supporting South Korea against the communist North, backed by China and the USSR.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  Meanwhile, domestic life in the U.S. saw unprecedented economic growth. Suburbanization expanded rapidly, fueled by the GI Bill, car culture, and consumerism. However, the prosperity of the postwar period was not equally shared. Racial segregation remained deeply entrenched, particularly in the South, prompting a growing movement for civil rights.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  The Civil Rights Movement gained momentum in the 1950s, beginning with events such as the 1954 Supreme Court ruling in <i>Brown v. Board of Education</i>, which declared segregated schools unconstitutional. In 1955, Rosa Parks’ refusal to give up her bus seat sparked the Montgomery Bus Boycott, led by a young Martin Luther King Jr. Peaceful protests, marches, and sit-ins became hallmarks of the movement.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  By the 1960s, the struggle intensified. The 1963 March on Washington, where King delivered his iconic “I Have a Dream” speech, galvanized national attention. Landmark legislation followed: the Civil Rights Act of 1964 banned discrimination based on race, religion, or gender; the Voting Rights Act of 1965 ensured federal protection for Black voters, especially in the South.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  This decade also saw the escalation of the Vietnam War, a Cold War conflict that deeply divided American society. Initially backed by broad political support, the war became increasingly unpopular as U.S. casualties mounted and television brought images of the conflict into American living rooms. By the late 1960s, anti-war protests surged alongside continued civil rights activism, feminism, and calls for social change.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  The assassination of key leaders — John F. Kennedy (1963), Martin Luther King Jr. (1968), and Robert F. Kennedy (1968) — shocked the nation and intensified a sense of turmoil. By 1970, the U.S. was a nation transformed: politically powerful, economically dominant, but deeply conflicted over issues of race, war, and identity.
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
	  	<Link to={articleLinks.discovery_history_of_america_part_06.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>
	    <div className="next-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_08.to} className="next-chapter-link">
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
