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
	      <li><Link to={articleLinks.joking_part_01.to} title={articleLinks.joking_part_01.title}>{articleLinks.joking_part_01.title}</Link></li>
	    </ul>
	  </div>

	</aside>
	);
}
