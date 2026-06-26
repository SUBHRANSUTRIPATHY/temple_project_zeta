import { useState } from 'react';
import { Link } from 'react-router-dom';
import templeIcon from '../../assets/logo1.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>
            <img className="navbar-brand-icon" src={templeIcon} alt="" aria-hidden="true" />
            <span className="navbar-brand-copy">
              <span className="dhabaleswara-text">Dhabaleswara</span>
              <span className="mandir-text">Mandir</span>
            </span>
          </Link>
        </div>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/rituals" onClick={closeMenu}>Daily Rituals</Link>
          <Link to="/festivals" onClick={closeMenu}>Festivals</Link>
          <Link to="/services" onClick={closeMenu}>Devotee Services</Link>
          <Link to="/media" onClick={closeMenu}>Dynamic Media</Link>
          <Link to="/admin" onClick={closeMenu}>Administration</Link>
          <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
          <Link to="/helpdesk" onClick={closeMenu}>Helpdesk</Link>
        </div>

        <button className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
