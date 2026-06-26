import './Home.css';

const Helpdesk = () => {
  return (
    <div className="festival-long-page" style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
      <section className="festival-detail-hero" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p className="festival-kicker">Support Desk</p>
        <h1 style={{ color: '#d32f2f', fontSize: '3rem', marginBottom: '10px' }}>Helpdesk</h1>
        <p style={{ color: '#555' }}>Need assistance? Visit our FAQ section or connect with us on our social media platforms.</p>
      </section>

      <section className="festival-info-section" style={{ padding: '40px', background: '#ffffff', borderRadius: '12px', border: '1px solid rgba(79, 43, 22, 0.12)', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          
          {/* Contact Details Card */}
          <div style={{ background: '#fdfaf5', padding: '25px', borderRadius: '8px', border: '1px solid rgba(79, 43, 22, 0.08)' }}>
            <h3 style={{ color: '#4f2b16', marginBottom: '15px', fontSize: '1.3rem' }}>Support Hotlines</h3>
            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '8px' }}>
              <strong>Phone:</strong> +91 6755 123456
            </p>
            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '8px' }}>
              <strong>Email:</strong> support@dhabaleswaramandir.in
            </p>
            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6' }}>
              <strong>Hours:</strong> 6:00 AM - 9:00 PM (IST)
            </p>
          </div>

          {/* Social Channels Card */}
          <div style={{ background: '#fdfaf5', padding: '25px', borderRadius: '8px', border: '1px solid rgba(79, 43, 22, 0.08)', textAlign: 'center' }}>
            <h3 style={{ color: '#4f2b16', marginBottom: '15px', fontSize: '1.3rem' }}>Follow Us</h3>
            <p style={{ color: '#555', fontSize: '0.95rem', marginBottom: '20px', lineHeight: '1.6' }}>
              Stay updated with daily rituals, events, festivals, and live webcasts.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ color: '#ff0000', fontSize: '1.8rem', textDecoration: 'none' }} title="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: '#e1306c', fontSize: '1.8rem', textDecoration: 'none' }} title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" style={{ color: '#000000', fontSize: '1.8rem', textDecoration: 'none' }} title="X (Twitter)">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: '#1877f2', fontSize: '1.8rem', textDecoration: 'none' }} title="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Helpdesk;
