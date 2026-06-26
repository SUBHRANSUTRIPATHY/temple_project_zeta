import './Home.css';

const observanceItems = [
  {
    title: 'Odia New Year',
    description:
      'Pana Sankranti marks Maha Bishuba Sankranti, the beginning of the Odia calendar year and a day of renewal, gratitude, and auspicious worship.'
  },
  {
    title: 'Cooling Pana Offering',
    description:
      'Devotees prepare Bela Pana, a cooling drink made with bael fruit, water, jaggery, curd, coconut, and seasonal spices, and offer it with devotion.'
  },
  {
    title: 'Temple Blessings',
    description:
      'Families visit the shrine to seek blessings from Lord Shiva for health, prosperity, protection, and balance through the coming year.'
  }
];

const ritualItems = [
  'Morning snan and Shiva darshan at the temple',
  'Offering of Bela Pana, fruits, flowers, and sacred water',
  'Charity of water, cooling drinks, and food during the summer heat'
];

const PanaSankranti = () => {
  return (
    <div className="festival-long-page">
      <section className="festival-detail-hero">
        <p className="festival-kicker">Odia New Year</p>
        <h1>Pana Sankranti</h1>
        <p>
          Pana Sankranti celebrates the Odia New Year with sacred worship, cooling
          offerings, charity, and prayers for a peaceful beginning.
        </p>
      </section>

      <section className="festival-info-section">
        <div className="ritual-timeline-header">
          <p className="festival-kicker">Season & Meaning</p>
          <h2>Auspicious Beginning of the Year</h2>
          <p>
            The festival arrives during the intense summer season, making offerings
            of water, Pana, and shade especially meaningful acts of devotion and
            compassion.
          </p>
        </div>

        <div className="festival-card-grid">
          {observanceItems.map((item) => (
            <article className="festival-mini-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="festival-info-section">
        <div className="ritual-timeline-header">
          <p className="festival-kicker">Devotional Practice</p>
          <h2>Common Rituals</h2>
        </div>

        <div className="festival-list-panel">
          {ritualItems.map((item) => (
            <div className="festival-list-row" key={item}>
              <span></span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="festival-two-column">
          <article className="festival-text-card">
            <h3>Bela Pana</h3>
            <p>
              The cooling drink symbolizes relief, sweetness, and balance. It is
              offered to the deity and shared among devotees as sacred prasad.
            </p>
          </article>
          <article className="festival-text-card warm-card">
            <h3>Charity in Summer</h3>
            <p>
              Giving water and food on this day reflects the temple tradition of
              caring for pilgrims, travelers, and the wider community.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default PanaSankranti;
