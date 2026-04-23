import React from 'react';

const NextButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#FA4A7D', // Màu hồng giống ảnh gốc
        color: '#ffffff',
        width: '100%',
        padding: '12px 0',
        borderRadius: '8px',
        border: 'none',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        marginTop: '20px',
        transition: 'opacity 0.2s'
      }}
      onMouseOver={(e) => e.target.style.opacity = 0.8}
      onMouseOut={(e) => e.target.style.opacity = 1}
    >
      Next
    </button>
  );
};

export default NextButton;