import React from 'react';
import NextButton from './NextButton';
import SkipButton from './SkipButton';
import foodImage from '../assets/visily-image-93.png'; 

const DiscoverChefify = () => {
  return (
    <div style={styles.overlay}>
      <div style={styles.modalContainer}>
        {/* Nút Close (X) góc phải trên */}
        <button style={styles.closeButton}>✕</button>

        {/* Tiêu đề & Mô tả */}
        <h1 style={styles.title}>Discover Chefify</h1>
        <p style={styles.subtitle}>
          Easy and delicious cooking instructions right here. Start exploring now!
        </p>

        {/* Khung chứa ảnh */}
        <div style={styles.imageWrapper}>
          <img src={foodImage} alt="Delicious foods" style={styles.image} />
        </div>

        {/* Pagination Dots (Dấu chấm chuyển slide) */}
        <div style={styles.dotsContainer}>
          <div style={{ ...styles.dot, backgroundColor: '#FA4A7D' }}></div>
          <div style={styles.dot}></div>
          <div style={styles.dot}></div>
        </div>

        {/* Khu vực chứa 2 nút actions */}
        <div style={styles.actionsWrapper}>
          <NextButton onClick={() => console.log('Chuyển sang bước tiếp theo')} />
          <SkipButton onClick={() => console.log('Bỏ qua Onboarding')} />
        </div>
      </div>
    </div>
  );
};

// Khai báo Style
const styles = {
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5', // Màu nền ngoài cùng
    padding: '20px'
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: '550px', // Giới hạn chiều rộng giống form popup trong ảnh
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    textAlign: 'center',
    fontFamily: '"Inter", "Segoe UI", sans-serif' // Font chữ cơ bản
  },
  closeButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    color: '#333',
    cursor: 'pointer'
  },
  title: {
    color: '#FA4A7D', 
    fontSize: '28px',
    fontWeight: '800',
    marginTop: '15px',
    marginBottom: '10px'
  },
  subtitle: {
    color: '#6b7280',
    fontSize: '14px',
    marginBottom: '25px',
    lineHeight: '1.5',
    padding: '0 10%'
  },
  imageWrapper: {
    width: '100%',
    height: '260px', 
    borderRadius: '12px',
    overflow: 'hidden',
    marginBottom: '24px'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' // Giúp ảnh tự động cắt cân đối không bị méo
  },
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '10px'
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#e5e7eb' // Màu xám nhạt cho các dot chưa active
  },
  actionsWrapper: {
    padding: '0 15%' // Thu gọn chiều ngang của nút giống trong ảnh
  }
};

export default DiscoverChefify;