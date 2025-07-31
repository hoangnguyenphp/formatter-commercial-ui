import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../../layouts/ArticleLayout';
import '../../../styles/RelatedArtical.css';
import { articleLinks } from '../../../generic/articleLinks';

export default function HistoryOfAmerica_Part_02() {
  return (
    <ArticleLayout>
      <article className="article">
	  <h2 style={{ fontSize: '1.5em', marginTop: '2em' }}>History of America - Part 02: Expansion and Industrial Growth (1790–1860)</h2>
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
	  	<Link to={articleLinks.discovery_history_of_america_part_01.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>

	    <div className="next-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_03.to} className="next-chapter-link">
	  	  Next Chapter ➡️
	  	</Link>
	    </div>
	  </div>
	  
	  <p style={{ marginTop: '1em' }}>
	  As the ink dried on the U.S. Constitution and George Washington took office as the first president in 1789, the fledgling republic stood on the edge of enormous potential. Thirteen states hugged the eastern seaboard, but the promise of land, prosperity, and self-rule stretched far beyond the Appalachians.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  The 1790s and early 1800s marked an era of growth fueled by visionaries, inventors, and frontier settlers. Thomas Jefferson’s Louisiana Purchase in 1803 doubled the nation's size overnight, unlocking vast new territory for exploration, farming, and — controversially — slavery. The Lewis and Clark Expedition (1804–1806) charted this new frontier and stoked the imagination of a people destined to expand.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  Economically, America was transforming. The Industrial Revolution, beginning in Britain, crossed the Atlantic. Water-powered textile mills sprouted in New England. The invention of the cotton gin by Eli Whitney in 1793 supercharged cotton production — and tragically, expanded the demand for enslaved labor in the South.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  Meanwhile, transportation innovations stitched the country together. Roads like the National Road, canals like the Erie Canal (completed in 1825), and steam-powered boats turned a scattered landscape into a connected economy. By the 1830s, railroads began to crisscross the nation, reducing travel times from weeks to days.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  Politically, the period was tumultuous. The young democracy grappled with its identity. Andrew Jackson’s presidency (1829–1837) expanded suffrage for white men and symbolized a shift toward populist politics, even as his policies — like the Indian Removal Act — inflicted deep suffering, especially with the Trail of Tears.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  Social reform movements gained momentum. Abolitionists like William Lloyd Garrison and Frederick Douglass gave powerful voices to the cause of ending slavery. Women’s rights advocates like Elizabeth Cady Stanton began planting seeds of a new vision for gender equality. Education and temperance movements swept across towns and cities.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  But tension simmered beneath the surface. The expanding western territories raised an explosive question: would new states be free or slave-holding? The Missouri Compromise of 1820 temporarily calmed the storm, but divisions were growing deeper.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  By 1860, America was unrecognizable from its revolutionary beginnings. It had grown in population, territory, and industrial might. Cities buzzed with machines, immigrants poured in from Europe, and farmland pushed to the Pacific. But the country was also deeply divided — morally, economically, and politically — on the question of slavery.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  The coming years would test the Union like never before, and the next chapter would be written not by expansion — but by conflict.
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
	  	<Link to={articleLinks.discovery_history_of_america_part_01.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>

	    <div className="next-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_03.to} className="next-chapter-link">
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
