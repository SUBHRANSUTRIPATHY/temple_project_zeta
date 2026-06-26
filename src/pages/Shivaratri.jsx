import './Home.css';
import hariharaImage from '../assets/harihara.jpg';
import jagrataImage from '../assets/Jagrata.jpg';
import bedhaImage from '../assets/bedha2.jpg';
import mahaDeepaImage from '../assets/The Lifting of the Maha Deepa.jpg';

const ritualTimeline = [
  {
    title: 'Harihara Bheta & Abhishekam',
    time: 'Dawn to Dusk',
    image: hariharaImage,
    description:
      "The day begins with a grand purification ritual. The Swayambhu Shiva Lingam is continuously bathed with water, milk, honey, curd, and ghee. Devotees line up for hours across the bridge to offer freshly plucked Bel leaves."
  },
  {
    title: 'Jagrata & Akhanda Deepa',
    time: '8:00 PM onwards',
    image: jagrataImage,
    description:
      'As night falls, the inner sanctum glows with thousands of earthen lamps. Devotees sit across the island complex for Jagrata, the night-long vigil, chanting Om Namah Shivaya to ward off spiritual darkness.'
  },
  {
    title: 'The Midnight Bedha Parikrama',
    time: 'Midnight',
    image: bedhaImage,
    description:
      'Priests perform the final and most intense round of meditative rituals inside the Garbha Griha, preparing the deity for the grand finale of the festival.'
  },
  {
    title: 'The Lifting of the Maha Deepa',
    time: 'Late Night / Pre-dawn',
    image: mahaDeepaImage,
    description:
      "The festival reaches its climax as designated temple servitors climb to the top of the Rekha Deula carrying a massive flaming torch. When the flame is secured aloft, bells ring out and thousands of devotees break their day-long fast."
  }
];

const Shivaratri = () => {
  return (
    <div className="shivaratri-page">
      <section className="festival-detail-hero">
        <p className="festival-kicker">Great Night of Shiva</p>
        <h1>Maha Shivaratri</h1>
        <p>
          Maha Shivaratri is the most significant festival celebrated at Dhabaleswara Mandir,
          drawing vast numbers of devotees to the sacred river island for fasting, vigil,
          worship, and the lifting of the Maha Deepa.
        </p>
      </section>

      <div className="festival-detail-grid">
        <section className="festival-story-section">
          <h2>The Origin Legend of Dhabaleswar</h2>
          <p>
            The name of the temple is deeply tied to a miracle of redemption. According to local
            folklore, a thief once stole a black bull calf from a nearby village and fled into the
            temple to hide from an angry crowd.
          </p>
          <p>
            When the villagers surrounded the temple, the thief prayed desperately to Lord Shiva
            for protection. Taking pity on him, Shiva appeared as a Sanyassin and brought the calf
            outside. Miraculously, the black calf had turned entirely white.
          </p>
          <p>
            The crowd realized its mistake and left. The thief then confessed his sins and
            dedicated the rest of his life to serving the temple. "Dhabala" means white, and
            "Eswar" means Lord in Sanskrit and Odia, memorializing Shiva as the White Lord who
            showed boundless mercy.
          </p>
        </section>

        <aside className="festival-fact-panel">
          <h2>Architectural & Geographical Setting</h2>
          <p>
            Dhabaleswara Temple stands on KHORDHA,
            Odisha. The original structure dates back to the 10th-11th Century CE under the
            Somavamshi dynasty and was later renovated by King Bir Kishore of Khurda in 1232 AD.
          </p>
          <p>
            During Maha Shivaratri, the journey becomes part of the ritual. Pilgrims cross the
            river by boat or walk across the famous 254-meter pedestrian suspension bridge,
            locally called Jhula Pola, as temple bells rise above the sound of rushing water.
          </p>
        </aside>
      </div>

      <section className="ritual-timeline-section">
        <div className="ritual-timeline-header">
          <p className="festival-kicker">The Ritual Timeline</p>
          <h2>The Great Night</h2>
          <p>
            The celebration follows a strict chronological order through the night, drawing more
            than a hundred thousand pilgrims annually.
          </p>
        </div>

        <div className="shivaratri-timeline">
          {ritualTimeline.map((item) => (
            <article className="shivaratri-timeline-item" key={item.title}>
              <div className="timeline-media">
                <img src={item.image} alt={item.title} />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shivaratri;
