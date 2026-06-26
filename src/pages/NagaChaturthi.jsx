import './Home.css';

const worshipItems = [
  {
    title: 'Naga Puja',
    description:
      'Devotees worship the serpent deities with milk, flowers, turmeric, sandal paste, and prayers for protection from harm.'
  },
  {
    title: 'Family Welfare',
    description:
      'The observance is connected with blessings for children, family peace, fertility, and the removal of fear and obstacles.'
  },
  {
    title: 'Respect for Nature',
    description:
      'Naga worship reminds devotees to honor the unseen guardians of land, water, soil, and the natural world.'
  }
];

const offeringItems = [
  'Milk, water, turmeric, sandal paste, flowers, and bel leaves',
  'Fasting or simple sattvic food according to family tradition',
  'Prayers to Lord Shiva, who is closely associated with Vasuki and serpent symbolism'
];

const NagaChaturthi = () => {
  return (
    <div className="festival-long-page">
      <section className="festival-detail-hero">
        <p className="festival-kicker">Serpent Worship</p>
        <h1>Naga Chaturthi</h1>
        <p>
          Naga Chaturthi is observed with reverence for the serpent deities,
          seeking protection, prosperity, fertility, and harmony with nature.
        </p>
      </section>

      <section className="festival-info-section">
        <div className="ritual-timeline-header">
          <p className="festival-kicker">Sacred Symbolism</p>
          <h2>The Protective Power of the Nagas</h2>
          <p>
            In Shaivite tradition, serpents are deeply connected with Lord Shiva.
            Their worship represents protection, spiritual energy, restraint, and
            respect for life around the devotee.
          </p>
        </div>

        <div className="festival-card-grid">
          {worshipItems.map((item) => (
            <article className="festival-mini-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="festival-info-section">
        <div className="ritual-timeline-header">
          <p className="festival-kicker">Offerings</p>
          <h2>Devotional Observances</h2>
        </div>

        <div className="festival-list-panel">
          {offeringItems.map((item) => (
            <div className="festival-list-row" key={item}>
              <span></span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="festival-two-column">
          <article className="festival-text-card">
            <h3>Connection to Lord Shiva</h3>
            <p>
              Lord Shiva is often shown with a serpent around his neck, symbolizing
              mastery over fear, time, ego, and destructive forces.
            </p>
          </article>
          <article className="festival-text-card warm-card">
            <h3>Prayer for Protection</h3>
            <p>
              Devotees pray for household safety, good health, and the removal of
              dosha, fear, and obstacles from family life.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default NagaChaturthi;
