import { Link } from 'react-router-dom';
import templeIcon from '../../assets/icon.png';
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
            Experience the divine serenity of Lord Shiva at the riverine island temple of Dhabaleswar.
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
            <div className="footer-map" aria-label="Google map for Dhabaleswar Island">
              <iframe
                title="Dhabaleswar Island Google Map"
                src="https://www.google.com/maps?q=Dhabaleswar%20Island%2C%20Mahanadi%20River%2C%20Cuttack%2C%20Odisha%20753001&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="footer-address">
              <p>Dhabaleswar Island</p>
              <p>Mahanadi River, Cuttack</p>
              <p>Odisha, India - 753001</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} Dhabaleswara Mandir. All rights reserved.</p>
          <div className="footer-socials">
            {/* Social icons can be added here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
