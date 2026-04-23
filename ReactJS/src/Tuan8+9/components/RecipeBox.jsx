import React from 'react';
// 1. Import toàn bộ ảnh ở đầu file
import food1 from '../assets/food1.jpg';
import food2 from '../assets/food2.jpg';
import food3 from '../assets/food3.jpg';
import food4 from '../assets/food4.jpg';
import food5 from '../assets/food5.jpg';
import food6 from '../assets/food6.jpg';
import food7 from '../assets/food7.jpg';
import food8 from '../assets/food8.jpg';
import account from '../assets/account.jpg'

// 2. Gán biến vào mảng (bỏ dấu ngoặc kép đi)
const recipes = [
  { id: 1, title: 'Italian-style tomato salad', time: '14 minutes', image: food1 },
  { id: 2, title: 'Vegetable and shrimp spaghetti', time: '15 minutes', image: food2 },
  { id: 3, title: 'Lotus delight salad', time: '20 minutes', image: food3 },
  { id: 4, title: 'Snack cakes', time: '21 minutes', image: food4 },
  { id: 5, title: 'Salad with cabbage and shrimp', time: '32 minutes', image: food5 },
  { id: 6, title: 'Bean, shrimp, and potato salad', time: '32 minutes', image: food6 },
  { id: 7, title: 'Sunny-side up fried eggs', time: '32 minutes', image: food7 },
  { id: 8, title: 'Lotus delight salad', time: '32 minutes', image: food8 },
];

// --- COMPONENT: THẺ CÔNG THỨC (RECIPE CARD) ---
const RecipeCard = ({ recipe }) => {
  return (
    <div style={styles.card}>
      <img src={recipe.image} alt={recipe.title} style={styles.cardImage} />
      <div style={styles.cardContent}>
        <div style={styles.cardHeader}>
          <h4 style={styles.cardTitle}>{recipe.title}</h4>
          {/* Nút Bookmark */}
          <button style={styles.bookmarkBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FA4A7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        </div>
        <span style={styles.timeTag}>{recipe.time}</span>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT: RECIPE BOX ---
const RecipeBox = () => {
  return (
    <div style={styles.container}>
      
      {/* 1. BREADCRUMB */}
      <div style={styles.breadcrumb}>
        <span>Home</span>
        <span style={{ margin: '0 8px' }}>{'>'}</span>
        <span style={{ color: '#FA4A7D' }}>Your Recipe Box</span>
      </div>

      {/* 2. TIÊU ĐỀ & PROFILE HEADER */}
      <h1 style={styles.pageTitle}>Emma Gonzalez's Recipe Box</h1>
      
      <div style={styles.profileSection}>
        <img 
          src={account} 
          alt="Emma Gonzalez" 
          style={styles.avatar} 
        />
        <div style={styles.profileInfo}>
          <p style={styles.bio}>
            Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
          </p>
          <div style={styles.statsRow}>
            <span style={styles.subscribers}>6.5k Subscribes</span>
            <button style={styles.shareBtn}>
              Share 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '6px'}}>
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 3. TABS NAVIGATION */}
      <div style={styles.tabsContainer}>
        <div style={styles.activeTab}>Saved Recipes</div>
        <div style={styles.tab}>Folders</div>
        <div style={styles.tab}>Recipes by Genevieve</div>
      </div>

      {/* 4. RECIPE GRID */}
      <div style={styles.grid}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {/* 5. PAGINATION */}
      <div style={styles.pagination}>
        <button style={styles.pageBtn}>&lt;</button>
        <button style={{...styles.pageBtn, ...styles.activePageBtn}}>1</button>
        <button style={styles.pageBtn}>2</button>
        <button style={styles.pageBtn}>3</button>
        <button style={styles.pageBtn}>4</button>
        <span style={styles.pageEllipsis}>...</span>
        <button style={styles.pageBtn}>10</button>
        <button style={styles.pageBtn}>11</button>
        <button style={styles.pageBtn}>&gt;</button>
      </div>

    </div>
  );
};

// --- ĐỊNH NGHĨA STYLES ---
const brandColor = '#FA4A7D';
const lightPink = '#fce7ee';

const styles = {
  container: {
    maxWidth: '1200px', // Giới hạn chiều rộng để không bị loãng trên màn hình to
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    color: '#111827',
    backgroundColor: '#ffffff'
  },
  breadcrumb: {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '30px'
  },
  pageTitle: {
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '40px',
    fontFamily: '"Georgia", serif' // Tiêu đề hơi có nét chân theo thiết kế
  },
  
  // Profile Section
  profileSection: {
    display: 'flex',
    gap: '30px',
    marginBottom: '50px',
    alignItems: 'center'
  },
  avatar: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: `4px solid ${lightPink}`
  },
  profileInfo: {
    flex: 1
  },
  bio: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#4b5563',
    marginBottom: '20px'
  },
  statsRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  },
  subscribers: {
    color: brandColor,
    fontWeight: '600',
    fontSize: '15px'
  },
  shareBtn: {
    backgroundColor: brandColor,
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '20px', // Bo tròn nhiều
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer'
  },

  // Tabs
  tabsContainer: {
    display: 'flex',
    borderBottom: '1px solid #e5e7eb',
    marginBottom: '30px',
    gap: '10px'
  },
  tab: {
    padding: '12px 24px',
    fontSize: '15px',
    color: '#6b7280',
    cursor: 'pointer',
    fontWeight: '500'
  },
  activeTab: {
    padding: '12px 24px',
    fontSize: '15px',
    color: brandColor,
    backgroundColor: lightPink,
    borderRadius: '8px 8px 0 0', // Bo góc ở trên
    cursor: 'pointer',
    fontWeight: '600'
  },

  // Grid
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Chia chính xác 4 cột giống ảnh
    gap: '24px',
    marginBottom: '50px'
  },

  // Card
  card: {
    border: '1px solid #f3f4f6',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
  },
  cardImage: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    backgroundColor: '#f3f4f6'
  },
  cardContent: {
    padding: '16px'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '10px',
    marginBottom: '16px'
  },
  cardTitle: {
    fontSize: '15px',
    fontWeight: '700',
    margin: 0,
    lineHeight: '1.4'
  },
  bookmarkBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '24px'
  },
  timeTag: {
    backgroundColor: lightPink,
    color: brandColor,
    fontSize: '12px',
    fontWeight: '600',
    padding: '4px 10px',
    borderRadius: '6px'
  },

  // Pagination
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px'
  },
  pageBtn: {
    width: '36px',
    height: '36px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #e5e7eb',
    backgroundColor: '#ffffff',
    color: '#4b5563',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500'
  },
  activePageBtn: {
    backgroundColor: brandColor,
    color: '#ffffff',
    border: `1px solid ${brandColor}`
  },
  pageEllipsis: {
    color: '#9ca3af',
    padding: '0 4px'
  }
};

export default RecipeBox;