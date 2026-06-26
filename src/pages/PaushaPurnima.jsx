import './Home.css';

const ritualItems = [
  {
    title: 'The Sunrise Mahanadi Snan',
    description:
      'At dawn, pilgrims cross the bridge or take boats to bathe in the Mahanadi, a purification rite believed to cleanse lifelong impurities.'
  },
  {
    title: 'Surya Arghya & Shiva Abhishekam',
    description:
      'Devotees offer water oblations to the rising winter sun, then worship the Shiva Lingam with water, milk, curd, and honey.'
  },
  {
    title: 'The Winter Fasting',
    description:
      'Many observe a strict sattvic or waterless fast, spending the day in meditation, japa, and listening to holy scriptures.'
  }
];

const charityItems = [
  'Thick woolen blankets and warm clothing',
  'Winter grains, millets, jaggery, and sesame sweets',
  'Hot community meals such as Khichdi served near temple exits'
];

const PaushaPurnima = () => {
  return (
    <div className="festival-long-page">
      <section className="festival-detail-hero">
        <p className="festival-kicker">Winter Full Moon</p>
        <h1>Pausha Purnima</h1>
        <p>
          Pausha Purnima is a festival of inner cleansing, spiritual discipline,
          gratitude, charity, and full-moon devotion at Dhabaleswar Temple.
        </p>
      </section>

      <section className="festival-info-section">
        <div className="ritual-timeline-header">
          <p className="festival-kicker">Cosmic Energy</p>
          <h2>The Dynamic Dual Cosmic Energy</h2>
          <p>
            Pausha is dedicated to Surya, the Sun God, while Purnima belongs to
            Chandra, the Moon God. Their alignment blends solar motivation with the
            calm brilliance of the winter full moon.
          </p>
        </div>

        <article className="festival-text-card">
          <h3>Shaivite Devotion at Dhabaleswar</h3>
          <p>
            Devotees worship the Swayambhu Lingam to channel this celestial balance,
            praying for mental clarity, spiritual awakening, and the destruction of
            negative karma.
          </p>
        </article>
      </section>

      <section className="festival-info-section">
        <div className="ritual-timeline-header">
          <p className="festival-kicker">Core Rituals</p>
          <h2>Core Rituals at the Shrine</h2>
        </div>
        <div className="festival-card-grid">
          {ritualItems.map((item) => (
            <article className="festival-mini-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="festival-info-section">
        <div className="festival-two-column">
          <article className="festival-text-card">
            <h3>Puspuni & The Bounty of Nature</h3>
            <p>
              Pausha Purnima intersects with Odisha's Puspuni harvest tradition,
              marking the end of the winter paddy season. Farmers bring fresh grains
              and offer rice puddings with ghee and jaggery as Bhoga to Lord Shiva.
            </p>
          </article>
          <article className="festival-text-card warm-card">
            <h3>The Mandate of Winter Charity</h3>
            <p>
              Because the festival arrives in deep winter, Daan-Punya becomes a
              central act of devotion. Charity in winter is regarded as especially
              meritorious because physical suffering is highly visible.
            </p>
          </article>
        </div>

        <div className="festival-list-panel">
          {charityItems.map((item) => (
            <div className="festival-list-row" key={item}>
              <span></span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PaushaPurnima;
