import { Link } from 'react-router-dom';
import templeIcon from '../../assets/logo1.jpg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-frame"></div>
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={templeIcon} alt="Dhabaleswara Mandir" />
            <div className="footer-brand-text">
              <span className="footer-title">Dhabaleswara</span>
              <span className="footer-subtitle">Mandir</span>
            </div>
          </div>
          <p className="footer-description">
            Experience the divine serenity of Lord Shiva at Baba Dhabaleswara Mandir in Gurujanga, Khordha.
          </p>
        </div>

        <div className="footer-links-section">
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/rituals">Daily Rituals</Link></li>
              <li><Link to="/festivals">Festivals</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services">Devotee Services</Link></li>
              <li><Link to="/media">Dynamic Media</Link></li>
              <li><Link to="/admin">Administration</Link></li>
              <li><Link to="/helpdesk">Helpdesk</Link></li>
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>
            <div className="footer-map" aria-label="Google map for Baba Dhabaleswara Mandir in Gurujanga, Khordha">
              <iframe
                title="Baba Dhabaleswara Mandir Gurujanga Khordha Google Map"
                src="https://www.google.com/maps?q=Baba%20Dhabaleswara%20Mandir%20Gurujanga%20Khordha%20Odisha%20India&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="footer-address">
              <p>Baba Dhabaleswara Mandir</p>
              <p>Gurujanga, Khordha</p>
              <p>Odisha, India</p>
            </div>
            
            {/* Social Icons under Contact Us */}
            <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ color: '#ff0000', fontSize: '1.4rem', textDecoration: 'none' }} title="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: '#e1306c', fontSize: '1.4rem', textDecoration: 'none' }} title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" style={{ color: '#000000', fontSize: '1.4rem', textDecoration: 'none' }} title="X (Twitter)">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: '#1877f2', fontSize: '1.4rem', textDecoration: 'none' }} title="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} Dhabaleswara Mandir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
