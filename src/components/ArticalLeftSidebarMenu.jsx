// src/components/LeftSidebarMenu.jsx
import React from 'react';

import { Link } from 'react-router-dom';
import '../styles/ArticalLeftSidebarMenu.css';
import { scrollToTop, scrollToBottom } from '../utils/scrollUtils';
import { topicLinks } from '../generic/topicLinks';
import GoTopBottomButtons from './GoTopBottomButtons';


export default function ArticalLeftSidebarMenu() {
	
	const truncate = (text, max = 30) =>
	  text.length > max ? text.slice(0, max - 3) + '...' : text;
	const btnStyle = {
	  padding: '10px 1rem',
	  backgroundColor: '#333',
	  color: '#fff',
	  border: 'none',
	  borderRadius: '4px',
	  cursor: 'pointer'
	};
	{/* Sidebar */}
	return (
		<aside className="artical-sidebar-left">
		  <div className="artical-sidebar-section topics">
		    <h3>📚 Topics</h3>
		    <ul>
		      <li><Link to={topicLinks.discovery('discovery').to_value} title={topicLinks.discovery('discovery').title}>{topicLinks.discovery('discovery').title}</Link></li>
		      <li><Link to={topicLinks.joking('joking').to_value} title={topicLinks.joking('joking').title}>{topicLinks.joking('joking').title}</Link></li>
		    </ul>
		  </div>
		  <div style={{flexDirection: 'column', gap: '0.5rem' }}>
			  <button onClick={scrollToTop} style={btnStyle}>⬆ Top</button>
			  <button onClick={scrollToBottom} style={btnStyle}>⬇ Bottom</button>
		  </div>
		</aside>

	);
}
