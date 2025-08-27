// src/components/LeftSidebarMenu.jsx
import React from 'react';

import { Link } from 'react-router-dom';
import '../styles/AdminLeftSidebarMenu.css';
import { scrollToTop, scrollToBottom } from '../utils/scrollUtils';
import { topicLinks } from '../generic/topicLinks';
import GoTopBottomButtons from './GoTopBottomButtons';


export default function AdminLeftSidebarMenu() {
	
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
		<aside className="admin-sidebar-left">
		  <div className="admin-sidebar-section topics">
		    <h3>📚 Menu</h3>
		    <ul>
		      <li><Link to='/admin/9c2d9d8c-26d1-4b02-8f12-7b18b7c6f693/artical-creation' title='Application Creation'>Application Creation</Link></li>
		    </ul>
		  </div>
		  <div style={{flexDirection: 'column', gap: '0.5rem' }}>
			  <button onClick={scrollToTop} style={btnStyle}>⬆ Top</button>
			  <button onClick={scrollToBottom} style={btnStyle}>⬇ Bottom</button>
		  </div>
		</aside>

	);
}
