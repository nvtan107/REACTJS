import React from 'react';

const SocialButton = ({ icon, text, textColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#f3f4f6', // Màu nền xám nhạt
        color: textColor,
        width: '100%',
        padding: '12px 0',
        marginBottom: '10px',
        borderRadius: '8px',
        border: 'none',
        fontSize: '14px',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.2s'
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
    >
      {/* Icon hiển thị ở đây */}
      <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{icon}</span>
      <span>{text}</span>
    </button>
  );
};

export default SocialButton;