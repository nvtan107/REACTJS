import React from 'react';
import heroBg from '../assets/image.png';
// ==========================================
// 1. COMPONENT ICON (SVG)
// ==========================================
const BookmarkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FA4A7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
  </svg>
);

// ==========================================
// 2. DỮ LIỆU MẪU (DUMMY DATA)
// ==========================================
const summerRecipes = [
  { id: 1, title: 'Italian-style tomato salad', time: '14 minutes', image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=500&q=80' },
  { id: 2, title: 'Spaghetti with vegetables and shrimp', time: '15 minutes', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&q=80' },
  { id: 3, title: 'Lotus delight salad', time: '20 minutes', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80' },
  { id: 4, title: 'Snack cakes', time: '21 minutes', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&q=80' },
];

const videoRecipes = [
  { id: 1, title: 'Salad with cabbage and shrimp', time: '32 minutes', image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=500&q=80' },
  { id: 2, title: 'Salad of cove beans, shrimp and potatoes', time: '20 minutes', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80' },
  { id: 3, title: 'Sunny-side up fried eggs', time: '15 minutes', image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&q=80' },
  { id: 4, title: 'Lotus delight salad', time: '20 minutes', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80' },
];

const editorPicks = [
  { 
    id: 1, 
    title: 'Stuffed sticky rice ball', 
    time: '34 minutes', 
    author: 'Jennifer King',
    authorImg: 'https://i.pravatar.cc/150?u=a',
    desc: 'Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...',
    image: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=500&q=80' 
  },
  { 
    id: 2, 
    title: 'Strawberry smoothie', 
    time: '40 minutes', 
    author: 'Matthew Martinez',
    authorImg: 'https://i.pravatar.cc/150?u=b',
    desc: 'Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...',
    image: 'https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=500&q=80' 
  },
  { 
    id: 3, 
    title: 'Latte Art', 
    time: '19 minutes', 
    author: 'Sarah Hill',
    authorImg: 'https://i.pravatar.cc/150?u=c',
    desc: 'Latte art is the skillful craft of creating captivating designs on the surface of a latte...',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&q=80' 
  },
  { 
    id: 4, 
    title: 'Butter fried noodles', 
    time: '16 minutes', 
    author: 'Julia Lopez',
    authorImg: 'https://i.pravatar.cc/150?u=d',
    desc: 'Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&q=80' 
  },
];

// ==========================================
// 3. CÁC COMPONENT THẺ (CARDS) TÁCH RỜI
// ==========================================

// Thẻ nhỏ (Dùng cho Summer Recipes & Video Recipes)
const SmallRecipeCard = ({ recipe }) => (
  <div style={styles.smallCard}>
    <img src={recipe.image} alt={recipe.title} style={styles.smallCardImg} />
    <div style={styles.cardContent}>
      <h3 style={styles.cardTitle}>{recipe.title}</h3>
      <span style={styles.timeBadge}>{recipe.time}</span>
      <button style={styles.bookmarkBtn}><BookmarkIcon /></button>
    </div>
  </div>
);

// Thẻ lớn nằm ngang (Dùng cho Editor's Pick)
const LargeRecipeCard = ({ recipe }) => (
  <div style={styles.largeCard}>
    <img src={recipe.image} alt={recipe.title} style={styles.largeCardImg} />
    <div style={styles.largeCardContent}>
      <h3 style={styles.largeCardTitle}>{recipe.title}</h3>
      <span style={styles.timeBadge}>{recipe.time}</span>
      
      <div style={styles.authorRow}>
        <img src={recipe.authorImg} alt={recipe.author} style={styles.authorAvatarSm} />
        <span style={styles.authorName}>{recipe.author}</span>
      </div>
      
      <p style={styles.cardDesc}>{recipe.desc}</p>
      
      <button style={{...styles.bookmarkBtn, top: '24px', right: '24px'}}><BookmarkIcon /></button>
    </div>
  </div>
);


// ==========================================
// 4. COMPONENT CHÍNH: RECIPE PAGE
// ==========================================
const RecipeHomePage = () => {
  return (
    <div style={styles.pageBackground}>
      
      {/* --- HERO SECTION --- */}
      <div style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <div style={styles.recipeOfDayCard}>
            {/* Badge vàng nhô lên trên */}
            <div style={styles.recipeOfDayBadge}>Recipe of the day</div>
            
            <h1 style={styles.heroTitle}>Salad Caprese</h1>
            <p style={styles.heroDesc}>
              Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
            </p>
            
            <div style={styles.heroAuthorInfo}>
              <img src="https://i.pravatar.cc/150?u=x" alt="Author" style={styles.heroAvatar} />
              <span style={styles.heroAuthorName}>Salad Caprese</span>
            </div>
            
            <button style={styles.primaryBtn}>View now &rarr;</button>
          </div>
        </div>
      </div>

      <div style={styles.mainContainer}>
        
        {/* --- SECTION 1: SUMMER RECIPES --- */}
        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>This Summer Recipes</h2>
            <p style={styles.sectionSubtitle}>We have all your Independence Day sweets covered.</p>
          </div>
          <div style={styles.grid4}>
            {summerRecipes.map(recipe => (
              <SmallRecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>

        {/* --- SECTION 2: RECIPES WITH VIDEOS --- */}
        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Recipes With Videos</h2>
            <p style={styles.sectionSubtitle}>Cooking Up Culinary Creations with Step-by-Step Videos</p>
          </div>
          <div style={styles.grid4}>
            {videoRecipes.map(recipe => (
              <SmallRecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>

        {/* --- SECTION 3: EDITOR'S PICK --- */}
        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Editor's pick</h2>
            <p style={styles.sectionSubtitle}>Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
          </div>
          <div style={styles.grid2}>
            {editorPicks.map(recipe => (
              <LargeRecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

// ==========================================
// 5. STYLES (INLINE)
// ==========================================
const brandColor = '#FA4A7D'; // Màu hồng đặc trưng
const brandColorHover = '#E03E6D';
const lightPink = '#FCE7EE';

const styles = {
  pageBackground: {
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    backgroundColor: '#ffffff',
    color: '#111827',
    paddingBottom: '80px'
  },
  
  // Containers
  heroContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    height: '100%',
    display: 'flex',
    alignItems: 'center' // Căn giữa Card theo chiều dọc
  },
  mainContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },

  // Hero Section
  heroSection: {
    width: '100%',
    height: '600px',
backgroundImage: `url(${heroBg})`,    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '80px',
    position: 'relative'
  },
  recipeOfDayCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '50px 40px',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
    position: 'relative',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
  },
  recipeOfDayBadge: {
    position: 'absolute',
    top: '-16px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#FBBF24', // Màu vàng
    color: '#ffffff',
    fontWeight: '700',
    fontSize: '14px',
    padding: '8px 24px',
    borderRadius: '24px',
    whiteSpace: 'nowrap'
  },
  heroTitle: {
    fontSize: '32px',
    fontWeight: '800',
    color: brandColor,
    marginBottom: '16px',
    fontFamily: '"Georgia", serif' // Font chữ có chân theo thiết kế
  },
  heroDesc: {
    fontSize: '15px',
    color: '#4B5563',
    lineHeight: '1.6',
    marginBottom: '24px'
  },
  heroAuthorInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '32px'
  },
  heroAvatar: {
    width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover'
  },
  heroAuthorName: {
    fontSize: '14px', color: '#6B7280', fontWeight: '500'
  },
  primaryBtn: {
    backgroundColor: brandColor, color: '#ffffff', border: 'none', padding: '12px 32px', borderRadius: '30px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px'
  },

  // Section Headers
  section: {
    marginBottom: '80px'
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '40px'
  },
  sectionTitle: {
    fontSize: '36px', fontWeight: '800', color: brandColor, margin: '0 0 12px 0', fontFamily: '"Georgia", serif'
  },
  sectionSubtitle: {
    fontSize: '16px', color: '#6B7280', margin: 0
  },

  // Grids
  grid4: {
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px'
  },
  grid2: {
    display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px'
  },

  // Small Card Styles
  smallCard: {
    border: '1px solid #F3F4F6', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#ffffff', position: 'relative'
  },
  smallCardImg: {
    width: '100%', height: '220px', objectFit: 'cover'
  },
  cardContent: {
    padding: '20px'
  },
  cardTitle: {
    fontSize: '16px', fontWeight: '700', color: '#111827', margin: '0 0 12px 0', paddingRight: '40px', lineHeight: '1.4'
  },

  // Large Card Styles
  largeCard: {
    display: 'flex', border: '1px solid #F3F4F6', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#ffffff', position: 'relative'
  },
  largeCardImg: {
    width: '240px', height: '100%', objectFit: 'cover', flexShrink: 0
  },
  largeCardContent: {
    padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center'
  },
  largeCardTitle: {
    fontSize: '20px', fontWeight: '700', color: '#111827', margin: '0 0 12px 0', paddingRight: '40px'
  },
  authorRow: {
    display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px', marginBottom: '16px'
  },
  authorAvatarSm: {
    width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover'
  },
  authorName: {
    fontSize: '14px', fontWeight: '600', color: '#374151'
  },
  cardDesc: {
    fontSize: '14px', color: '#6B7280', lineHeight: '1.6', margin: 0
  },

  // Shared Card Elements
  timeBadge: {
    backgroundColor: lightPink, color: brandColor, fontSize: '12px', fontWeight: '600', padding: '6px 12px', borderRadius: '8px', display: 'inline-block'
  },
  bookmarkBtn: {
    position: 'absolute', top: '220px', right: '20px', transform: 'translateY(-50%)', backgroundColor: '#ffffff', border: '1px solid #F3F4F6', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  }
};

export default RecipeHomePage;