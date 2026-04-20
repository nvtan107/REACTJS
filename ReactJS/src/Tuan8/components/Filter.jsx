import React from 'react';

const Filter = () => {
  // Hàm phụ trợ vẽ các ngôi sao đánh giá
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg 
          key={i} 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill={i <= rating ? "#FBBF24" : "#E5E7EB"} // Màu vàng cho sao sáng, xám cho sao tắt
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div style={styles.container}>
      {/* HEADER */}
      <div style={styles.header}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <h3 style={styles.headerTitle}>FILTERS</h3>
      </div>

      {/* SECTION: TYPE */}
      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <h4 style={styles.sectionTitle}>Type</h4>
          <span style={styles.chevronIcon}>^</span>
        </div>
        
        <div style={styles.typeGrid}>
          {/* Mảng dữ liệu Type để render nhanh */}
          {[
            { label: 'Pan-fried', checked: false },
            { label: 'Stir-fried', checked: false },
            { label: 'Grilled', checked: true },
            { label: 'Roasted', checked: true },
            { label: 'Sauteed', checked: false },
            { label: 'Baked', checked: false },
            { label: 'Steamed', checked: false },
            { label: 'Stewed', checked: false },
          ].map((item, index) => (
            <label key={index} style={styles.checkboxLabel}>
              <input 
                type="checkbox" 
                defaultChecked={item.checked} 
                style={styles.checkbox} 
              />
              {item.label}
            </label>
          ))}
        </div>
      </div>

      {/* SECTION: TIME */}
      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <h4 style={styles.sectionTitle}>Time</h4>
          <span style={styles.chevronIcon}>^</span>
        </div>
        
        {/* Visual Mockup cho Dual Range Slider */}
        <div style={styles.sliderContainer}>
          <span style={{...styles.sliderLabel, left: '25%'}}>30 minutes</span>
          <span style={{...styles.sliderLabel, left: '60%'}}>50 minutes</span>
          
          <div style={styles.sliderTrack}>
            <div style={styles.sliderFill}></div>
            <div style={{...styles.sliderThumb, left: '25%'}}></div>
            <div style={{...styles.sliderThumb, left: '60%'}}></div>
          </div>
        </div>
      </div>

      {/* SECTION: RATING */}
      <div style={styles.sectionNoBorder}>
        <div style={styles.sectionHeader}>
          <h4 style={styles.sectionTitle}>Rating</h4>
          <span style={styles.chevronIcon}>^</span>
        </div>
        
        <div style={styles.ratingList}>
          {[
            { rating: 5, checked: false },
            { rating: 4, checked: false },
            { rating: 3, checked: true },
            { rating: 2, checked: true },
            { rating: 1, checked: true },
          ].map((item, index) => (
            <label key={index} style={styles.checkboxLabel}>
              <input 
                type="checkbox" 
                defaultChecked={item.checked} 
                style={styles.checkbox} 
              />
              <div style={styles.starsGroup}>
                {renderStars(item.rating)}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* NÚT APPLY */}
      <div style={styles.footer}>
        <button style={styles.applyButton} onMouseOver={(e) => e.target.style.opacity = 0.8} onMouseOut={(e) => e.target.style.opacity = 1}>
          Apply
        </button>
      </div>
    </div>
  );
};

// --- ĐỊNH NGHĨA STYLES ---
const brandColor = '#FA4A7D'; // Màu hồng đặc trưng

const styles = {
  container: {
    width: '280px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #f3f4f6',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '24px 20px',
  },
  headerTitle: {
    fontSize: '16px',
    fontWeight: '800',
    color: '#111827',
    margin: 0,
    letterSpacing: '0.5px'
  },
  section: {
    padding: '20px',
    borderBottom: '1px solid #f3f4f6',
  },
  sectionNoBorder: {
    padding: '20px',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    cursor: 'pointer'
  },
  sectionTitle: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#374151',
    margin: 0
  },
  chevronIcon: {
    color: brandColor,
    fontWeight: 'bold',
    transform: 'rotate(180deg)', // Mũi tên hướng lên
    fontSize: '18px',
    lineHeight: '1'
  },
  typeGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // Chia 2 cột đều nhau
    gap: '12px'
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '13px',
    color: '#6b7280',
    cursor: 'pointer'
  },
  checkbox: {
    width: '16px',
    height: '16px',
    accentColor: brandColor, // Tự động tô màu hồng cho checkbox khi được tick
    cursor: 'pointer',
    margin: 0
  },
  
  // Custom Slider UI
  sliderContainer: {
    position: 'relative',
    height: '40px',
    marginTop: '10px'
  },
  sliderLabel: {
    position: 'absolute',
    top: 0,
    transform: 'translateX(-50%)',
    fontSize: '11px',
    color: '#6b7280'
  },
  sliderTrack: {
    position: 'absolute',
    top: '25px',
    left: '0',
    right: '0',
    height: '4px',
    backgroundColor: '#fce7ee', // Nền hồng nhạt
    borderRadius: '2px'
  },
  sliderFill: {
    position: 'absolute',
    left: '25%', // Khớp với 30 mins
    right: '40%', // Khớp với 50 mins (100 - 60)
    height: '100%',
    backgroundColor: brandColor
  },
  sliderThumb: {
    position: 'absolute',
    top: '50%',
    width: '16px',
    height: '16px',
    backgroundColor: '#ffffff',
    border: `2px solid ${brandColor}`,
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(250, 74, 125, 0.2)'
  },
  
  // Rating
  ratingList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  starsGroup: {
    display: 'flex',
    gap: '2px'
  },
  
  // Footer Button
  footer: {
    padding: '0 20px 24px 20px'
  },
  applyButton: {
    width: '100%',
    backgroundColor: brandColor,
    color: '#ffffff',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'opacity 0.2s'
  }
};

export default Filter;