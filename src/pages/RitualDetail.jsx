import { Link } from 'react-router-dom';
import './Home.css';

const ritualDetails = {
  mangalaAlati: {
    kicker: 'Morning Awakening',
    title: 'Mangala Alati',
    time: '04:30 AM - 05:00 AM',
    status: 'Public Allowed',
    summary:
      'Mangala Alati is the first sacred worship of the day, performed before dawn to awaken the deity and begin the temple routine with lamps, bells, incense, and devotional chanting.',
    sections: [
      {
        title: 'Spiritual Meaning',
        description:
          'The word Mangala means auspicious. This early worship invites divine grace at the start of the day and fills the sanctum with light, sound, fragrance, and prayer.'
      },
      {
        title: 'Devotee Experience',
        description:
          'Devotees attend this ritual for a peaceful darshan, offering prayers for clarity, protection, and a blessed beginning before daily life begins.'
      },
      {
        title: 'Temple Atmosphere',
        description:
          'The shrine remains calm and deeply devotional during this hour, with the glow of the lamp and the sound of bells marking the first public worship.'
      }
    ],
    notes: [
      'Arrive early because morning darshan time is short.',
      'Maintain silence near the sanctum during the Alati.',
      'Flowers, bel leaves, and simple prayers are commonly offered.'
    ]
  },
  dwarapujaMahasnana: {
    kicker: 'Door Worship & Sacred Bath',
    title: 'Dwarapuja & Mahasnana',
    time: '05:00 AM - 06:00 AM',
    status: 'Public Allowed',
    summary:
      'Dwarapuja and Mahasnana continue the morning worship cycle. The temple doors are ritually honored, and the deity is prepared through sacred bathing and purification rites.',
    sections: [
      {
        title: 'Dwarapuja',
        description:
          'Dwarapuja honors the temple doorway as the threshold between the outer world and the sacred space of Lord Shiva. It prepares the shrine for the day of worship.'
      },
      {
        title: 'Mahasnana',
        description:
          'Mahasnana is the ceremonial bathing of the deity with sanctified water and traditional offerings, symbolizing purity, renewal, and divine presence.'
      },
      {
        title: 'Daily Importance',
        description:
          'This ritual prepares the sanctum for later worship, bhoga offerings, and darshan, making it one of the most important morning temple services.'
      }
    ],
    notes: [
      'Devotees may witness the morning preparation from permitted areas.',
      'Follow temple staff guidance during cleaning and bathing rituals.',
      'This is a good time for peaceful Shiva mantra chanting.'
    ]
  },
  pahada: {
    kicker: 'Midday Temple Rest',
    title: 'Pahada',
    time: '01:00 PM - 04:00 PM',
    status: 'Temple Closed',
    summary:
      'Pahada is the daily rest period when the temple doors remain closed after the midday worship cycle. It allows the deity, priests, and temple routine to pause before evening services begin.',
    sections: [
      {
        title: 'Why Doors Close',
        description:
          'After the morning and midday rituals, the sanctum enters a quiet resting period. Public darshan is paused so the inner temple can remain undisturbed.'
      },
      {
        title: 'Planning Your Visit',
        description:
          'Visitors should plan darshan before 01:00 PM or after the temple reopens for evening worship. This helps avoid waiting during the closed hours.'
      },
      {
        title: 'Evening Reopening',
        description:
          'After Pahada, the temple prepares for Sandhya Aarti and evening prayers, bringing devotees back for the next major public worship period.'
      }
    ],
    notes: [
      'Public darshan is not available during Pahada.',
      'Use this time for rest, prasada, or planning evening worship.',
      'Check temple notices for festival-day timing changes.'
    ]
  }
};

const RitualDetail = ({ ritualKey }) => {
  const ritual = ritualDetails[ritualKey];

  return (
    <div className="festival-long-page">
      <section className="festival-detail-hero">
        <p className="festival-kicker">{ritual.kicker}</p>
        <h1>{ritual.title}</h1>
        <p>{ritual.summary}</p>
      </section>

      <section className="festival-info-section">
        <div className="ritual-timeline-header">
          <p className="festival-kicker">Daily Schedule</p>
          <h2>{ritual.time}</h2>
          <p>{ritual.status}</p>
        </div>

        <div className="festival-card-grid">
          {ritual.sections.map((section) => (
            <article className="festival-mini-card" key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="festival-info-section">
        <div className="ritual-timeline-header">
          <p className="festival-kicker">Visitor Notes</p>
          <h2>Before You Visit</h2>
        </div>

        <div className="festival-list-panel">
          {ritual.notes.map((note) => (
            <div className="festival-list-row" key={note}>
              <span></span>
              <p>{note}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="ritual-detail-back">
        <Link className="ritual-action ritual-action-link" to="/rituals">
          Back to Daily Rituals
        </Link>
      </div>
    </div>
  );
};

export default RitualDetail;
