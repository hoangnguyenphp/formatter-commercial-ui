import React from 'react';
import { scrollToTop, scrollToBottom } from '../utils/scrollUtils';

const GoTopBottomButtons = () => {
  return (
    <div style={{ position: 'fixed', gap: '0.5rem' }}>
      <button onClick={scrollToTop} style={btnStyle}>⬆ Top</button>
      <button onClick={scrollToBottom} style={btnStyle}>⬇ Bottom</button>
    </div>
  );
};

const btnStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default GoTopBottomButtons;
