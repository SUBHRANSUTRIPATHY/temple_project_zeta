
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import slide1 from '../assets/slid1.jpg';
import slide2 from '../assets/slid2.jpg';
import slide3 from '../assets/slid3.jpg';
import slide4 from '../assets/slid4.jpg';
import dbltImage from '../assets/dblt.jpeg';
import './Home.css';

const slides = [
  {
    image: slide1,
    title: 'Welcome to Dhabaleswara Mandir',
    subtitle: 'Experience the joy of devotion',
  },
  {
    image: slide2,
    title: 'Divine Serenity',
    subtitle: 'Connect with the divine in peace',
  },
  {
    image: slide3,
    title: 'Chant. Dance. Feast. Serve.',
    subtitle: 'A sacred place for prayer and peace',
  },
  {
    image: slide4,
    title: 'Celebrate Every Festival',
    subtitle: 'Join the temple community in devotion',
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
          Tucked away in the heart of Gurujanga, Khordha town, Odisha, India, the historic Baba Dhabaleswara Mandir stands as a vital spiritual landmark and a cherished cultural anchor for the entire region. Dedicated entirely to the worship of Lord Shiva, this vibrant shrine has cultivated a rich legacy of devotion spanning over two centuries. The temple is especially revered for its unique presiding deity—a rare Patala Phita Shivalinga, which translates to a partially submerged or underworld deity that symbolizes the deep cosmic roots of Lord Shiva. This sacred idol draws generations of passionate devotees who travel from all over the district to offer prayers, perform rituals, and seek divine blessings.The temple complex is beautifully maintained, offering a clean, quiet, and tranquil environment that serves as a perfect sanctuary for those looking to escape the bustle of daily life and find inner peace. During major Hindu festivals such as Maha Shivaratri, Kartika Purnima, and the locally celebrated Bada Osha, the entire atmosphere transforms. The peaceful grounds come alive with traditional oil lamps, vibrant decorations, and the rhythmic chanting of Vedic hymns, elevating the spiritual energy of the site. Ultimately, the serene and sacred ambiance in which the temple is situated seamlessly blends historical heritage with a profound sense of divinity, inspiring deep spiritual feelings among one and all.
        </p>
      </div>

      <section className="mythical-origin-section">
        <div className="mythical-origin-container">
          <div className="mythical-origin-content">
            <div className="mythical-origin-image-container">
              <div className="mythical-origin-header reveal" style={{ marginBottom: '15px' }}>
                <h2>Mythical Origin</h2>
              </div>
              <div className="mythical-origin-image reveal">
                <img src={dbltImage} alt="Lord Dhabaleswar Temple Mythical Origin" />
              </div>
            </div>
            <div className="mythical-origin-text reveal">
              <p>
                Taking pity on him, the Lord appeared as a Sanyassin before the crowd and asked them the cause of their agitation. On being told that they suspected the thief of hiding in the sanctum along with the black calf, the sanyassin brought the calf outside to dispel their doubts. The calf turned out to be white, seeing which the crowd let the thief go.
              </p>

              <p>
                The sanyassin disappeared and the thief realized who had come to his aid. He confessed and apologized to the crowd, and took a vow to spend the rest of his life in the service of the Lord. The act of turning a black calf to white caused Lord Shiva to be also known as Dhabaleswara.
              </p>
              <p>
                To the absolute shock and bewilderment of the entire gathering, the calf was no longer black. Through a supreme act of divine illusion, its coat had been transformed into a pristine, snow-white color. Stunned by this undeniable visual proof, the crowd concluded they had falsely accused an innocent man. Ashamed of their aggression, they immediately disperses and let the traveler go free.
              </p>
              <p>As the crowd scattered, the enigmatic Sanyassin suddenly vanished into thin air. Standing alone in the quiet courtyard, the thief instantly realized the profound truth. It was not a mere monk who had saved him, but the Supreme Lord of the Universe who had answered his desperate plea.
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
                <Link to="/sitalasasti" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Sitalasasti
                </Link>
              </h3>
              <p>The divine marriage of Lord Shiva and Goddess Parvati, celebrated with grand processions.</p>
            </div>
            <div className="attraction-card reveal">
              <h3>
                <Link to="/makar-sankranti" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Makar Sankranti
                </Link>
              </h3>
              <p>Celebrating the transition of the Sun with holy dips and special Makar Chaula offering.</p>
            </div>
            <div className="attraction-card reveal">
              <h3>
                <Link to="/pausha-purnima" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Pausha Purnima
                </Link>
              </h3>
              <p>A significant lunar event in the month of Pausha with special abhishek and divine rituals.</p>
            </div>
            <div className="attraction-card reveal">
              <h3>
                <Link to="/dola-purnima" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Dola Purnima
                </Link>
              </h3>
              <p>The festival of colors celebrated with a divine procession and traditional fervor.</p>
            </div>
            <div className="attraction-card reveal">
              <h3>
                <Link to="/kartika-purnima" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Kartika Purnima
                </Link>
              </h3>
              <p>Sacred Boita Bandana celebrating the maritime glory of ancient Odisha at the holy Mahanadi.</p>
            </div>
            <div className="attraction-card reveal">
              <h3>
                <Link to="/naga-chaturthi" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Naga Chaturthi
                </Link>
              </h3>
              <p>A sacred serpent worship festival observed with prayers for protection and family welfare.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="architecture-section">
        <div className="architecture-container">
          <div className="architecture-header reveal">
            <h2>Architecture</h2>
          </div>
          <div className="architecture-content reveal">
            <p>
              Dating back to the early 10th and 11th centuries CE, the original temple structure of Dhabaleswara Mandir was constructed under the royal patronage of the Somavamshi dynasty by King Yayati Keshari. Nestled on a serene riverine island in the Mahanadi River, the site was strategically chosen on a natural rocky hillock to elevate the sacred shrine, safeguarding it against seasonal floods over the centuries. In later centuries, the temple underwent extensive renovations, expansions, and repairs by the rulers of the Khurda and Athgarh regions, transforming it into the resilient complex seen today.
            </p>
            <p>
              Architecturally, the temple stands as a magnificent example of the classic Kalinga style of temple architecture. Built predominantly from durable sandstone, the complex features a soaring Rekha Deula (curvilinear spire) housing the sacred Shiva lingam, which rises beautifully beside a pyramidal Jagamohana (assembly hall). The entire structure is adorned with intricate stone carvings portraying mythological scenes, animals, and traditional Shaivite iconography. This timeless stone craftsmanship, paired with its isolated location and modern suspension footbridge, blends historical architectural grandeur seamlessly with its natural island landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="location-page home-location-section">
        <div className="festival-detail-hero location-heading">
          <h1>Location</h1>
        </div>

        <div className="location-section" style={{ gridTemplateColumns: '1fr' }}>
          <article className="location-info-card">
            <p>
              The Dhabaleswar Temple located in Khordha, specifically in the
              Gurujanga area, is a highly revered Hindu shrine dedicated to Lord
              Shiva. It serves as an important spiritual and cultural hub for local
              devotees in the region.
            </p>
            <p>
              The temple is known locally as a peaceful place for daily worship,
              family prayers, and festival gatherings. Devotees visit to seek the
              blessings of Baba Dhabaleswara for health, protection, prosperity, and
              spiritual strength.
            </p>
            <p>
              Its location in Gurujanga makes it easily connected with Khordha town
              and nearby villages, allowing the shrine to remain closely woven into
              the religious and cultural life of the surrounding community.
            </p>

            <div className="location-detail-list">
              <div>
                <span>Location</span>
                <strong>Gurujanga, Khordha, Odisha, India</strong>
              </div>
              <div>
                <span>Primary Deity</span>
                <strong>Lord Shiva, Baba Dhabaleswara</strong>
              </div>
              <div>
                <span>Significance</span>
                <strong>
                  A local pilgrimage site visited during Maha Shivaratri and Bada
                  Osha celebrations.
                </strong>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Home;
