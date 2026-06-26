

import './Home.css';

const ContactUs = () => {
  return (
    <div className="location-page">
      <section className="festival-detail-hero">
        <p className="festival-kicker">Temple Location</p>
        <h1>Location</h1>
        <p>Find the temple location and key details before planning your visit.</p>
      </section>

      <section className="location-section">
        <div className="location-map-card" aria-label="Dhabaleswar Temple location map">
          <iframe
            title="Dhabaleswar Temple Gurujanga Khordha location"
            src="https://www.google.com/maps?q=Dhabaleswar%20Temple%20Gurujanga%20Khordha%20Odisha%20India&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>

        <article className="location-info-card">
          <p>
            The Dhabaleswar Temple located in Khordha, specifically in the
            Gurujanga area, is a highly revered Hindu shrine dedicated to Lord
            Shiva. It serves as an important spiritual and cultural hub for local
            devotees in the region.
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
      </section>
    </div>
  );
};

export default ContactUs;
