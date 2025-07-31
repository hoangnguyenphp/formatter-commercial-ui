// src/components/LeftSidebarMenu.jsx
import React from 'react';

import { Link } from 'react-router-dom';
import '../styles/ArticalLeftSidebarMenu.css';
import { scrollToTop, scrollToBottom } from '../utils/scrollUtils';
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
		      <li><Link to="/topics/html-css" title="HTML & CSS">Java</Link></li>
		      <li><Link to="/topics/devops" title="DevOps">Microservice</Link></li>
		      <li><Link to="/topics/ai" title="AI & Machine Learning">AI & Machine Learning</Link></li>
		      <li><Link to="/topics/javascript" title="JavaScript">Joking 🤣</Link></li>
		      <li><Link to="/topics/java" title="Java">Discovery</Link></li>
		    </ul>
		  </div>
		  <div style={{flexDirection: 'column', gap: '0.5rem' }}>
			  <button onClick={scrollToTop} style={btnStyle}>⬆ Top</button>
			  <button onClick={scrollToBottom} style={btnStyle}>⬇ Bottom</button>
		  </div>
		</aside>

	);
}
