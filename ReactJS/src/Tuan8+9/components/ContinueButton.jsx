import React from 'react';

const ContinueButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#FA4A7D',
        color: '#ffffff',
        width: '100%',
        padding: '14px 0',
        borderRadius: '8px',
        border: 'none',
        fontSize: '15px',
        fontWeight: '600',
        cursor: 'pointer',
        marginTop: '20px',
        transition: 'opacity 0.2s'
      }}
      onMouseOver={(e) => e.target.style.opacity = 0.8}
      onMouseOut={(e) => e.target.style.opacity = 1}
    >
      Continue
    </button>
  );
};

export default ContinueButton;