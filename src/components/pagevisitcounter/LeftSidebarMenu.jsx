// src/components/LeftSidebarMenu.jsx
import React from 'react';
import '../styles/LeftSidebarMenu.css';

import { Link } from 'react-router-dom';

export default function LeftSidebarMenu() {
	
	const truncate = (text, max = 30) =>
	  text.length > max ? text.slice(0, max - 3) + '...' : text;
	{/* Sidebar */}
	return (
	<aside className="sidebar-left">
	  <div className="sidebar-section tools">
		<h3>🛠️ Tools</h3>
		<ul>
		  <li><Link to="/">Code Formatter</Link></li>
		</ul>
	  </div>
	  <div className="sidebar-section hot-articles">
	    <h3>🔥 Hot Articles</h3>
	  <ul>
	    <li><Link to="/discovery/USAHistorical/history-america-part-1">History of America - Part 01</Link></li>
	    <li><a href="/articles/verify-xml">Verifying XML Online</a></li>
	    <li><a href="/articles/minify-html">Minify Your HTML</a></li>
	    <li><a href="/articles/beautify-sql">Beautify SQL in One Click</a></li>
	    <li><a href="/articles/json-vs-xml">JSON vs XML: A Comparison</a></li>
	  </ul>
	  </div>
	  <div className="sidebar-section recent-articles">
		<h3>🆕 Recent Articles</h3>
		<ul>
		  <li><Link to="/discovery/USAHistorical/history-america-part-1" title="History of America - Part 01">{truncate("History of America - Part 01")}</Link></li>
		</ul>
	  </div>
	</aside>
	);
}
