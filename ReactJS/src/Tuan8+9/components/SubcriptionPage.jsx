import React, { useState } from 'react';

// ==========================================
// CÁC COMPONENT ICON (SVG)
// ==========================================
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#FBBF24" strokeWidth="2" fill="#FEF3C7"/>
    <path d="M8 12L11 15L16 9" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

// ==========================================
// COMPONENT CHÍNH: SUBSCRIPTION PAGE
// ==========================================
const SubscriptionPage = () => {
  // State để quản lý gói cước được chọn ở phần cuối (monthly hoặc yearly)
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  // Dữ liệu cho 4 thẻ quyền lợi
  const allAccessFeatures = [
    { title: 'Cooking', desc: 'Enjoy recipes, advice and inspiration for any occasion.' },
    { title: 'Wirecutter', desc: 'Explore independent reviews for thousands of products.' },
    { title: 'Games', desc: 'Unwind with Spelling Bee, Wordle, The Crossword.' },
    { title: 'The Athletic', desc: 'Discover in-depth, personalized sports journalism.' }
  ];

  return (
    <div style={styles.container}>
      
      {/* 1. BREADCRUMB */}
      <div style={styles.breadcrumb}>
        <span>Recipes</span>
        <span style={{ margin: '0 8px' }}>{'>'}</span>
        <span style={{ color: '#FA4A7D' }}>Subscribe</span>
      </div>

      {/* 2. HERO SECTION (Top) */}
      <div style={styles.heroSection}>
        {/* Cột trái: Nội dung */}
        <div style={styles.heroContent}>
          <p style={styles.smallSubtitle}>This recipe is exclusively available to subscribers</p>
          <h1 style={styles.heroTitle}>Join now to access effortless, hassle-free recipes</h1>
          
          <ul style={styles.featureList}>
            {[
              '20,000+ recipes to suit all tastes and skill levels',
              'Filter for diets, cook times, and more',
              'Personal Recipe Box for favorites',
              'Gain exclusive access to our subscriber-only mobile app.'
            ].map((text, idx) => (
              <li key={idx} style={styles.featureItem}>
                <CheckIcon />
                <span style={styles.featureText}>{text}</span>
              </li>
            ))}
          </ul>

          <div style={styles.pricingInfo}>
            <h2 style={styles.priceHighlight}>0.25USD / Week</h2>
            <p style={styles.priceSubtext}>Billed as $1 every 4 weeks for the first year</p>
          </div>

          <button style={styles.primaryBtn}>
            <CardIcon /> Subscribe Now
          </button>
          <p style={styles.cancelText}>Cancel or Pause anytime</p>
        </div>

        {/* Cột phải: Hình ảnh */}
        <div style={styles.heroImageContainer}>
          <img 
            src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Delicious food spread" 
            style={styles.heroImage}
          />
        </div>
      </div>

      {/* 3. MIDDLE SECTION: ALL ACCESS FEATURES */}
      <div style={styles.middleSection}>
        <h2 style={styles.sectionTitle}>An All Access subscription includes</h2>
        <div style={styles.cardsGrid}>
          {allAccessFeatures.map((feature, idx) => (
            <div key={idx} style={styles.featureCard}>
              <h3 style={styles.cardTitle}>{feature.title}</h3>
              <p style={styles.cardDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. BOTTOM SECTION: SUBSCRIBE FORM */}
      <div style={styles.bottomSection}>
        <div style={styles.logoRow}>
          {/* Chefify Logo (Mô phỏng) */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#FA4A7D" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
          <span style={styles.logoText}>Chefify</span>
        </div>
        
        <h2 style={styles.bottomTitle}>Subscribe to Chefify Cooking only</h2>
        <p style={styles.bottomDesc}>Enjoy thousands of delicious recipes for every taste, plus advice and inspiration daily.</p>

        <div style={styles.radioGroup}>
          {/* Lựa chọn 1: Theo tháng */}
          <div 
            style={{...styles.radioOption, borderColor: selectedPlan === 'monthly' ? '#FA4A7D' : '#e5e7eb'}}
            onClick={() => setSelectedPlan('monthly')}
          >
            <div style={{...styles.radioCircle, borderColor: selectedPlan === 'monthly' ? '#FA4A7D' : '#d1d5db'}}>
              {selectedPlan === 'monthly' && <div style={styles.radioDot}></div>}
            </div>
            <span style={styles.radioLabel}>$2/month (Billed every 4 weeks)</span>
          </div>

          {/* Lựa chọn 2: Theo năm */}
          <div 
            style={{...styles.radioOption, borderColor: selectedPlan === 'yearly' ? '#FA4A7D' : '#e5e7eb'}}
            onClick={() => setSelectedPlan('yearly')}
          >
            <div style={{...styles.radioCircle, borderColor: selectedPlan === 'yearly' ? '#FA4A7D' : '#d1d5db'}}>
              {selectedPlan === 'yearly' && <div style={styles.radioDot}></div>}
            </div>
            <span style={styles.radioLabel}>$20/year (Billed one annually)</span>
          </div>
        </div>

        <button style={{...styles.primaryBtn, width: '400px', maxWidth: '100%'}}>
          <CardIcon /> Subscribe Now
        </button>
        <p style={styles.cancelText}>Cancel or Pause anytime</p>

      </div>

    </div>
  );
};

// ==========================================
// ĐỊNH NGHĨA STYLES
// ==========================================
const brandColor = '#FA4A7D';

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    color: '#111827',
    backgroundColor: '#ffffff'
  },
  breadcrumb: {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '40px',
    fontWeight: '500'
  },

  // Hero Section
  heroSection: {
    display: 'flex',
    gap: '60px',
    alignItems: 'center',
    marginBottom: '100px'
  },
  heroContent: {
    flex: 1,
    maxWidth: '500px'
  },
  smallSubtitle: {
    fontSize: '14px',
    fontWeight: '700',
    marginBottom: '16px',
    color: '#111827'
  },
  heroTitle: {
    fontSize: '36px',
    fontWeight: '800',
    color: brandColor,
    lineHeight: '1.2',
    margin: '0 0 24px 0'
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 32px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  featureText: {
    fontSize: '15px',
    color: '#4b5563'
  },
  pricingInfo: {
    marginBottom: '24px'
  },
  priceHighlight: {
    fontSize: '24px',
    fontWeight: '800',
    margin: '0 0 8px 0',
    color: '#111827'
  },
  priceSubtext: {
    fontSize: '14px',
    color: '#6b7280',
    margin: 0
  },
  primaryBtn: {
    width: '100%',
    backgroundColor: brandColor,
    color: '#ffffff',
    border: 'none',
    padding: '14px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    transition: 'opacity 0.2s',
    marginBottom: '12px'
  },
  cancelText: {
    textAlign: 'center',
    fontSize: '13px',
    color: '#f9a8d4', // Hồng nhạt
    margin: 0
  },
  heroImageContainer: {
    flex: 1,
    height: '500px',
    borderRadius: '24px',
    overflow: 'hidden'
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },

  // Middle Section
  middleSection: {
    textAlign: 'center',
    marginBottom: '100px'
  },
  sectionTitle: {
    fontSize: '28px',
    fontWeight: '800',
    color: brandColor,
    marginBottom: '40px'
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px'
  },
  featureCard: {
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '32px 20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '800',
    margin: '0 0 12px 0',
    color: '#111827'
  },
  cardDesc: {
    fontSize: '14px',
    color: '#6b7280',
    lineHeight: '1.5',
    margin: 0
  },

  // Bottom Section
  bottomSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto'
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '16px'
  },
  logoText: {
    fontSize: '20px',
    fontWeight: '800',
    color: brandColor
  },
  bottomTitle: {
    fontSize: '28px',
    fontWeight: '800',
    color: brandColor,
    margin: '0 0 16px 0'
  },
  bottomDesc: {
    fontSize: '15px',
    color: '#4b5563',
    margin: '0 0 32px 0'
  },
  radioGroup: {
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '32px'
  },
  radioOption: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px 20px',
    border: '2px solid', // Border color set via JS logic
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: '#ffffff'
  },
  radioCircle: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '2px solid', // Border color set via JS logic
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '12px'
  },
  radioDot: {
    width: '10px',
    height: '10px',
    backgroundColor: brandColor,
    borderRadius: '50%'
  },
  radioLabel: {
    fontSize: '15px',
    fontWeight: '500',
    color: '#111827'
  }
};

export default SubscriptionPage;