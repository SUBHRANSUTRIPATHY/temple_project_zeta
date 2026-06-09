import { Link } from 'react-router-dom';
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
      name: 'Various Functions',
      path: '/various-functions',
      description: 'Pausha Purnima, Dola Purnima, Kartika Purnima and more.'
    }
  ];

  return (
    <div className="page-container" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#d32f2f', textAlign: 'center', marginBottom: '20px', fontSize: '3rem' }}>Festivals</h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#555', marginBottom: '50px' }}>
        Celebrate with us! Explore the divine festivals and events celebrated at Dhabaleswara Mandir.
      </p>

      <div className="festivals-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
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
