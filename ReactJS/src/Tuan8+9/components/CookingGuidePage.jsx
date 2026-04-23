import React, { useState } from "react";

// --- IMPORT TOÀN BỘ HÌNH ẢNH TỪ ASSETS ---
import pic1 from "../assets/pic1.png"; // Ảnh chính (Hero)
import pic2 from "../assets/pic2.png"; // Video Bước 1
import pic3 from "../assets/pic3.png"; // Video Bước 3
import pic4 from "../assets/pic4.png"; // Video Bước 5
import pic5 from "../assets/pic5.png"; // Ảnh bình luận 1
import pic6 from "../assets/pic6.png"; // Ảnh bình luận 2
import pic7 from "../assets/pic7.png"; // Ảnh phần Xem gần đây

// ==========================================
// 1. CÁC COMPONENT ICON (SVG)
// ==========================================
const Icons = {
  Bookmark: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
    </svg>
  ),
  StarFull: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#FBBF24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
    </svg>
  ),
  StarEmpty: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#E5E7EB"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
    </svg>
  ),
  Play: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#ffffff"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
  Like: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FA4A7D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
    </svg>
  ),
};

// ==========================================
// 2. DỮ LIỆU MẪU
// ==========================================
const ingredients = [
  "Yield: 4 generous servings",
  "2 pints ripe, well-rinsed strawberries",
  "1/2 cup sugar, or more to taste",
  "4 cups flour",
  "3 tablespoons sugar",
  "1/4 teaspoon salt",
  "5 teaspoons baking powder",
  "1/4 cups butter",
  "3 cups whipping cream",
  "¼ teaspoon vanilla extract",
];

const cookingSteps = [
  {
    step: 1,
    text: "Pick over and hull strawberries. Cut in half or slice, depending on size. Gently crush about a quarter of the berries with a fork to release their juices. Mix with remaining berries and the ½ cup of sugar, adding more sugar if necessary. Set aside, covered, for about half an hour to develop flavor.",
    videoThumb: pic2, // Sử dụng pic2
  },
  {
    step: 2,
    text: "Preheat oven to 450 degrees.",
    videoThumb: null,
  },
  {
    step: 3,
    text: "Into a large mixing bowl, sift together flour, 3 tablespoons sugar, salt and baking powder. Add ¼ cup of softened butter, and rub into dry ingredients as for pastry. Add 1¼ cups cream, and mix to a soft dough. Knead the dough for one minute on a lightly floured pastry board, then roll it out to about ½-inch thickness. Using a 3-inch biscuit cutter, cut an even number of rounds - 2 rounds per serving.",
    videoThumb: pic3, // Sử dụng pic3
  },
  {
    step: 4,
    text: "Use a little of the butter to grease a baking sheet. Place half the rounds on it. Melt remaining butter and brush a little on the rounds; place remaining rounds on top. Bake for 10 to 15 minutes, or until golden brown.",
    videoThumb: null,
  },
  {
    step: 5,
    text: "Beat remaining cream until it thickens. Add vanilla. Beat again just until thick.",
    videoThumb: pic4, // Sử dụng pic4
  },
];

const comments = [
  {
    id: 1,
    author: "Jimmy Will",
    time: "08:10 AM",
    avatar: "https://i.pravatar.cc/150?u=11",
    text: "Enim consectetur enim magna sit sit ullamco et dolore veniam nulla labore laboris anim eiusmod voluptate qui esse amet. Non cupidatat sunt duis occ",
    likes: 0,
    replies: [],
  },
  {
    id: 2,
    author: "Alisa Grill",
    time: "08:10 AM",
    avatar: "https://i.pravatar.cc/150?u=22",
    text: "Culpa esse pariatur deserunt reprehenderit fugiat incididunt exercitation dolore id officia officia duis Lorem et elit do eu est tempor. Tempor consequat qui laborum do qui sit laboris tempor culpa sit deserunt reprehenderit...",
    images: [
      pic5, // Sử dụng pic5
      pic6, // Sử dụng pic6
    ],
    likes: 0,
    replyCount: 12,
    replies: [
      {
        id: 21,
        author: "Chris Helson",
        time: "09:42 AM",
        avatar: "https://i.pravatar.cc/150?u=33",
        text: "Labore ea est enim esse officia anim consequat cillum deserunt pariatur...",
      },
    ],
  },
  {
    id: 3,
    author: "Emma Gonzalez",
    time: "08:10 AM",
    avatar: "https://i.pravatar.cc/150?u=44",
    text: "Deserunt minim incididunt cillum nostrud do voluptate excepteur excepteur minim ex minim est laborum labore 🤩. Mollit commodo in do dolor ut in mollit est",
    likes: 0,
    replies: [],
  },
];

const recentRecipes = [
  {
    id: 1,
    title: "Salad with cabbage and shrimp",
    time: "32 minutes",
    image: pic7,
  }, // Sử dụng pic7
  {
    id: 2,
    title: "Salad of cove beans, shrimp and potatoes",
    time: "32 minutes",
    image: pic7,
  },
  { id: 3, title: "Sunny-side up fried eggs", time: "32 minutes", image: pic7 },
  { id: 4, title: "Lotus delight salad", time: "32 minutes", image: pic7 },
];

// ==========================================
// 3. COMPONENT CHÍNH: COOKING GUIDE
// ==========================================
const CookingGuidePage = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div style={styles.container}>
      {/* --- BREADCRUMB --- */}
      <div style={styles.breadcrumb}>
        <span>Home</span>
        <span style={{ margin: "0 8px" }}>{">"}</span>
        <span style={{ color: "#FA4A7D" }}>Cooking guide</span>
      </div>

      {/* --- MAIN SPLIT CONTENT --- */}
      <div style={styles.splitLayout}>
        {/* CỘT TRÁI: THÔNG TIN MÓN & NGUYÊN LIỆU */}
        <div style={styles.leftCol}>
          <h1 style={styles.recipeTitle}>How to make a Strawberry Shortcake</h1>
          <p style={styles.recipeDesc}>
            It seems like there may be a misunderstanding. If you're asking how
            a user can make a Strawberry Shortcake, the process would be
            identical to the recipe I shared earlier. It involves preparing the
            strawberries, making the shortcakes, preparing whipped cream, and
            finally assembling the shortcake.
          </p>

          {/* Author Card */}
          <div style={styles.authorCard}>
            <div style={styles.authorHeader}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <img
                  src="https://i.pravatar.cc/150?u=44"
                  alt="Emma"
                  style={styles.authorAvatar}
                />
                <span style={styles.authorName}>Emma Gonzalez</span>
              </div>
              <div style={styles.bookmarkBadge}>
                <Icons.Bookmark />
              </div>
            </div>

            <div style={styles.statsRow}>
              <div style={styles.statItem}>
                <span style={styles.statLabel}>Time:</span>
                <span style={styles.statValue}>45 minutes</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statLabel}>Notes</span>
                <span style={styles.statValue}>352 community notes</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statLabel}>Rating:</span>
                <div style={{ display: "flex", gap: "2px", marginTop: "4px" }}>
                  <Icons.StarFull />
                  <Icons.StarFull />
                  <Icons.StarFull />
                  <Icons.StarFull />
                  <Icons.StarEmpty />
                </div>
              </div>
            </div>
          </div>

          {/* Ingredients List */}
          <div style={styles.ingredientsBox}>
            <ul style={styles.ingList}>
              {ingredients.map((ing, idx) => (
                <li key={idx} style={styles.ingItem}>
                  - {ing}
                </li>
              ))}
            </ul>
            <button style={styles.groceryBtn}>
              + Add to Your Grocery List
            </button>
          </div>
        </div>

        {/* CỘT PHẢI: HÌNH ẢNH & CÁC BƯỚC NẤU */}
        <div style={styles.rightCol}>
          {/* Main Hero Image */}
          <img
            src={pic1} // Sử dụng pic1
            alt="Strawberry Shortcake"
            style={styles.heroImg}
          />

          {/* Steps List */}
          <div style={styles.stepsContainer}>
            {cookingSteps.map((step) => (
              <div key={step.step} style={styles.stepBlock}>
                <h3 style={styles.stepTitle}>Step {step.step}</h3>
                <p style={styles.stepText}>{step.text}</p>

                {/* Nếu có video/hình ảnh hướng dẫn thì hiển thị */}
                {step.videoThumb && (
                  <div style={styles.videoBox}>
                    <img
                      src={step.videoThumb}
                      alt={`Step ${step.step}`}
                      style={styles.videoThumbImg}
                    />
                    <div style={styles.playBtnWrap}>
                      <div style={styles.playBtn}>
                        <Icons.Play />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr style={styles.divider} />

      {/* --- COOKING NOTES (COMMENTS) --- */}
      <div style={styles.notesSection}>
        <h2 style={styles.sectionTitle}>Cooking note</h2>

        {/* Input Area */}
        <div style={styles.noteInputBox}>
          <textarea
            placeholder="State your opinion about the article"
            style={styles.textArea}
            rows="4"
          ></textarea>
          <button style={styles.sendBtn}>Send</button>
        </div>

        {/* Tabs */}
        <div style={styles.tabsRow}>
          <div
            style={activeTab === "all" ? styles.tabActive : styles.tab}
            onClick={() => setActiveTab("all")}
          >
            All Notes (32)
          </div>
          <div
            style={activeTab === "helpful" ? styles.tabActive : styles.tab}
            onClick={() => setActiveTab("helpful")}
          >
            Most Helpful (20)
          </div>
          <div
            style={activeTab === "private" ? styles.tabActive : styles.tab}
            onClick={() => setActiveTab("private")}
          >
            Private (1)
          </div>
        </div>

        {/* Comments List */}
        <div style={styles.commentsList}>
          {comments.map((comment) => (
            <div key={comment.id} style={styles.commentBlock}>
              <div style={styles.commentHeader}>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <div style={{ position: "relative" }}>
                    <img
                      src={comment.avatar}
                      alt={comment.author}
                      style={styles.commentAvatar}
                    />
                    <div style={styles.onlineDot}></div>
                  </div>
                  <span style={styles.commentAuthor}>{comment.author}</span>
                </div>
                <span style={styles.commentTime}>{comment.time}</span>
              </div>

              <div style={styles.commentBody}>
                <p style={styles.commentText}>{comment.text}</p>

                {/* Images attached to comment */}
                {comment.images && (
                  <div style={styles.commentImages}>
                    {comment.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="attached"
                        style={styles.attachedImg}
                      />
                    ))}
                  </div>
                )}

                <div style={styles.commentActions}>
                  <button style={styles.actionBtn}>
                    <Icons.Like />
                  </button>
                  <button style={styles.actionBtnText}>
                    Reply {comment.replyCount ? `(${comment.replyCount})` : ""}
                  </button>
                </div>
              </div>

              {/* Nested Replies */}
              {comment.replies && comment.replies.length > 0 && (
                <div style={styles.nestedReplies}>
                  {comment.replies.map((reply) => (
                    <div key={reply.id} style={styles.commentBlock}>
                      <div style={styles.commentHeader}>
                        <div
                          style={{
                            display: "flex",
                            gap: "12px",
                            alignItems: "center",
                          }}
                        >
                          <div style={{ position: "relative" }}>
                            <img
                              src={reply.avatar}
                              alt={reply.author}
                              style={styles.commentAvatar}
                            />
                            <div style={styles.onlineDot}></div>
                          </div>
                          <span style={styles.commentAuthor}>
                            {reply.author}
                          </span>
                        </div>
                        <span style={styles.commentTime}>{reply.time}</span>
                      </div>
                      <div style={styles.commentBody}>
                        <p style={styles.commentText}>{reply.text}</p>
                        <div style={styles.commentActions}>
                          <button style={styles.actionBtn}>
                            <Icons.Like />
                          </button>
                          <button style={styles.actionBtnText}>Reply</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button style={styles.showMoreBtn}>
              Show more discussion (47)
            </button>
          </div>
        </div>
      </div>

      <hr style={styles.divider} />

      {/* --- RECENTLY VIEWED --- */}
      <div style={styles.recentSection}>
        <h2 style={styles.sectionTitle}>
          Your Recently
          <br />
          Viewed
        </h2>

        <div style={styles.grid4}>
          {recentRecipes.map((recipe) => (
            <div key={recipe.id} style={styles.smallCard}>
              <img
                src={recipe.image}
                alt={recipe.title}
                style={styles.smallCardImg}
              />
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{recipe.title}</h3>
                <span style={styles.timeBadge}>{recipe.time}</span>
                <button style={styles.bookmarkBtnSm}>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. STYLES (INLINE)
// ==========================================
const brandColor = "#FA4A7D";

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    color: "#111827",
    backgroundColor: "#ffffff",
  },
  breadcrumb: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "40px",
    fontWeight: "500",
  },

  // Split Layout Top
  splitLayout: {
    display: "flex",
    gap: "50px",
    alignItems: "flex-start",
    marginBottom: "60px",
  },
  leftCol: {
    flex: "0 0 38%",
    display: "flex",
    flexDirection: "column",
    gap: "30px", // Chiếm khoảng 38% chiều rộng
  },
  rightCol: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },

  // Left Column Content
  recipeTitle: {
    fontSize: "36px",
    fontWeight: "800",
    margin: 0,
    lineHeight: "1.2",
    fontFamily: '"Georgia", serif',
  },
  recipeDesc: {
    fontSize: "15px",
    color: "#4b5563",
    lineHeight: "1.6",
    margin: 0,
  },
  authorCard: {
    border: "1px solid #E5E7EB",
    borderRadius: "16px",
    padding: "24px",
  },
  authorHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  authorAvatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  authorName: {
    fontSize: "16px",
    fontWeight: "600",
  },
  bookmarkBadge: {
    backgroundColor: brandColor,
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  statsRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  statLabel: {
    fontSize: "13px",
    color: "#6b7280",
  },
  statValue: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#111827",
  },
  ingredientsBox: {
    border: `1px dashed ${brandColor}`,
    borderRadius: "16px",
    padding: "32px 24px",
  },
  ingList: {
    listStyleType: "none",
    padding: 0,
    margin: "0 0 32px 0",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  ingItem: {
    fontSize: "15px",
    color: "#374151",
    lineHeight: "1.5",
  },
  groceryBtn: {
    width: "100%",
    backgroundColor: brandColor,
    color: "white",
    padding: "14px",
    borderRadius: "8px",
    border: "none",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
  },

  // Right Column Content
  heroImg: {
    width: "100%",
    height: "450px",
    objectFit: "cover",
    borderRadius: "24px",
  },
  stepsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  stepBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  stepTitle: {
    fontSize: "20px",
    fontWeight: "800",
    margin: "0",
    color: "#1F2937",
  },
  stepText: {
    fontSize: "15px",
    color: "#4B5563",
    lineHeight: "1.7",
    margin: 0,
  },
  videoBox: {
    position: "relative",
    width: "100%",
    height: "350px",
    borderRadius: "16px",
    overflow: "hidden",
    marginTop: "12px",
  },
  videoThumbImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  playBtnWrap: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  playBtn: {
    width: "50px",
    height: "50px",
    backgroundColor: brandColor,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    opacity: "0.9",
  },

  // Generic Divider
  divider: {
    border: "none",
    borderTop: "1px solid #E5E7EB",
    margin: "60px 0",
  },

  // Notes Section
  notesSection: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "28px",
    fontWeight: "800",
    marginBottom: "24px",
    fontFamily: '"Georgia", serif',
  },
  noteInputBox: {
    position: "relative",
    marginBottom: "30px",
  },
  textArea: {
    width: "100%",
    border: "1px solid #E5E7EB",
    borderRadius: "12px",
    padding: "20px",
    fontSize: "15px",
    color: "#111827",
    outline: "none",
    resize: "none",
    boxSizing: "border-box",
  },
  sendBtn: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    backgroundColor: brandColor,
    color: "white",
    border: "none",
    padding: "8px 24px",
    borderRadius: "20px",
    fontWeight: "600",
    cursor: "pointer",
  },
  tabsRow: {
    display: "flex",
    borderBottom: "1px solid #E5E7EB",
    marginBottom: "30px",
  },
  tab: {
    padding: "16px 32px",
    fontSize: "15px",
    color: "#6b7280",
    cursor: "pointer",
    fontWeight: "500",
  },
  tabActive: {
    padding: "16px 32px",
    fontSize: "15px",
    color: brandColor,
    borderBottom: `2px solid ${brandColor}`,
    cursor: "pointer",
    fontWeight: "600",
  },
  commentsList: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  commentBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  commentHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  commentAvatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  onlineDot: {
    position: "absolute",
    bottom: "0",
    right: "0",
    width: "10px",
    height: "10px",
    backgroundColor: "#10B981",
    border: "2px solid white",
    borderRadius: "50%",
  },
  commentAuthor: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#111827",
  },
  commentTime: {
    fontSize: "12px",
    color: "#9CA3AF",
  },
  commentBody: {
    paddingLeft: "52px", // Căn lề với text dựa trên độ rộng avatar
  },
  commentText: {
    fontSize: "14px",
    color: "#4B5563",
    lineHeight: "1.6",
    margin: "0 0 16px 0",
  },
  commentImages: {
    display: "flex",
    gap: "16px",
    marginBottom: "16px",
  },
  attachedImg: {
    width: "240px",
    height: "140px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  commentActions: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  actionBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    display: "flex",
    alignItems: "center",
  },
  actionBtnText: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    fontSize: "13px",
    color: brandColor,
    fontWeight: "500",
  },
  nestedReplies: {
    paddingLeft: "52px",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  showMoreBtn: {
    background: "none",
    border: "none",
    color: brandColor,
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },

  // Recently Viewed Section
  recentSection: {
    marginTop: "40px",
  },
  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "24px",
  },
  smallCard: {
    border: "1px solid #F3F4F6",
    borderRadius: "16px",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    position: "relative",
  },
  smallCardImg: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  cardContent: {
    padding: "20px",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#111827",
    margin: "0 0 12px 0",
    paddingRight: "40px",
    lineHeight: "1.4",
  },
  timeBadge: {
    backgroundColor: "#FCE7EE",
    color: brandColor,
    fontSize: "12px",
    fontWeight: "600",
    padding: "6px 12px",
    borderRadius: "8px",
    display: "inline-block",
  },
  bookmarkBtnSm: {
    position: "absolute",
    top: "200px",
    right: "20px",
    transform: "translateY(-50%)",
    backgroundColor: "#ffffff",
    border: "1px solid #F3F4F6",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
};

export default CookingGuidePage;
