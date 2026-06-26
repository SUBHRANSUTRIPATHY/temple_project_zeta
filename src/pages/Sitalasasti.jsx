import './Home.css';
import mangala from '../assets/Mangala.jpeg';
import sir from '../assets/sir.jpeg';

const ritualItems = [
  {
    title: 'The Adoptive Parents',
    description:
      'Families from the community volunteer to act as the parents of the bride, Goddess Parvati, and the groom, Lord Shiva.'
  },
  {
    title: "The Groom's Procession",
    description:
      "The family hosting Lord Shiva carries his heavy brass Chala Pratima in a grand midnight Barat procession toward the bride's house."
  },
  {
    title: 'The Kanyadan',
    description:
      'The family hosting Goddess Parvati welcomes the groom with Vedic rituals, performs Kanyadan, bears the wedding expenses, and distributes prasada as in a real family wedding.'
  }
];

const Sitalasasti = () => {
  return (
    <div className="festival-long-page">
      <section className="festival-detail-hero">
        <p className="festival-kicker">Divine Marriage Festival</p>
        <h1>Sitalasasti</h1>
        <p>
          Sitalasasti, also spelled Shitala Sasthi, is a grand Odia celebration of
          the divine marriage of Lord Shiva and Goddess Parvati.
        </p>
      </section>

      <section className="festival-info-section">
        <div className="ritual-timeline-header">
          <p className="festival-kicker">Season & Meaning</p>
          <h2>A Joyous Carnival of Cosmic Union</h2>
          <p>
            Held on the Sasthi, the sixth day of Sukla Paksha in the month of
            Jyestha, the festival welcomes the monsoon and celebrates the union
            that sustains cosmic life.
          </p>
        </div>

        <div className="festival-two-column">
          <article className="festival-text-card">
            <h3>The Mythological Significance</h3>
            <p>
              According to Hindu mythology, the demon Tarakasura terrorized the
              universe, and prophecy declared he could only be defeated by a son
              born to Lord Shiva. After Sati's death, Shiva had withdrawn into deep
              meditation, detached from the material world.
            </p>
            <p>
              Goddess Shakti reincarnated as Parvati and performed rigorous
              penance to win Shiva's heart. Sitalasasti celebrates the day Shiva
              agreed to marry her, bringing his fiery energy into balance with her
              cooling, nurturing essence.
            </p>
            <p>
              The name Sitala means cooling, symbolizing how this divine union
              cools the scorching heat of Jyestha and invites life-giving monsoon
              rains.
            </p>
          </article>

          <article className="festival-text-card warm-card">
            <h3>Unique Rituals: The Kanyadan Tradition</h3>
            <p>
              The beauty of Sitalasasti in Odisha lies in how the community turns
              the divine wedding into a realistic human ceremony, complete with
              families, processions, hospitality, wedding expenses, and prasada for
              the town.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px' }}>
              <div style={{ overflow: 'hidden', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.08)' }}>
                <img src={mangala} alt="Maha Mangala Alati" style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ overflow: 'hidden', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.08)' }}>
                <img src={sir} alt="Sitalasasti Celebrations" style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </article>
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
    </div>
  );
};

export default Sitalasasti;
