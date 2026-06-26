import './Home.css';
import badaosaImage from '../assets/badaosa.jpg';


const significanceItems = [
  {
    title: 'The Healing of King Krutu',
    description:
      'According to the Shiva Purana, King Krutu of Utkal fell victim to a severe skin disease and lost his kingdom. On the advice of a sage, he and his queen came to Dhabaleswar island to perform the strict Bada Osha ritual. Lord Shiva, pleased by his devotion, cured him and restored his kingdom.'
  },
  {
    title: 'The Liberation of Lord Indra',
    description:
      'Another local legend says Lord Indra, the king of gods, prayed and fasted on this riverine island during Bada Osha to free himself from a heavy curse placed upon him by Lord Brahma.'
  },
  {
    title: 'A Festival of Universal Well-being',
    description:
      'Unlike many local oshas in Odisha that are observed mainly by women for their families, Bada Osha at Dhabaleswar is observed by both men and women seeking spiritual purification, good health, and peace.'
  }
];

const whiteOfferings = [
  {
    title: 'Gaja Bhoga',
    subtitle: 'Also known as Gaja Pitha',
    description:
      'The most famous offering of the festival is a large white sweet dumpling prepared uniquely for this night from Arua Anna, or raw white rice flour. It is stuffed with grated coconut, jaggery, cardamom, and camphor, then steamed and offered to Lord Shiva during the quiet late-night transition from Trayodashi to Chaturdashi.',
    note:
      'Thousands of devotees stay awake in Jagrata to receive even a small portion of this sacred prasada before breaking their day-long waterless fast.'
  },
  {
    title: 'Tarana Prasad',
    subtitle: 'A cooling white liquid offering',
    description:
      'Tarana is prepared by mixing rice water, curd, milk, black pepper, and sugar. It is considered soothing and spiritually purifying for devotees who have completed a long fast.',
    note: 'It is served alongside Gaja Bhoga as part of the distinctive Bada Osha prasada tradition.'
  },
  {
    title: 'White Fruits, Flowers, and Clothes',
    subtitle: 'Offerings for the White Lord',
    description:
      'During the apex of the festival, the Shiva Lingam is bathed with 108 pitchers of holy water during Mangala Alati. Later, the deity is dressed in the magnificent Bada Singhar Besha.',
    note:
      'To maintain the purity of Dhabaleswar, devotees offer white flowers such as lotus and jasmine, white clothes, and white-fleshed fruits throughout the night.'
  }
];

const BadaOsha = () => {
  return (
    <div className="bada-osha-page">
      <section className="festival-detail-hero">
        <p className="festival-kicker">The Great Fasting</p>
        <h1>Bada Osha</h1>
        <p>
          Bada Osha takes place on Sukla Paksha Chaturdashi, the 14th day of the
          waxing moon in the holy month of Kartika, and forms the climax of the
          five-day sacred period known as Panchuka. Bada Osha is the largest and
          most significant ritualistic fasting festival celebrated across Odisha,
          primarily dedicated to the worship of Lord Shiva. The word Bada translates
          to "big" or "great", and Osha means "sacred fast". It is observed with
          immense devotion during the holy month of Kartika, specifically on the
          Kartika Sukla Trayodashi and extends into Chaturdashi.
          <br />
          <br />
          <strong>The Core Hub: Dhabaleswar Pitha</strong>
          <br />
          While celebrated throughout Odia households, the absolute epicenter of
          this festival is the Baba Dhabaleswar Temple.
        </p>
      </section>

      <section className="bada-significance-section">
        <div className="ritual-timeline-header">
          <p className="festival-kicker">Significance</p>
          <h2>The Significance of Bada Osha</h2>
          <p>
            The festival carries deep mythological and cultural meaning, centered on
            healing, liberation, fasting, and universal well-being.
          </p>
        </div>

        <div className="bada-significance-layout">
          <div className="bada-significance-grid">
            {significanceItems.map((item) => (
              <article className="bada-story-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <aside className="bada-significance-image" aria-label="Bada Osha significance image">
            <img src={badaosaImage} alt="Bada Osha" />
          </aside>
        </div>
      </section>

      <section className="bada-offerings-section">
        <div className="ritual-timeline-header">
          <p className="festival-kicker">Sacred Prasada</p>
          <h2>The Unique White Offerings & Prasadas</h2>
          <p>
            Because the deity is worshiped as Dhabaleswar, the White Lord, the theme
            of white carries into the offerings, rituals, and attire of Bada Osha.
          </p>
        </div>

        <div className="bada-offerings-list">
          {whiteOfferings.map((item, index) => (
            <article className="bada-offering-card" key={item.title}>
              <div className="bada-offering-number">{index + 1}</div>

              <div>
                <h3>{item.title}</h3>
                <span>{item.subtitle}</span>
                <p>{item.description}</p>
                {item.image ? (
                  <div className="bada-offering-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                ) : null}
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BadaOsha;
