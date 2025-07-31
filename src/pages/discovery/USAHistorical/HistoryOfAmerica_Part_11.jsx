import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../../layouts/ArticleLayout';
import '../../../styles/RelatedArtical.css';
import { articleLinks } from '../../../generic/articleLinks';

export default function HistoryOfAmerica_Part_11() {
  return (
    <ArticleLayout>
      <article className="article">
	  <h2 style={{ fontSize: '1.5em', marginTop: '2em' }}>
	    History of America - Part 11: The War on Terror and the Digital Revolution (2001–2010)
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
	  	<Link to={articleLinks.discovery_history_of_america_part_10.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>
	    <div className="next-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_12.to} className="next-chapter-link">
	  	  Next Chapter ➡️
	  	</Link>
	    </div>
	  </div>
	  
	  <p style={{ marginTop: '1em' }}>
	    The first decade of the 21st century began with a seismic shock: the <strong>September 11, 2001 terrorist attacks</strong> on the World Trade Center and the Pentagon. These coordinated attacks, carried out by the extremist group <strong>al-Qaeda</strong>, killed nearly 3,000 people and marked a turning point in American history. They triggered the launch of the <strong>“War on Terror”</strong>, a global campaign led by the United States to dismantle terrorist networks and prevent future attacks.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    In response, the U.S. invaded <strong>Afghanistan</strong> in late 2001 to remove the Taliban regime that had harbored al-Qaeda leader Osama bin Laden. In 2003, the U.S. launched a controversial invasion of <strong>Iraq</strong> under President <strong>George W. Bush</strong>, citing the threat of weapons of mass destruction (WMDs), though none were ultimately found. These wars reshaped American foreign policy and military priorities for the next two decades, with high costs in lives, finances, and geopolitical influence.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    Domestically, the U.S. underwent sweeping changes in national security. The <strong>Department of Homeland Security</strong> was established, and laws like the <strong>Patriot Act</strong> expanded government surveillance powers. Airport security, intelligence coordination, and military spending all increased dramatically.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    Meanwhile, the 2000s witnessed a second revolution—<strong>the explosion of digital technology</strong>. The decade saw the rise of broadband internet, smartphones, and social media platforms like <strong>Facebook (2004)</strong> and <strong>YouTube (2005)</strong>, reshaping communication, culture, and commerce. Companies like <strong>Apple, Google, and Amazon</strong> became central to the global economy, driving U.S. dominance in the tech sector.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    Despite the wars and growing security concerns, the U.S. economy continued to expand through much of the decade, powered by real estate and finance. However, this growth proved unsustainable. In 2008, the <strong>global financial crisis</strong> struck, triggered by a housing bubble collapse and failures in major financial institutions. The U.S. entered a deep recession, leading to massive job losses, bank bailouts, and a major shift in economic policy.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    In 2008, <strong>Barack Obama</strong> was elected the first African American president in U.S. history, a historic moment symbolizing progress in civil rights. Obama inherited the financial crisis and focused on economic recovery, including stimulus spending and financial reforms. His election also signaled a generational shift, as younger voters and digital campaigning played a key role.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    By 2010, the U.S. was engaged in two prolonged wars, facing economic uncertainty, and navigating a rapidly evolving digital world. Yet the resilience of its institutions, the innovative power of its tech industry, and its continued global leadership position all pointed to its unique ability to adapt in the face of change.
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
	  	<Link to={articleLinks.discovery_history_of_america_part_10.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>
	    <div className="next-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_12.to} className="next-chapter-link">
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
