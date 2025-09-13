import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../../../layouts/ArticleLayout';
import '../../../../styles/RelatedArtical.css';
import { articleLinks } from '../../../../generic/articleLinks';

export default function SerialArticle() {
  return (
    <ArticleLayout>
      <article className="article">
	  <h2 style={{ fontSize: '1.2em', marginBottom: '1.5em' }}>History of America - Part 01 - US The Seeds of a Superpower: America’s Colonial Foundations and Fight for Independence (1607–1789)</h2>
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
	  <div className="chapter-navigation">
	    <div className="prev-chapter-container">
			<Link className="prev-chapter-link">
			  ⬅️ Previous Chapter
			</Link>
	    </div>

	    <div className="next-chapter-container">
			<Link to={articleLinks.discovery_history_of_america_part_02.to} className="next-chapter-link">
			  Next Chapter ➡️
			</Link>
	    </div>
	  </div>
	  <p style={{ marginTop: '1em'}}>
	    In the early 17th century, the continent that would become the United States was a vast, untamed wilderness in the eyes of European settlers.
	    Stretching from the Atlantic to the Appalachians, it was home to diverse Native American nations, ancient forests, and endless rivers.
	    But to the English crown, it was a land of promise — raw, exploitable, and ripe for colonization.
	  </p>

	  <p style={{ marginTop: '1em'}}>
	    In 1607, the Virginia Company sent a band of English adventurers to establish Jamestown, the first permanent English colony in North America.
	    Their goals were simple: search for gold and establish trade routes. But the early years were harsh — disease, famine, and tense relations with
	    local Powhatan tribes nearly wiped the colony out. Survival depended on learning to farm and eventually, to grow tobacco — a crop that would
	    soon transform the colony into a cash-producing machine and establish a pattern of resource-driven expansion.
	  </p>

	  <p style={{ marginTop: '1em'}}>
	    Just over a decade later, in 1620, a different kind of settler arrived. The Pilgrims who landed at Plymouth sought not wealth, but religious freedom.
	    Fleeing persecution in England, they built a compact society governed by shared values, and most famously, by a social contract — the Mayflower Compact —
	    which became an early symbol of self-governance. In their New England towns, democratic ideals were planted in village halls and church meetings.
	  </p>

	  <p style={{ marginTop: '1em'}}>
	    Over the next century, the colonies grew. By 1700, thirteen British colonies stretched along the Atlantic coast. They were politically loyal to the British crown
	    but increasingly economically self-sufficient, trading not only with Britain but with the Caribbean and even other European powers. Ships from Boston and
	    Charleston carried lumber, sugar, rum, and slaves in a transatlantic triangle of commerce.
	  </p>

	  <p style={{ marginTop: '1em'}}>
	    The Southern colonies, flush with cash crops like tobacco and later cotton, relied heavily on slave labor, creating a rigid and violent social order.
	    Meanwhile, Northern colonies evolved differently — focused on trade, manufacturing, and education. In 1636, Harvard College was founded to train ministers
	    but would eventually help nurture a generation of political thinkers.
	  </p>

	  <p style={{ marginTop: '1em'}}>
	    As new generations of colonists were born on American soil, their identity grew increasingly separate from that of their British ancestors.
	    Though they spoke the king’s English, they governed themselves, worked their own lands, and adapted to a new world in ways that London could neither see nor control.
	  </p>

	  <p style={{ marginTop: '1em'}}>
	    Two powerful cultural currents shaped colonial society in the 18th century: the Enlightenment and the Great Awakening.
	  </p>

	  <p style={{ marginTop: '1em'}}>
	    The Enlightenment brought reason, individual rights, and social contract theory into colonial homes and minds.
	    The writings of John Locke, Montesquieu, and others were read widely by colonial elites — especially a new generation of thinkers who would become the Founding Fathers.
	  </p>

	  <p style={{ marginTop: '1em'}}>
	    At the same time, the Great Awakening (1730s–1740s) swept through churches with emotional preaching and calls for personal salvation.
	    It democratized religion, encouraging colonists to question authority — even religious authority — and look inward for truth.
	    These movements helped form a uniquely American belief in both reason and faith, in freedom of conscience, and in challenging unjust power.
	  </p>

	  <p style={{ marginTop: '1em'}}>
	    The colonies remained loyal — if increasingly independent — until 1763, when the British crown began imposing direct taxes to pay off its debts
	    from the French and Indian War. The colonists, who had fought and died alongside British troops, now faced laws like the Stamp Act, Sugar Act,
	    and Townshend Acts — all passed without colonial input. It wasn't just the money; it was the insult: “No taxation without representation.”
	  </p>

	  <p style={{ marginTop: '1em'}}>
	    Tensions exploded in violence: the Boston Massacre in 1770, the Boston Tea Party in 1773. In response, the British Parliament cracked down harder.
	    But the harder they squeezed, the more unified the colonies became. The First Continental Congress met in 1774; a year later, war broke out at Lexington and Concord.
	  </p>

	  <p style={{ marginTop: '1em'}}>
	    In 1776, a 33-year-old Virginian named Thomas Jefferson drafted the Declaration of Independence.
	    With eloquent lines about life, liberty, and the pursuit of happiness, the colonies severed their political ties to Britain.
	    It was more than a declaration of war — it was a manifesto of freedom that would echo across centuries.
	  </p>

	  <p style={{ marginTop: '1em'}}>
	    The war was long, bloody, and uncertain. Yet by 1781, with the help of France and the tenacity of soldiers under George Washington,
	    the British were defeated at Yorktown. Two years later, the Treaty of Paris recognized the United States as an independent nation.
	  </p>

	  <p style={{ marginTop: '1em'}}>
	    But the revolution was not yet complete. Under the Articles of Confederation, the new nation was fragile and nearly paralyzed.
	    There was no national currency, no ability to tax, and no unified legal system. Rebellions like Shays' Rebellion (1786) revealed the deep weaknesses of the post-war system.
	  </p>

	  <p style={{ marginTop: '1em'}}>
	    In 1787, delegates gathered in Philadelphia to do the unthinkable: redesign the government. The result was the U.S. Constitution, ratified in 1789 —
	    a brilliant framework blending Enlightenment ideals with practical governance. It created three branches of government, checks and balances,
	    and a federal structure designed to hold both unity and diversity.
	  </p>

	  <p style={{ marginTop: '1em'}}>
	    By 1789, the United States was still a small, rural country. It had no empire, no navy, and no real industrial base.
	    But it had something more powerful: institutions built for growth, a culture of self-rule, and an ideology of freedom and opportunity.
	    In the soil of those early years, the seeds of a superpower were planted.
	  </p>

	  <p style={{ marginTop: '1em'}}>
	    The journey ahead would be neither easy nor fair — especially for Native Americans, enslaved people, and women — but the core structure was there.
	    A democratic engine had been built. It would soon roar into the 19th century.
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
		  	<Link className="prev-chapter-link">
		  	  ⬅️ Previous Chapter
		  	</Link>
	    </div>
	    <div className="next-chapter-container">
		  	<Link to={articleLinks.discovery_history_of_america_part_02.to} className="next-chapter-link">
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
