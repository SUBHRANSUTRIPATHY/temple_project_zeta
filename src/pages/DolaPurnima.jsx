import './Home.css';

const themes = [
  {
    title: 'The Swing of Eternal Love',
    description:
      'Dola means swing, recalling Radha and Krishna on a decorated swing welcoming spring.'
  },
  {
    title: 'Triumph of Good Over Evil',
    description:
      'The festival is linked to the destruction of Holika, symbolizing the victory of righteous forces over darkness.'
  },
  {
    title: 'Birth of a Saint',
    description:
      'For Gaudiya Vaishnavas, the day also marks the birth anniversary of Chaitanya Mahaprabhu.'
  }
];

const cycle = [
  {
    title: 'Fagu Dashami',
    description:
      'Six days before the full moon, deities are smeared with red Abira inside temples and offered seasonal delicacies.'
  },
  {
    title: 'The Dola Biman Journey',
    description:
      'Mobile idols of Radha and Krishna are placed in decorated wooden Vimanas and carried house to house for offerings of fruits, sweets, and Abira.'
  },
  {
    title: 'The Grand Melana',
    description:
      'On the eve of Purnima, Vimanas gather at Melana Padia amid lamps, palanquins, gongs, kirtans, conch shells, and fireworks.'
  }
];

const DolaPurnima = () => {
  return (
    <div className="festival-long-page">
      <section className="festival-detail-hero">
        <p className="festival-kicker">Spring Festival</p>
        <h1>Dola Purnima</h1>
        <p>
          Dola Purnima, also known as Dola Yatra or Dol Jatra, is Odisha's
          devotional, color-drenched spring celebration of Radha and Krishna.
        </p>
      </section>

      <section className="festival-info-section">
        <div className="ritual-timeline-header">
          <p className="festival-kicker">Mythic Themes</p>
          <h2>The Core Mythological Themes</h2>
        </div>
        <div className="festival-card-grid">
          {themes.map((item) => (
            <article className="festival-mini-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="festival-info-section">
        <div className="ritual-timeline-header">
          <p className="festival-kicker">Ritual Cycle</p>
          <h2>The Multi-Day Ritual Cycle</h2>
          <p>
            Unlike a single-day color festival, Dola Purnima in Odisha often unfolds
            across five to six days in rural areas and ancient temple towns.
          </p>
        </div>
        <div className="festival-offering-list">
          {cycle.map((item, index) => (
            <article className="bada-offering-card" key={item.title}>
              <div className="bada-offering-number">{index + 1}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="festival-info-section">
        <div className="festival-two-column">
          <article className="festival-text-card">
            <h3>Traditional Festive Delicacies</h3>
            <p>
              Households offer crunchy sweets such as Ukhuda, Muan, Khai, Khaja,
              and Feni. Cooling drinks like Thandai and Ghola Dahi are shared as
              spring heat begins to rise.
            </p>
          </article>
          <article className="festival-text-card warm-card">
            <h3>Unique Socio-Cultural Impact</h3>
            <p>
              The Gwala community plays a major role in organizing processions.
              Cattle are bathed, garlanded, and fed fresh crops. The new Odia Panji
              is also traditionally read before village deities.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default DolaPurnima;
