import React from 'react';
import ContinueButton from './ContinueButton';
import SocialButton from './SocialButton';

// Nhớ đổi đường dẫn này trỏ tới bức ảnh đĩa thức ăn của bạn
import cookingImage from '../assets/loginpicture.jpg'; 

const LoginModal = () => {
  return (
    <div style={styles.overlay}>
      <div style={styles.modalContainer}>
        
        {/* === NỬA TRÁI: HÌNH ẢNH & TEXT === */}
        <div style={styles.leftPanel}>
          <img src={cookingImage} alt="Cooking" style={styles.image} />
          <div style={styles.imageOverlay}>
            <h2 style={styles.quoteText}>
              "Embrace the art of<br/>cooking, where flavors<br/>come alive!"
            </h2>
          </div>
        </div>

        {/* === NỬA PHẢI: FORM ĐĂNG NHẬP === */}
        <div style={styles.rightPanel}>
          {/* Nút Close */}
          <button style={styles.closeButton}>✕</button>

          <h1 style={styles.title}>Login</h1>
          <p style={styles.subtitle}>Enter your email to log in.</p>

          {/* Ô nhập Email */}
          <input 
            type="email" 
            placeholder="Enter your email" 
            style={styles.inputField} 
          />

          <ContinueButton onClick={() => console.log('Continue clicked')} />

          {/* Đường kẻ OR */}
          <div style={styles.dividerContainer}>
            <div style={styles.line}></div>
            <span style={styles.orText}>OR</span>
            <div style={styles.line}></div>
          </div>

          {/* Đoạn text điều khoản */}
          <p style={styles.termsText}>
            By continuing, you agree to the updated <b>Terms of Sale</b>, <b>Terms of Service</b>, and <b>Privacy Policy</b>.
          </p>

          {/* Các nút Social */}
          <div style={styles.socialGroup}>
            {/* Bạn có thể thay ký tự text G, f,  bằng thẻ <svg> hoặc <img> icon thật của bạn */}
            <SocialButton 
              icon={<span style={{color: '#ea4335'}}>G</span>} 
              text="Continue with Google" 
              textColor="#ea4335" 
            />
            <SocialButton 
              icon={<span style={{color: '#1877f2'}}>f</span>} 
              text="Continue with Facebook" 
              textColor="#1877f2" 
            />
            <SocialButton 
              icon={<span style={{color: '#000000'}}></span>} 
              text="Continue with Apple" 
              textColor="#000000" 
            />
          </div>
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
    backgroundColor: '#f5f5f5', 
    padding: '20px'
  },
  modalContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: '900px', // Khung này rộng hơn khung trước
    borderRadius: '16px',
    overflow: 'hidden', // Để bo góc cắt luôn viền ảnh
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    fontFamily: '"Inter", "Segoe UI", sans-serif'
  },
  leftPanel: {
    flex: '1', // Chiếm 50%
    position: 'relative',
    minHeight: '500px'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)', // Phủ một lớp đen mỏng cho chữ dễ đọc hơn nếu cần
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '60px'
  },
  quoteText: {
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: '1.4',
    textShadow: '1px 1px 4px rgba(0,0,0,0.3)' // Đổ bóng nhẹ giúp chữ trắng nổi bật trên nền ảnh
  },
  rightPanel: {
    flex: '1', // Chiếm 50%
    padding: '40px 50px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  closeButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    color: '#666',
    cursor: 'pointer'
  },
  title: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#111827',
    marginBottom: '10px',
    marginTop: 0
  },
  subtitle: {
    fontSize: '15px',
    color: '#4b5563',
    marginBottom: '20px'
  },
  inputField: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#f3f4f6',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box'
  },
  dividerContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '25px 0'
  },
  line: {
    flex: 1,
    height: '1px',
    backgroundColor: '#e5e7eb'
  },
  orText: {
    padding: '0 15px',
    color: '#9ca3af',
    fontSize: '12px',
    fontWeight: '500'
  },
  termsText: {
    fontSize: '11px',
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: '1.5',
    marginBottom: '20px',
    padding: '0 10px'
  },
  socialGroup: {
    display: 'flex',
    flexDirection: 'column'
  }
};

export default LoginModal;