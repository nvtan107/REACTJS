import React from 'react';

// ==========================================
// 1. CÁC COMPONENT ICON (SVG)
// ==========================================
const Icons = {
  Logo: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="6" height="16" rx="3" fill="#3B82F6" />
      <rect x="10" y="10" width="6" height="10" rx="3" fill="#F43F5E" />
      <circle cx="20" cy="18" r="3" fill="#FBBF24" />
    </svg>
  ),
  Dashboard: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>,
  Folder: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>,
  Users: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Chart: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>,
  Message: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  Code: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  Search: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  Bell: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  Help: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  Cart: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F43F5E" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
  Dollar: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  UserAdd: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>,
  Edit: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
  ArrowUp: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>,
  Download: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F43F5E" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
  Upload: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F43F5E" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
};

// ==========================================
// 2. DỮ LIỆU MẪU
// ==========================================
const tableData = [
  { id: 1, name: 'Elizabeth Lee', company: 'AvatarSystems', value: '$359', date: '10/07/2023', status: 'New', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Carlos Garcia', company: 'SmoozeShift', value: '$747', date: '24/07/2023', status: 'New', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Elizabeth Bailey', company: 'Prime Time Telecom', value: '$564', date: '08/08/2023', status: 'In-progress', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'Ryan Brown', company: 'OmniTech Corporation', value: '$541', date: '31/08/2023', status: 'In-progress', avatar: 'https://i.pravatar.cc/150?u=4' },
  { id: 5, name: 'Ryan Young', company: 'DataStream Inc.', value: '$769', date: '01/05/2023', status: 'Completed', avatar: 'https://i.pravatar.cc/150?u=5' },
  { id: 6, name: 'Hailey Adams', company: 'FlowRush', value: '$922', date: '10/06/2023', status: 'Completed', avatar: 'https://i.pravatar.cc/150?u=6' },
];

// ==========================================
// 3. COMPONENT CHÍNH
// ==========================================
const DashboardPage = () => {
  return (
    <div style={styles.layout}>
      
      {/* --- SIDEBAR --- */}
      <aside style={styles.sidebar}>
        <div style={styles.logoArea}>
          <Icons.Logo />
          <span style={styles.logoText}>Logo</span>
        </div>

        <nav style={styles.navMenu}>
          <div style={{...styles.navItem, ...styles.navActive}}>
            <Icons.Dashboard /> Dashboard
          </div>
          <div style={styles.navItem}><Icons.Folder /> Projects</div>
          <div style={styles.navItem}><Icons.Users /> Teams</div>
          <div style={styles.navItem}><Icons.Chart /> Analytics</div>
          <div style={styles.navItem}><Icons.Message /> Messages</div>
          <div style={styles.navItem}><Icons.Code /> Integrations</div>
        </nav>

        {/* Promo Banner */}
        <div style={styles.promoBanner}>
          <div style={styles.promoIllustration}>
            {/* Giả lập hình minh họa bằng CSS Box */}
            <div style={{width: '60px', height: '60px', backgroundColor: '#E0E7FF', borderRadius: '8px', position: 'relative'}}>
                <div style={{width: '40px', height: '30px', backgroundColor: '#818CF8', position: 'absolute', bottom: '-10px', right: '-10px', borderRadius: '4px'}}></div>
            </div>
          </div>
          <h4 style={{margin: '0 0 12px 0', fontSize: '14px', fontWeight: 'bold'}}>V2.0 is available</h4>
          <button style={styles.promoBtn}>Try now</button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main style={styles.mainContent}>
        
        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.pageTitle}>Dashboard</h1>
          <div style={styles.headerActions}>
            <div style={styles.searchBar}>
              <Icons.Search />
              <input type="text" placeholder="Search..." style={styles.searchInput} />
            </div>
            <button style={styles.iconBtn}><Icons.Bell /></button>
            <button style={styles.iconBtn}><Icons.Help /></button>
            <img src="https://i.pravatar.cc/150?u=99" alt="User" style={styles.userAvatar} />
          </div>
        </header>

        {/* Overview Cards */}
        <div style={{marginBottom: '32px'}}>
          <div style={styles.sectionHeader}>
            <Icons.Dashboard /> <h2 style={styles.sectionTitle}>Overview</h2>
          </div>
          
          <div style={styles.cardsGrid}>
            {/* Card 1 */}
            <div style={{...styles.card, backgroundColor: '#FFF1F2'}}> {/* Light Pink */}
              <div style={styles.cardTop}>
                <div>
                  <p style={styles.cardLabel}>Turnover</p>
                  <h3 style={styles.cardValue}>$92,405</h3>
                </div>
                <div style={{...styles.cardIconBox, color: '#F43F5E', border: '1px solid #FECDD3'}}>
                  <Icons.Cart />
                </div>
              </div>
              <div style={styles.cardBottom}>
                <span style={styles.positiveChange}><Icons.ArrowUp /> 5.39%</span> period of change
              </div>
            </div>

            {/* Card 2 */}
            <div style={{...styles.card, backgroundColor: '#F0F9FF'}}> {/* Light Blue */}
              <div style={styles.cardTop}>
                <div>
                  <p style={styles.cardLabel}>Profit</p>
                  <h3 style={styles.cardValue}>$32,218</h3>
                </div>
                <div style={{...styles.cardIconBox, color: '#3B82F6', border: '1px solid #BFDBFE'}}>
                  <Icons.Dollar />
                </div>
              </div>
              <div style={styles.cardBottom}>
                <span style={styles.positiveChange}><Icons.ArrowUp /> 5.39%</span> period of change
              </div>
            </div>

            {/* Card 3 */}
            <div style={{...styles.card, backgroundColor: '#F0FDFA'}}> {/* Light Teal */}
              <div style={styles.cardTop}>
                <div>
                  <p style={styles.cardLabel}>New customer</p>
                  <h3 style={styles.cardValue}>298</h3>
                </div>
                <div style={{...styles.cardIconBox, color: '#3B82F6', border: '1px solid #BFDBFE'}}>
                  <Icons.UserAdd />
                </div>
              </div>
              <div style={styles.cardBottom}>
                <span style={styles.positiveChange}><Icons.ArrowUp /> 6.84%</span> period of change
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Report Table */}
        <div>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
            <div style={styles.sectionHeader}>
              <Icons.Folder /> <h2 style={styles.sectionTitle}>Detailed report</h2>
            </div>
            <div style={{display: 'flex', gap: '12px'}}>
              <button style={styles.actionBtn}><Icons.Download /> Import</button>
              <button style={styles.actionBtn}><Icons.Upload /> Export</button>
            </div>
          </div>

          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}><input type="checkbox" /></th>
                  <th style={styles.th}>CUSTOMER NAME</th>
                  <th style={styles.th}>COMPANY</th>
                  <th style={styles.th}>ORDER VALUE</th>
                  <th style={styles.th}>ORDER DATE</th>
                  <th style={styles.th}>STATUS</th>
                  <th style={styles.th}></th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id} style={styles.tr}>
                    <td style={styles.td}><input type="checkbox" /></td>
                    <td style={styles.td}>
                      <div style={styles.userCell}>
                        <img src={row.avatar} alt={row.name} style={styles.tableAvatar} />
                        <span style={styles.tableName}>{row.name}</span>
                      </div>
                    </td>
                    <td style={styles.td}>{row.company}</td>
                    <td style={styles.td}>{row.value}</td>
                    <td style={styles.td}>{row.date}</td>
                    <td style={styles.td}>
                      <span style={{
                        ...styles.statusBadge,
                        ...(row.status === 'New' ? styles.statusNew : 
                           row.status === 'In-progress' ? styles.statusProgress : 
                           styles.statusCompleted)
                      }}>
                        {row.status}
                      </span>
                    </td>
                    <td style={{...styles.td, textAlign: 'right'}}>
                      <button style={{background: 'none', border: 'none', cursor: 'pointer'}}><Icons.Edit /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Pagination */}
            <div style={styles.pagination}>
              <span style={{fontSize: '12px', color: '#6B7280'}}>63 results</span>
              <div style={styles.pageNumbers}>
                <span style={styles.pageIcon}>&lt;</span>
                <span style={{...styles.pageNum, ...styles.pageNumActive}}>1</span>
                <span style={styles.pageNum}>2</span>
                <span style={styles.pageNum}>3</span>
                <span style={styles.pageNum}>4</span>
                <span style={{color: '#9CA3AF'}}>...</span>
                <span style={styles.pageNum}>10</span>
                <span style={styles.pageNum}>11</span>
                <span style={styles.pageIcon}>&gt;</span>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
};

// ==========================================
// 4. STYLES (INLINE)
// ==========================================
const brandColor = '#F43F5E'; // Pink/Red từ ảnh

const styles = {
  layout: {
    display: 'flex',
    height: '100vh',
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    backgroundColor: '#ffffff',
    color: '#1F2937'
  },
  
  // --- SIDEBAR ---
  sidebar: {
    width: '260px',
    borderRight: '1px solid #E5E7EB',
    padding: '24px 20px',
    display: 'flex',
    flexDirection: 'column'
  },
  logoArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '40px'
  },
  logoText: {
    fontSize: '24px',
    fontWeight: '800',
    letterSpacing: '-0.5px'
  },
  navMenu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: 1
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '15px',
    color: '#6B7280',
    cursor: 'pointer',
    fontWeight: '500'
  },
  navActive: {
    backgroundColor: brandColor,
    color: '#ffffff',
  },
  promoBanner: {
    backgroundColor: '#F3F4F6',
    borderRadius: '16px',
    padding: '24px 20px',
    textAlign: 'center',
    marginTop: 'auto'
  },
  promoIllustration: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '16px'
  },
  promoBtn: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#ffffff',
    border: '1px solid #D1D5DB',
    borderRadius: '8px',
    color: '#374151',
    fontWeight: '600',
    cursor: 'pointer'
  },

  // --- MAIN CONTENT ---
  mainContent: {
    flex: 1,
    padding: '32px 40px',
    backgroundColor: '#FAFAFA', // Màu nền hơi xám nhẹ
    overflowY: 'auto'
  },
  
  // Header
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px'
  },
  pageTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: brandColor,
    margin: 0
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    padding: '8px 16px',
    borderRadius: '8px',
    width: '250px'
  },
  searchInput: {
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    marginLeft: '8px',
    fontSize: '14px',
    width: '100%'
  },
  iconBtn: {
    background: 'none', border: 'none', cursor: 'pointer', padding: '4px'
  },
  userAvatar: {
    width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover'
  },

  // Section Headers
  sectionHeader: {
    display: 'flex', alignItems: 'center', gap: '8px', color: brandColor, marginBottom: '16px'
  },
  sectionTitle: {
    fontSize: '18px', fontWeight: '700', color: '#1F2937', margin: 0
  },

  // Cards
  cardsGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px'
  },
  card: {
    padding: '24px', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px'
  },
  cardTop: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'
  },
  cardLabel: {
    fontSize: '14px', fontWeight: '600', color: '#374151', margin: '0 0 8px 0'
  },
  cardValue: {
    fontSize: '28px', fontWeight: '800', color: '#111827', margin: 0
  },
  cardIconBox: {
    width: '40px', height: '40px', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff'
  },
  cardBottom: {
    fontSize: '13px', color: '#6B7280'
  },
  positiveChange: {
    color: '#10B981', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '4px'
  },

  // Table Area
  actionBtn: {
    display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: '#ffffff', border: `1px solid #FECDD3`, color: brandColor, borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer'
  },
  tableContainer: {
    backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #E5E7EB', overflow: 'hidden'
  },
  table: {
    width: '100%', borderCollapse: 'collapse', textAlign: 'left'
  },
  th: {
    padding: '16px 20px', fontSize: '12px', fontWeight: '700', color: '#6B7280', textTransform: 'uppercase', borderBottom: '1px solid #E5E7EB', backgroundColor: '#F9FAFB'
  },
  tr: {
    borderBottom: '1px solid #F3F4F6'
  },
  td: {
    padding: '16px 20px', fontSize: '14px', color: '#374151', verticalAlign: 'middle'
  },
  userCell: {
    display: 'flex', alignItems: 'center', gap: '12px'
  },
  tableAvatar: {
    width: '32px', height: '32px', borderRadius: '50%'
  },
  tableName: {
    fontWeight: '600', color: '#111827'
  },
  
  // Status Badges
  statusBadge: {
    padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600'
  },
  statusNew: { backgroundColor: '#EFF6FF', color: '#3B82F6' },
  statusProgress: { backgroundColor: '#FEF3C7', color: '#D97706' },
  statusCompleted: { backgroundColor: '#D1FAE5', color: '#10B981' },

  // Pagination
  pagination: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderTop: '1px solid #E5E7EB'
  },
  pageNumbers: {
    display: 'flex', gap: '8px', alignItems: 'center'
  },
  pageNum: {
    width: '28px', height: '28px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', fontSize: '13px', color: '#6B7280', cursor: 'pointer'
  },
  pageNumActive: {
    backgroundColor: brandColor, color: '#ffffff', fontWeight: 'bold'
  },
  pageIcon: {
    color: '#9CA3AF', cursor: 'pointer', fontSize: '14px', padding: '0 4px'
  }
};

export default DashboardPage;