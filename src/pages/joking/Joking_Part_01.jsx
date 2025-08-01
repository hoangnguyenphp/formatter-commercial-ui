import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../layouts/ArticleLayout';
import '../../styles/RelatedArtical.css';
import { articleLinks } from '../../generic/articleLinks';

export default function Joking_Part_01() {
  return (
    <ArticleLayout>
      <article className="article">
	  <h1 style={{ fontSize: '1.2em', marginBottom: '1.5em', textAlign: 'center' }}>Programmer Jokes - Part 01</h1>
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
	    🗓️ Published on Agust 01, 2025
	  </p>
	  <p style={{ marginTop: '1em' }}>
	    <strong style={{ fontStyle: 'italic' }}>Debugging</strong> <br />
	    Being the detective in a crime movie — where you're also the murderer. 🔪🧑‍💻
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    <strong style={{ fontStyle: 'italic' }}>Why do programmers prefer dark mode?</strong> <br />
	    Because light attracts bugs. 🪲💡
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    <strong style={{ fontStyle: 'italic' }}>How many programmers does it take to change a light bulb?</strong> <br />
	    None — that’s a hardware problem. 🧯
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    <strong style={{ fontStyle: 'italic' }}>Why do Java developers wear glasses?</strong> <br />
	    Because they don’t C#. 👓
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    <strong style={{ fontStyle: 'italic' }}>A SQL query walks into a bar...</strong> <br />
	    He walks up to two tables and asks: "Can I join you?" 🍻
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    <strong style={{ fontStyle: 'italic' }}>I had a problem, so I used regex.</strong> <br />
	    Now I have two problems. 😩🔍
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    <strong style={{ fontStyle: 'italic' }}>Why did the developer go broke?</strong> <br />
	    Because he used up all his cache. 💸🧠
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    <strong style={{ fontStyle: 'italic' }}>What’s a programmer’s favorite hangout place?</strong> <br />
	    The Foo Bar. 🍸
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    <strong style={{ fontStyle: 'italic' }}>Why was the JavaScript developer sad?</strong> <br />
	    Because he didn’t null his feelings. 😢
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    <strong style={{ fontStyle: 'italic' }}>What’s the object-oriented way to become wealthy?</strong> <br />
	    Inheritance. 🏡💰
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    <strong style={{ fontStyle: 'italic' }}>Why can't computers take their hats off?</strong> <br />
	    Because they have CAPS LOCK on. 🧢
	  </p>

	  <p style={{ marginTop: '1em' }}>
	    <strong style={{ fontStyle: 'italic' }}>Knock knock.</strong> <br />
	    Who’s there? [Very long pause] ...Java. ☕⏳
	  </p>
	  {/* 📚 Source Reference */}
	  <div className="artical-source-reference">
	    <strong>Source:</strong>{' '}Internet
	  </div>
      </article>

      {/* 👉 Related Articles Section */}
      <div className="related-content-box ">
        <h3>🔗 Related Articles</h3>
        <ul>
			<li>
			  <Link to={articleLinks.joking_part_01.to}>{articleLinks.joking_part_01.title}</Link>
			</li>
        </ul>
      </div>
    </ArticleLayout>
  );
}
