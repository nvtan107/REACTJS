import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      
      {/* KHU VỰC NỘI DUNG CHÍNH (CHIA CỘT) */}
      <div style={styles.topSection}>
        
        {/* CỘT 1: ABOUT US */}
        <div style={styles.aboutColumn}>
          <h4 style={styles.heading}>About Us</h4>
          <p style={styles.description}>
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          
          {/* Form nhập Email */}
          <div style={styles.inputGroup}>
            <input 
              type="text" 
              placeholder="Enter your email" 
              style={styles.input} 
            />
            <button 
              style={styles.sendButton}
              onMouseOver={(e) => e.target.style.opacity = 0.8}
              onMouseOut={(e) => e.target.style.opacity = 1}
            >
              Send
            </button>
          </div>
        </div>

        {/* CỘT 2: LEARN MORE & SHOP */}
        <div style={styles.linkColumn}>
          {/* Phần Learn More */}
          <div style={{ marginBottom: '30px' }}>
            <h4 style={styles.heading}>Learn More</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>Our Cooks</li>
              <li style={styles.listItem}>See Our Features</li>
              <li style={styles.listItem}>FAQ</li>
            </ul>
          </div>

          {/* Phần Shop */}
          <div>
            <h4 style={styles.heading}>Shop</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>Gift Subscription</li>
              <li style={styles.listItem}>Send Us Feedback</li>
            </ul>
          </div>
        </div>

        {/* CỘT 3: RECIPES */}
        <div style={styles.linkColumn}>
          <h4 style={styles.heading}>Recipes</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>What to Cook This Week</li>
            <li style={styles.listItem}>Pasta</li>
            <li style={styles.listItem}>Dinner</li>
            <li style={styles.listItem}>Healthy</li>
            <li style={styles.listItem}>Vegetarian</li>
            <li style={styles.listItem}>Vegan</li>
            <li style={styles.listItem}>Christmas</li>
          </ul>
        </div>

      </div>

      {/* KHU VỰC BOTTOM: LOGO & COPYRIGHT */}
      <div style={styles.bottomSection}>
        <div style={styles.logoGroup}>
          {/* Icon Mũ Đầu Bếp (Bạn có thể thay bằng thẻ <img> chứa logo SVG của bạn) */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C9.5 2 7.5 3.8 7.1 6.2C4.8 6.6 3 8.6 3 11C3 13.5 4.8 15.6 7.2 15.9L8 20H16L16.8 15.9C19.2 15.6 21 13.5 21 11C21 8.6 19.2 6.6 16.9 6.2C16.5 3.8 14.5 2 12 2ZM8.5 22H15.5V23H8.5V22Z" />
          </svg>
          <span style={styles.logoText}>Chefify</span>
        </div>
        
        <span style={styles.copyrightText}>2023 Chefify Company</span>
        <span style={styles.legalText}>Terms of Service | Privacy Policy</span>
      </div>

    </footer>
  );
};

// --- ĐỊNH NGHĨA STYLES ---
const styles = {
  footerContainer: {
    backgroundColor: '#1a1d24', // Màu nền đen nhám giống ảnh
    color: '#ffffff',
    padding: '60px 8% 30px 8%', // Căn lề hai bên rộng rãi
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    display: 'flex',
    flexDirection: 'column',
    gap: '60px' // Khoảng cách giữa phần Top và phần Bottom
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Hỗ trợ rớt dòng trên màn hình nhỏ
    gap: '40px'
  },
  aboutColumn: {
    flex: '2', // Cho cột About Us chiếm nhiều không gian hơn
    minWidth: '300px',
    maxWidth: '450px'
  },
  linkColumn: {
    flex: '1',
    minWidth: '150px'
  },
  heading: {
    fontSize: '16px',
    fontWeight: '700',
    marginBottom: '20px',
    marginTop: 0,
    color: '#ffffff'
  },
  description: {
    fontSize: '14px',
    color: '#a0aec0', // Màu xám nhạt cho text dễ đọc
    lineHeight: '1.6',
    marginBottom: '25px'
  },
  inputGroup: {
    display: 'flex',
    gap: '10px'
  },
  input: {
    flex: '1',
    padding: '12px 16px',
    borderRadius: '8px',
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    backgroundColor: '#ffffff',
    color: '#333'
  },
  sendButton: {
    backgroundColor: '#FA4A7D', // Màu hồng
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '0 24px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'opacity 0.2s'
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px' // Khoảng cách giữa các dòng link
  },
  listItem: {
    fontSize: '14px',
    color: '#e2e8f0', // Trắng xám
    cursor: 'pointer'
  },
  bottomSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    flexWrap: 'wrap'
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  logoText: {
    fontSize: '20px',
    fontWeight: 'bold',
    letterSpacing: '0.5px'
  },
  copyrightText: {
    fontSize: '13px',
    color: '#a0aec0'
  },
  legalText: {
    fontSize: '13px',
    color: '#a0aec0',
    cursor: 'pointer'
  }
};

export default Footer;