import React from 'react';

const Header = () => {
  return (
    <header style={styles.headerContainer}>
      
      {/* === CỤM BÊN TRÁI: LOGO & TÌM KIẾM === */}
      <div style={styles.leftSection}>
        
        {/* Logo */}
        <div style={styles.logoGroup} onClick={() => console.log('Go to Home')}>
          {/* Icon Mũ Đầu Bếp (SVG) */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#bd365d" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C9.5 2 7.5 3.8 7.1 6.2C4.8 6.6 3 8.6 3 11C3 13.5 4.8 15.6 7.2 15.9L8 20H16L16.8 15.9C19.2 15.6 21 13.5 21 11C21 8.6 19.2 6.6 16.9 6.2C16.5 3.8 14.5 2 12 2ZM8.5 22H15.5V23H8.5V22Z" />
          </svg>
          <span style={styles.brandName}>Chefify</span>
        </div>

        {/* Thanh tìm kiếm */}
        <div style={styles.searchBar}>
          {/* Icon kính lúp */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="What would you like to cook?" 
            style={styles.searchInput}
          />
        </div>

      </div>

      {/* === CỤM BÊN PHẢI: MENU & NÚT AUTH === */}
      <div style={styles.rightSection}>
        
        {/* Các liên kết điều hướng */}
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem} onMouseOver={(e) => e.target.style.color = '#bd365d'} onMouseOut={(e) => e.target.style.color = '#4b5563'}>What to cook</li>
            <li style={styles.navItem} onMouseOver={(e) => e.target.style.color = '#bd365d'} onMouseOut={(e) => e.target.style.color = '#4b5563'}>Recipes</li>
            <li style={styles.navItem} onMouseOver={(e) => e.target.style.color = '#bd365d'} onMouseOut={(e) => e.target.style.color = '#4b5563'}>Ingredients</li>
            <li style={styles.navItem} onMouseOver={(e) => e.target.style.color = '#bd365d'} onMouseOut={(e) => e.target.style.color = '#4b5563'}>Occasions</li>
            <li style={styles.navItem} onMouseOver={(e) => e.target.style.color = '#bd365d'} onMouseOut={(e) => e.target.style.color = '#4b5563'}>About Us</li>
          </ul>
        </nav>

        {/* Cụm nút Login / Subscribe */}
        <div style={styles.authButtons}>
          <button style={styles.loginBtn}>Login</button>
          <button style={styles.subscribeBtn}>Subscribe</button>
        </div>

      </div>

    </header>
  );
};

// --- ĐỊNH NGHĨA STYLES ---
const brandColor = '#bd365d'; // Màu hồng đậm/đỏ tía giống trong ảnh

const styles = {
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 4%', // Khoảng cách trên dưới 16px, trái phải 4%
    backgroundColor: '#ffffff', // Màu nền header
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)', // Đổ bóng nhẹ cho header tách biệt với nội dung
    fontFamily: '"Inter", "Segoe UI", sans-serif'
  },
  
  // -- BÊN TRÁI --
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px' // Khoảng cách giữa Logo và Thanh tìm kiếm
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer'
  },
  brandName: {
    fontSize: '22px',
    fontWeight: '800',
    color: brandColor,
    letterSpacing: '-0.5px'
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f3f4f6', // Nền xám nhạt
    borderRadius: '12px',
    padding: '10px 16px',
    width: '280px', // Độ rộng thanh tìm kiếm
    gap: '10px'
  },
  searchInput: {
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    width: '100%',
    fontSize: '14px',
    color: '#333'
  },

  // -- BÊN PHẢI --
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px' // Khoảng cách giữa Menu và nhóm Nút
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '24px' // Khoảng cách giữa các chữ trong menu
  },
  navItem: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#4b5563', // Chữ xám đậm
    cursor: 'pointer',
    transition: 'color 0.2s'
  },
  authButtons: {
    display: 'flex',
    gap: '12px'
  },
  loginBtn: {
    backgroundColor: '#fce7ee', // Nền hồng rất nhạt
    color: brandColor, // Chữ hồng đậm
    border: 'none',
    borderRadius: '8px',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'opacity 0.2s'
  },
  subscribeBtn: {
    backgroundColor: brandColor, // Nền hồng đậm
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'opacity 0.2s'
  }
};

export default Header;