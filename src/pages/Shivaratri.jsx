import './Home.css'; // Reusing some styles if needed or create Shivaratri.css

const Shivaratri = () => {
  return (
    <div className="shivaratri-page" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#d32f2f', textAlign: 'center', marginBottom: '40px', fontSize: '3rem' }}>Maha Shivaratri</h1>
      
      <div className="shivaratri-content" style={{ lineHeight: '1.8', fontSize: '1.2rem', color: '#333' }}>
        <p>
          Maha Shivaratri is the most significant festival celebrated at Dhabaleswara Mandir. Dedicated to Lord Shiva, this "Great Night of Shiva" draws thousands of devotees from across the country to this riverine island.
        </p>
        
        <h2 style={{ color: '#4f2b16', marginTop: '30px' }}>Significance</h2>
        <p>
          It marks a remembrance of "overcoming darkness and ignorance" in life and the world. Unlike most festivals, it is celebrated at night and is marked by introspection, fasting, and meditation on Shiva.
        </p>
        
        <h2 style={{ color: '#4f2b16', marginTop: '30px' }}>Celebrations at Dhabaleswara</h2>
        <p>
          On this auspicious day, the temple is beautifully decorated. Devotees perform 'Jagrata' (staying awake all night) and offer 'Bel' leaves, water, and milk to the Shiva Lingam. The atmosphere is filled with the chanting of "Om Namah Shivaya" and devotional songs.
        </p>
        
        <p>
          A special 'Maha Deepa' is raised atop the temple during the late hours of the night, marking the culmination of the day's rituals, after which devotees break their fast.
        </p>
      </div>
    </div>
  );
};

export default Shivaratri;
