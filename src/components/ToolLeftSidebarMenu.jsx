// src/components/LeftSidebarMenu.jsx
import React from 'react';
import '../styles/ToolLeftSidebarMenu.css';
import { articleLinks } from '../generic/articleLinks'

import { Link } from 'react-router-dom';

export default function ToolLeftSidebarMenu() {
	
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
	    <li><Link to={articleLinks.discovery_history_of_america_part_02.to} title={articleLinks.discovery_history_of_america_part_02.title}>{articleLinks.discovery_history_of_america_part_02.title}</Link></li>
	    <li><Link to={articleLinks.discovery_history_of_america_part_03.to} title={articleLinks.discovery_history_of_america_part_03.title}>{articleLinks.discovery_history_of_america_part_03.title}</Link></li>
	    <li><Link to={articleLinks.discovery_history_of_america_part_04.to} title={articleLinks.discovery_history_of_america_part_04.title}>{articleLinks.discovery_history_of_america_part_04.title}</Link></li>
	    <li><Link to={articleLinks.discovery_history_of_america_part_05.to} title={articleLinks.discovery_history_of_america_part_05.title}>{articleLinks.discovery_history_of_america_part_05.title}</Link></li>
	    <li><Link to={articleLinks.discovery_history_of_america_part_06.to} title={articleLinks.discovery_history_of_america_part_06.title}>{articleLinks.discovery_history_of_america_part_06.title}</Link></li>
	  </ul>
	  </div>
	  <div className="sidebar-section joking-section">
	    <h3>🤣 Joking</h3>
	    <ul>
	      <li>
	        <Link to="/jokes/funny-programmer-joke-1" title="Why do programmers prefer dark mode? Because light attracts bugs!">
	          {truncate("Why do programmers prefer dark mode? Because light attracts bugs!")}
	        </Link>
	      </li>
	      <li>
	        <Link to="/jokes/recursion-joke" title="To understand recursion, you must first understand recursion.">
	          {truncate("To understand recursion, you must first understand recursion.")}
	        </Link>
	      </li>
	      <li>
	        <Link to="/jokes/debugging-nightmare" title="Debugging: Removing the needles from the haystack.">
	          {truncate("Debugging: Removing the needles from the haystack.")}
	        </Link>
	      </li>
	      <li>
	        <Link to="/jokes/404-joke" title="I told a joke about a 404 error... but it wasn't found.">
	          {truncate("I told a joke about a 404 error... but it wasn't found.")}
	        </Link>
	      </li>
	      <li>
	        <Link to="/jokes/dev-life" title="I don't always test my code, but when I do, I do it in production.">
	          {truncate("I don't always test my code, but when I do, I do it in production.")}
	        </Link>
	      </li>
	    </ul>
	  </div>

	</aside>
	);
}
