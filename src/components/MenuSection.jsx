// src/components/MenuSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuSection({ title, items }) {
  const truncate = (text, max = 30) =>
    text.length > max ? text.slice(0, max - 3) + '...' : text;

  return (
    <div className="sidebar-section">
      <h3>{title}</h3>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item.type === 'link' ? (
              <Link to={item.href} title={item.label}>
                {truncate(item.label)}
              </Link>
            ) : (
              <a href={item.href} title={item.label}>
                {truncate(item.label)}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
