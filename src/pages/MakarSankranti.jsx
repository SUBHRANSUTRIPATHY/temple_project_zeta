import './Home.css';

const melaItems = [
  {
    title: 'The Holy Bath',
    description:
      'Devotees begin before dawn with a ritual dip in the cold waters of the Mahanadi surrounding the island before entering the shrine.'
  },
  {
    title: 'Sun and Shiva Worship',
    description:
      'The solar worship of Makar Sankranti merges with Shaivite devotion as pilgrims pray to Lord Shiva for harvest prosperity, health, and a fruitful year.'
  },
  {
    title: 'Makara Mela',
    description:
      'The island temple becomes the center of a vibrant fair drawing devotees from Cuttack, Bhubaneswar, and nearby districts.'
  }
];

const ingredients = [
  'Newly harvested uncooked Arua Chaula, lightly washed and air-dried',
  'Jaggery, grated coconut, ripe bananas, Rasgulla or Chhena',
  'Sesame seeds, chopped ginger, black pepper, and puffed rice'
];

const MakarSankranti = () => {
  return (
    <div className="festival-long-page">
      <section className="festival-detail-hero">
        <p className="festival-kicker">Harvest & Uttarayan</p>
        <h1>Makar Sankranti</h1>
        <p>
          Makar Sankranti marks the Sun's transit into Capricorn, signaling
          Uttarayan, warmer days, sacred harvest gratitude, and public celebration
          at Dhabaleswar Temple.
        </p>
      </section>

      <section className="festival-info-section">
        <div className="ritual-timeline-header">
          <p className="festival-kicker">Makara Mela</p>
          <h2>The Makara Mela of Dhabaleswar</h2>
          <p>
            On this day, the riverine shrine becomes a massive religious fair with
            holy bathing, Sun worship, Shiva worship, and sacred food offerings.
          </p>
        </div>

        <div className="festival-card-grid">
          {melaItems.map((item) => (
            <article className="festival-mini-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="festival-info-section">
        <div className="ritual-timeline-header">
          <p className="festival-kicker">Sacred Offering</p>
          <h2>Makar Chaula</h2>
          <p>
            The most unique offering of the festival is Makar Chaula, an uncooked
            harvest bhoga prepared from newly harvested winter paddy and offered to
            the Swayambhu Shiva Lingam.
          </p>
        </div>

        <div className="festival-list-panel">
          {ingredients.map((item) => (
            <div className="festival-list-row" key={item}>
              <span></span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <article className="festival-text-card">
          <h3>Makar Basma: A Traditional Friendship Day</h3>
          <p>
            In Odisha, two people may seal a lifetime friendship by feeding each
            other Makar Chaula prasad. From then on, men address their bound friend
            as Maharshad or Marsad, while women address their friend as Makara.
          </p>
          <p>
            This blend of bridge crossing, winter harvest, fresh prasada, and social
            bonding makes Makar Sankranti one of the most cheerful days on
            Dhabaleswar island.
          </p>
        </article>
      </section>
    </div>
  );
};

export default MakarSankranti;
