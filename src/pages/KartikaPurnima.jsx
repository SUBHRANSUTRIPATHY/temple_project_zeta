import './Home.css';

const boitaItems = [
  {
    title: 'The Historic Connection',
    description:
      'Ancient Kalinga merchants, called Sadhabas, sailed in Boitas toward Bali, Java, Sumatra, Ceylon, and Borneo when favorable winds began.'
  },
  {
    title: 'The Modern River Ritual',
    description:
      'Before sunrise, devotees bathe in the Mahanadi and float miniature boats made of paper, cork, or banana stem.'
  },
  {
    title: 'Lamps on the Water',
    description:
      'The boats are decorated with diyas, incense, flowers, and betel leaves, turning the dark water around the island into a field of drifting flames.'
  }
];

const summaryRows = [
  {
    time: 'Pre-Dawn',
    ritual: 'Mahanadi Snan & Boita Bandana',
    meaning: "Cleansing sins and celebrating Kalinga's maritime glory"
  },
  {
    time: 'Morning',
    ritual: 'Darshan in Final Besha',
    meaning: 'Attaining the fruit of month-long prayers'
  },
  {
    time: 'Afternoon',
    ritual: 'Habisa Dalma Feast',
    meaning: 'Returning to regular life with purified body, mind, and soul'
  }
];

const KartikaPurnima = () => {
  return (
    <div className="festival-long-page">
      <section className="festival-detail-hero">
        <p className="festival-kicker">Holy Kartika Full Moon</p>
        <h1>Kartika Purnima</h1>
        <p>
          Kartika Purnima is considered the most sacred full moon of Odisha's Hindu
          calendar, closing the Kartika Vrata and the five-day Panchuka period.
        </p>
      </section>

      <section className="festival-info-section">
        <div className="ritual-timeline-header">
          <p className="festival-kicker">Dawn Ritual</p>
          <h2>Boita Bandana</h2>
          <p>
            The defining image of the day is the floating of miniature boats, a
            ritual joining religious devotion with Odisha's maritime pride.
          </p>
        </div>
        <div className="festival-card-grid">
          {boitaItems.map((item) => (
            <article className="festival-mini-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <blockquote className="festival-chant">
          Aa Ka Ma Boi, Pana Gua Thoi, Masaka Dharama Deu, Mahadipaku Chahi Thau.
        </blockquote>
      </section>

      <section className="festival-info-section">
        <div className="festival-two-column">
          <article className="festival-text-card">
            <h3>Grand Concluding Rituals</h3>
            <p>
              After Bada Osha and the offering of Gaja Bhoga, Lord Shiva is adorned
              in the final majestic Besha of the season with sandalwood paste, white
              lotuses, and sacred threads.
            </p>
            <p>
              The day also marks the end of Habisa, the strict month-long sattvic
              fast observed by Habisialas.
            </p>
          </article>
          <article className="festival-text-card warm-card">
            <h3>The Traditional Feast: Habisa Dalma</h3>
            <p>
              Habisa Dalma is made with mung dal, raw banana, sweet potato,
              colocasia, and elephant apple. It avoids turmeric, tomato, potato,
              green chili, and mustard seeds, using ghee, coconut, cumin, and ginger
              for pure flavor.
            </p>
          </article>
        </div>
      </section>

      <section className="festival-info-section">
        <div className="ritual-timeline-header">
          <p className="festival-kicker">Holy Month's End</p>
          <h2>Summary of the Day</h2>
        </div>
        <div className="kartika-summary-table">
          {summaryRows.map((row) => (
            <div className="kartika-summary-row" key={row.ritual}>
              <strong>{row.time}</strong>
              <span>{row.ritual}</span>
              <p>{row.meaning}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default KartikaPurnima;
