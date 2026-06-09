
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import slid from '../assets/slid.webp';
import slide1 from '../assets/slid1.webp';
import slide2 from '../assets/slid2.webp';
import slide3 from '../assets/slide3.webp';
import slide4 from '../assets/slide4.webp';
import slide5 from '../assets/slide5.webp';
import dbltImage from '../assets/dblt.jpg';
import './Home.css';

const slides = [
  {
    image: slid,
    title: 'Welcome to Dhabaleswara Mandir',
    subtitle: 'Experience the joy of devotion',
  },
  {
    image: slide1,
    title: 'Divine Serenity',
    subtitle: 'Connect with the divine in peace',
  },
  {
    image: slide2,
    title: 'Chant. Dance. Feast. Serve.',
    subtitle: 'A sacred place for prayer and peace',
  },
  {
    image: slide3,
    title: 'Celebrate Every Festival',
    subtitle: 'Join the temple community in devotion',
  },
  {
    image: slide4,
    title: 'Daily Rituals and Darshan',
    subtitle: 'Begin each day with divine blessings',
  },
  {
    image: slide5,
    title: 'Serve With Love',
    subtitle: 'Be part of seva, tradition, and togetherness',
  },
];

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    const timer = window.setInterval(showNextSlide, 5000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.home-page .reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      <section className="hero-slider" aria-label="Temple highlights">
        {slides.map((slide, index) => (
          <div
            className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
            key={slide.image}
            aria-hidden={index !== activeSlide}
          >
            <img src={slide.image} alt="" />
          </div>
        ))}

        <div className="hero-slider-content">
          <h1>{slides[activeSlide].title}</h1>
          <p>{slides[activeSlide].subtitle}</p>
        </div>

        <button className="slider-arrow slider-arrow-left" onClick={showPreviousSlide} aria-label="Previous slide">
          <span aria-hidden="true">‹</span>
        </button>
        <button className="slider-arrow slider-arrow-right" onClick={showNextSlide} aria-label="Next slide">
          <span aria-hidden="true">›</span>
        </button>

        <div className="slider-dots" aria-label="Select slide">
          {slides.map((slide, index) => (
            <button
              className={index === activeSlide ? 'active' : ''}
              key={slide.image}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <div className="description-section">
        <h1 className="reveal">Dhabaleswara Mandir<span style={{ fontSize: '0.6em', color: 'var(--text)' }}></span></h1>
        <p className="reveal">
          Dhabaleswar Temple is dedicated to the worship of Lord Shiva. It is situated at a distance of 27 km from the city of Cuttack, Odisha, India, on the riverine island of Lord Dhabaleshwar. The temple, located on an island on River Mahanadi, is embellished with stone carvings that date back to the early 10th and 11th century. The serene ambiance, in which the temple is situated, inspires spiritual feeling among one and all.
        </p>
      </div>

      <section className="mythical-origin-section">
        <div className="mythical-origin-container">
          <div className="mythical-origin-header reveal">
            <h2>Mythical Origin</h2>
          </div>
          <div className="mythical-origin-content">
            <div className="mythical-origin-image reveal">
              <img src={dbltImage} alt="Lord Dhabaleswar Temple Mythical Origin" />
            </div>
            <div className="mythical-origin-text reveal">
              <p>
                Taking pity on him, the Lord appeared as a Sanyassin before the crowd and asked them the cause of their agitation. On being told that they suspected the thief of hiding in the sanctum along with the black calf, the sanyassin brought the calf outside to dispel their doubts. The calf turned out to be white, seeing which the crowd let the thief go.
              </p>

              <p>
                The sanyassin disappeared and the thief realized who had come to his aid. He confessed and apologized to the crowd, and took a vow to spend the rest of his life in the service of the Lord. The act of turning a black calf to white caused Lord Shiva to be also known as Dhabaleswara.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="attractions-section">
        <div className="attractions-container">
          <h2 className="reveal">Attractions</h2>
          <div className="attractions-grid">
            <div className="attraction-card reveal">
              <h3>
                <Link to="/festivals" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Bada-osha
                </Link>
              </h3>
              <p>A big fair is held on the shukla paksha chaturdashi of the month Kartika called Bada-osha.</p>
            </div>
            <div className="attraction-card reveal">
              <h3>
                <Link to="/festivals" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Shivaratri
                </Link>
              </h3>
              <p>One of the most important festivals celebrated with great devotion and night-long rituals.</p>
            </div>
            <div className="attraction-card reveal">
              <h3>
                <Link to="/festivals" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Various Functions
                </Link>
              </h3>
              <p>Festivals like Pausha purnima, Dola purnima, and Kartika purnima are celebrated here with traditional fervor.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
