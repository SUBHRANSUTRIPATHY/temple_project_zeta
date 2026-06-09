import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import templeIcon from './assets/icon.png';
import Home from './pages/Home';
import About from './pages/About';
import DailyRituals from './pages/DailyRituals';
import Festivals from './pages/Festivals';
import Shivaratri from './pages/Shivaratri';
import BadaOsha from './pages/BadaOsha';
import VariousFunctions from './pages/VariousFunctions';
import DevoteeServices from './pages/DevoteeServices';
import DynamicMedia from './pages/DynamicMedia';
import Administration from './pages/Administration';
import ContactUs from './pages/ContactUs';
import Helpdesk from './pages/Helpdesk';
import ScreenSort from './pages/ScreenSort';
import './App.css';

const PageTransitionSplash = () => {
  const location = useLocation();
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (!hasMounted) {
      setHasMounted(true);
      return undefined;
    }

    setIsPageLoading(true);
    const timer = window.setTimeout(() => {
      setIsPageLoading(false);
    }, 450);

    return () => window.clearTimeout(timer);
  }, [location.pathname, hasMounted]);

  if (!isPageLoading) {
    return null;
  }

  return (
    <div className="page-splash" role="status" aria-live="polite" aria-label="Loading page">
      <div className="page-splash-loader" aria-hidden="true"></div>
    </div>
  );
};

const PageRevealObserver = () => {
  const location = useLocation();

  useEffect(() => {
    let observer;
    const frame = window.requestAnimationFrame(() => {
      const mainContent = document.querySelector('.main-content');

      if (!mainContent) {
        return;
      }

      const revealTargets = mainContent.querySelectorAll(
        'h1, h2, h3, p, img, li, .attraction-card, .festival-card, .service-card, .media-card, .admin-card, .contact-card, .ritual-card'
      );

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: '0px 0px -36px 0px' }
      );

      revealTargets.forEach((element) => {
        if (element.closest('.hero-slider')) {
          return;
        }

        if (!element.classList.contains('reveal') && element.closest('.reveal')) {
          return;
        }

        element.classList.add('reveal');
        observer.observe(element);
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [location.pathname]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="splash-screen" role="status" aria-live="polite" aria-label="Loading Dhabaleswara Mandir">
        <div className="splash-card">
          <img className="splash-logo" src={templeIcon} alt="Dhabaleswara Mandir" />
          <div className="splash-title">
            <span>Dhabaleswara</span>
            <span>Mandir</span>
          </div>
          <div className="splash-loader" aria-hidden="true"></div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <PageTransitionSplash />
      <PageRevealObserver />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rituals" element={<DailyRituals />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/shivaratri" element={<Shivaratri />} />
          <Route path="/bada-osha" element={<BadaOsha />} />
          <Route path="/various-functions" element={<VariousFunctions />} />
          <Route path="/services" element={<DevoteeServices />} />
          <Route path="/media" element={<DynamicMedia />} />
          <Route path="/admin" element={<Administration />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/helpdesk" element={<Helpdesk />} />
          <Route path="/screen-sort" element={<ScreenSort />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
