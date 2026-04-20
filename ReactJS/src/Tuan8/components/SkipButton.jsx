import React from 'react';

const SkipButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'transparent',
        color: '#FA4A7D',
        width: '100%',
        padding: '10px 0',
        border: 'none',
        fontSize: '14px',
        cursor: 'pointer',
        marginTop: '8px',
        fontWeight: '500'
      }}
      onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
      onMouseOut={(e) => e.target.style.textDecoration = 'none'}
    >
      Skip
    </button>
  );
};

export default SkipButton;