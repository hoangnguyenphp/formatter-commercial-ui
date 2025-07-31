import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../../layouts/ArticleLayout';
import '../../../styles/RelatedArtical.css';
import { articleLinks } from '../../../generic/articleLinks';

export default function HistoryOfAmerica_Part_03() {
  return (
    <ArticleLayout>
      <article className="article">
	  <h2 style={{ fontSize: '1.5em', marginTop: '2em' }}>History of America - Part 03: Civil War and Reconstruction (1861–1877)</h2>
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
	  	<Link to={articleLinks.discovery_history_of_america_part_02.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>

	    <div className="next-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_04.to} className="next-chapter-link">
	  	  Next Chapter ➡️
	  	</Link>
	    </div>
	  </div>
	  
	  <p style={{ marginTop: '1em' }}>
	  By 1861, the United States was no longer united. After decades of mounting tensions over slavery, states’ rights, and economic differences between the North and South, the election of Abraham Lincoln sparked the secession of eleven Southern states, forming the Confederate States of America.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  The Civil War, lasting from 1861 to 1865, was the deadliest conflict on American soil, claiming over 600,000 lives. Early battles such as Bull Run showed the war would not be short. The Union, under Lincoln, fought to preserve the nation; the Confederacy, under Jefferson Davis, fought for independence and the preservation of slavery.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  Military strategies and technologies evolved rapidly. Ironclad ships, railroads, and the telegraph reshaped warfare. Key Union victories at Antietam, Gettysburg, and Vicksburg turned the tide. Lincoln’s Emancipation Proclamation in 1863 redefined the war — not just as a struggle to save the Union, but also to end slavery.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  In April 1865, General Robert E. Lee surrendered to General Ulysses S. Grant at Appomattox Court House, effectively ending the war. Just days later, President Lincoln was assassinated, casting a shadow over the nation’s fragile hopes for unity.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  The postwar period, known as Reconstruction, sought to rebuild the South and integrate millions of newly freed African Americans into American society. The 13th, 14th, and 15th Amendments abolished slavery, granted citizenship, and protected voting rights for Black men.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  But Reconstruction faced fierce opposition. Southern states implemented Black Codes to restrict freedoms, and white supremacist groups like the Ku Klux Klan used terror to enforce racial hierarchies. Despite federal efforts, including the presence of Union troops, systemic racism and economic inequality persisted.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  By 1877, federal troops withdrew from the South as part of a political compromise, effectively ending Reconstruction. Many of its promises remained unfulfilled, and a century of segregation and disenfranchisement would follow.
	  </p>

	  <p style={{ marginTop: '1em' }}>
	  Still, the Civil War and Reconstruction reshaped the nation permanently. Slavery was abolished, citizenship redefined, and the power of the federal government strengthened. The next challenge would be transforming a war-torn, divided country into a unified modern nation.
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
	  	<Link to={articleLinks.discovery_history_of_america_part_02.to} className="prev-chapter-link">
	  	  ⬅️ Previous Chapter
	  	</Link>
	    </div>

	    <div className="next-chapter-container">
	  	<Link to={articleLinks.discovery_history_of_america_part_04.to} className="next-chapter-link">
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
