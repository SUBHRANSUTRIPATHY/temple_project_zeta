import { Link } from 'react-router-dom';
import odiaImg from '../assets/odia.jpg';
import badaosaImg from '../assets/badaosa.jpg';
import hariharaImg from '../assets/harihara.jpg';
import './Home.css'; // Reusing Home.css styles for consistency

const Festivals = () => {

  const festivalList = [
    {
      name: 'Shivaratri',
      path: '/shivaratri',
      description: 'The Great Night of Shiva, celebrated with night-long prayers and rituals.'
    },
    {
      name: 'Bada-osha',
      path: '/bada-osha',
      description: 'The biggest festival of Dhabaleswar, famous for its grand fair and Gaja Bhoga.'
    },
    {
      name: 'Sitalasasti',
      path: '/sitalasasti',
      description: 'The divine marriage of Lord Shiva and Goddess Parvati, celebrated with grand processions.'
    },
    {
      name: 'Makar Sankranti',
      path: '/makar-sankranti',
      description: 'Celebrating the transition of the Sun with holy dips in the Mahanadi and special offerings.'
    },
    {
      name: 'Naga Chaturthi',
      path: '/naga-chaturthi',
      description: 'A sacred serpent worship festival observed with prayers for protection, fertility, and family welfare.'
    },
    {
      name: 'Pana Sankranti',
      path: '/pana-sankranti',
      description: 'Odisha New Year observed with cooling Pana, temple worship, and prayers for a blessed year.'
    },

    {
      name: 'Pausha Purnima',
      path: '/pausha-purnima',
      description: 'A significant lunar event in the month of Pausha with special abhishek and alankara.'
    },
    {
      name: 'Dola Purnima',
      path: '/dola-purnima',
      description: 'The festival of colors celebrated with divine processions and traditional fervor.'
    },
    {
      name: 'Kartika Purnima',
      path: '/kartika-purnima',
      description: 'Sacred Boita Bandana celebrating the maritime glory of ancient Odisha.'
    }
  ];

  return (
    <div className="page-container festivals-page">
      <div className="mythical-origin-content festivals-hero-content">
        <div className="mythical-origin-image-container">
          <h1 style={{ marginBottom: '15px', textAlign: 'left' }}>Festivals</h1>
          <div className="mythical-origin-image">
            <img src={odiaImg} alt="Odia culture" style={{ width: '100%', borderRadius: '8px' }} />
          </div>
        </div>

        <div className="mythical-origin-text festivals-hero-text" style={{ alignSelf: 'center' }}>
          <p>
            Celebrate with us! Explore the divine festivals and events celebrated at Dhabaleswara Mandir. Odisha is a land of colorful festivals, where spirituality is deeply integrated into daily life.
          </p>
          <p>
            The phrase <strong>"Bāra Māsare Tera Parba"</strong> translates to "Thirteen festivals in twelve months", encapsulating the rich cultural fabric of Odisha. From grand chariot processions to sacred river rituals, the people of Odisha celebrate life and devotion through diverse observances.
          </p>
          <p>
            At Dhabaleswara Mandir, festivals like Maha Shivaratri, Bada-osha, and Kartika Purnima are observed with immense devotion, drawing thousands of pilgrims who come to offer prayers and experience the holy, peaceful atmosphere of this island shrine.
          </p>
        </div>
      </div>


      <div className="festivals-grid">

        {festivalList.map((festival) => (
          <div key={festival.name} className="attraction-card">
            <h3 style={{ color: '#4f2b16', marginBottom: '15px' }}>{festival.name}</h3>
            <p style={{ color: '#555', marginBottom: '20px' }}>{festival.description}</p>
            <Link
              to={festival.path}
              style={{
                display: 'inline-block',
                backgroundColor: '#d32f2f',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: 'background 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#b71c1c'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#d32f2f'}
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Festivals;
