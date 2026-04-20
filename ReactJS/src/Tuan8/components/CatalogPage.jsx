import React from "react";

// ==========================================
// DỮ LIỆU MẪU (Mô phỏng theo hình ảnh)
// ==========================================
const recipes = [
  {
    id: 1,
    title: "Cucumber salad, cherry tomatoes",
    time: "32 minutes",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "Italian-style tomato salad",
    time: "32 minutes",
    image:
      "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "Potato Salad",
    time: "32 minutes",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    title: "Salad with cabbage and shrimp",
    time: "32 minutes",
    image:
      "https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    title: "Five-color salad",
    time: "32 minutes",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    title: "Corn Salad",
    time: "32 minutes",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    title: "Salad with cabbage and shrimp",
    time: "32 minutes",
    image:
      "https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    title: "Lotus delight salad",
    time: "32 minutes",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    title: "Avocado Salad",
    time: "32 minutes",
    image:
      "https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

// ==========================================
// COMPONENT 1: BỘ LỌC (FILTER SIDEBAR)
// ==========================================
const Filter = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i <= rating ? "#FBBF24" : "#E5E7EB"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
        </svg>,
      );
    }
    return stars;
  };

  return (
    <div style={styles.filterContainer}>
      <div style={styles.filterHeader}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#111827"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <h3 style={styles.filterHeaderTitle}>FILTERS</h3>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <h4 style={styles.sectionTitle}>Type</h4>
          <span style={styles.chevronIcon}>^</span>
        </div>
        <div style={styles.typeGrid}>
          {[
            { label: "Pan-fried", checked: false },
            { label: "Stir-fried", checked: false },
            { label: "Grilled", checked: true },
            { label: "Roasted", checked: true },
            { label: "Sauteed", checked: false },
            { label: "Baked", checked: false },
            { label: "Steamed", checked: false },
            { label: "Stewed", checked: false },
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

      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <h4 style={styles.sectionTitle}>Time</h4>
          <span style={styles.chevronIcon}>^</span>
        </div>
        <div style={styles.sliderContainer}>
          <span style={{ ...styles.sliderLabel, left: "25%" }}>30 minutes</span>
          <span style={{ ...styles.sliderLabel, left: "60%" }}>50 minutes</span>
          <div style={styles.sliderTrack}>
            <div style={styles.sliderFill}></div>
            <div style={{ ...styles.sliderThumb, left: "25%" }}></div>
            <div style={{ ...styles.sliderThumb, left: "60%" }}></div>
          </div>
        </div>
      </div>

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
              <div style={styles.starsGroup}>{renderStars(item.rating)}</div>
            </label>
          ))}
        </div>
      </div>

      <div style={styles.filterFooter}>
        <button style={styles.applyButton}>Apply</button>
      </div>
    </div>
  );
};

// ==========================================
// COMPONENT 2: THẺ CÔNG THỨC (RECIPE CARD)
// ==========================================
const RecipeCard = ({ recipe }) => (
  <div style={styles.card}>
    <img src={recipe.image} alt={recipe.title} style={styles.cardImage} />
    <div style={styles.cardContent}>
      <div style={styles.cardHeader}>
        <h4 style={styles.cardTitle}>{recipe.title}</h4>
        <button style={styles.bookmarkBtn}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FA4A7D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
      <span style={styles.timeTag}>{recipe.time}</span>
    </div>
  </div>
);

// ==========================================
// COMPONENT CHÍNH: TRANG KẾT QUẢ (CATALOG PAGE)
// ==========================================
const CatalogPage = () => {
  return (
    <div style={styles.pageLayout}>
      {/* CỘT TRÁI: BỘ LỌC */}
      <aside style={styles.sidebar}>
        <Filter />
      </aside>

      {/* CỘT PHẢI: KẾT QUẢ LỌC */}
      <main style={styles.mainContent}>
        {/* Tiêu đề & Nút Sort */}
        <div style={styles.resultsHeader}>
          <h1 style={styles.pageTitle}>Salad (32)</h1>
          <select style={styles.sortSelect}>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {/* Lưới danh sách món ăn (3 cột) */}
        <div style={styles.grid}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
    </div>
  );
};

// ==========================================
// ĐỊNH NGHĨA STYLES CHUNG
// ==========================================
const brandColor = "#FA4A7D";
const lightPink = "#fce7ee";

const styles = {
  // Layout tổng thể
  pageLayout: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    display: "flex", // Chia layout trái phải
    gap: "40px",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
  },

  // Vùng Sidebar (Trái)
  sidebar: {
    width: "280px",
    flexShrink: 0, // Không cho sidebar bị bóp méo
  },

  // Vùng Content (Phải)
  mainContent: {
    flex: 1, // Chiếm toàn bộ không gian còn lại
  },

  // Header phần kết quả
  resultsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
  },
  pageTitle: {
    fontSize: "32px",
    fontWeight: "800",
    margin: 0,
    color: "#111827",
  },
  sortSelect: {
    padding: "8px 16px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    backgroundColor: "#fff",
    fontSize: "14px",
    color: "#374151",
    cursor: "pointer",
    outline: "none",
  },

  // Lưới sản phẩm (Grid 3 cột theo ảnh)
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // Thay đổi thành 3 cột thay vì 4
    gap: "24px",
  },

  // Styles cho Filter
  filterContainer: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    display: "flex",
    flexDirection: "column",
  },
  filterHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "24px 20px",
  },
  filterHeaderTitle: {
    fontSize: "16px",
    fontWeight: "800",
    margin: 0,
    letterSpacing: "0.5px",
  },
  section: {
    padding: "20px",
    borderBottom: "1px solid #f3f4f6",
  },
  sectionNoBorder: { padding: "20px" },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
    cursor: "pointer",
  },
  sectionTitle: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#374151",
    margin: 0,
  },
  chevronIcon: {
    color: brandColor,
    fontWeight: "bold",
    transform: "rotate(180deg)",
  },
  typeGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "13px",
    color: "#6b7280",
    cursor: "pointer",
  },
  checkbox: {
    width: "16px",
    height: "16px",
    accentColor: brandColor,
    cursor: "pointer",
    margin: 0,
  },
  sliderContainer: { position: "relative", height: "40px", marginTop: "10px" },
  sliderLabel: {
    position: "absolute",
    top: 0,
    transform: "translateX(-50%)",
    fontSize: "11px",
    color: "#6b7280",
  },
  sliderTrack: {
    position: "absolute",
    top: "25px",
    left: "0",
    right: "0",
    height: "4px",
    backgroundColor: "#fce7ee",
    borderRadius: "2px",
  },
  sliderFill: {
    position: "absolute",
    left: "25%",
    right: "40%",
    height: "100%",
    backgroundColor: brandColor,
  },
  sliderThumb: {
    position: "absolute",
    top: "50%",
    width: "16px",
    height: "16px",
    backgroundColor: "#ffffff",
    border: `2px solid ${brandColor}`,
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
  },
  ratingList: { display: "flex", flexDirection: "column", gap: "12px" },
  starsGroup: { display: "flex", gap: "2px" },
  filterFooter: { padding: "0 20px 24px 20px" },
  applyButton: {
    width: "100%",
    backgroundColor: brandColor,
    color: "#ffffff",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },

  // Styles cho Recipe Card
  card: {
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    overflow: "hidden",
    backgroundColor: "#ffffff",
  },
  cardImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  cardContent: {
    padding: "16px",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "10px",
    marginBottom: "16px",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "700",
    margin: 0,
    lineHeight: "1.4",
  },
  bookmarkBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    minWidth: "24px",
  },
  timeTag: {
    backgroundColor: lightPink,
    color: brandColor,
    fontSize: "12px",
    fontWeight: "600",
    padding: "4px 10px",
    borderRadius: "6px",
  },
};

export default CatalogPage;
