import { useState } from 'react';
import { Link } from 'react-router-dom';
import bedha2 from '../assets/bedha2.jpg';
import dblt from '../assets/dblt.jpeg';
import slide1 from '../assets/slid1.jpg';
import slide2 from '../assets/slid2.jpg';
import slide3 from '../assets/slid3.jpg';
import sir from '../assets/sir.jpeg';
import mangala from '../assets/Mangala.jpeg';
import bedhaImg from '../assets/Bedha.jpg';
import mainVideo from '../assets/vedio/mainvedio.mp4';
import sandhyaVideo from '../assets/vedio/sandya.mp4';
import bedhavVideo from '../assets/vedio/bedhav.mp4';
import './Home.css';

const DynamicMedia = () => {
  const [activeTab, setActiveTab] = useState('mangala');

  return (
    <div className="page-container" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="festival-detail-hero" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p className="festival-kicker">Divine Visuals</p>
        <h1 style={{ color: '#d32f2f', fontSize: '3rem', marginBottom: '10px' }}>Dynamic Media</h1>
        <p style={{ color: '#555' }}>Explore the daily rituals, sacred spaces, and divine events of Dhabaleswara Mandir.</p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
        <button
          onClick={() => setActiveTab('mangala')}
          style={{
            padding: '12px 20px',
            borderRadius: '30px',
            border: activeTab === 'mangala' ? 'none' : '1px solid #d32f2f',
            backgroundColor: activeTab === 'mangala' ? '#d32f2f' : 'transparent',
            color: activeTab === 'mangala' ? '#fff' : '#d32f2f',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
        >
          Mangala Alati (Awakening)
        </button>
        <button
          onClick={() => setActiveTab('dwarapuja')}
          style={{
            padding: '12px 20px',
            borderRadius: '30px',
            border: activeTab === 'dwarapuja' ? 'none' : '1px solid #d32f2f',
            backgroundColor: activeTab === 'dwarapuja' ? '#d32f2f' : 'transparent',
            color: activeTab === 'dwarapuja' ? '#fff' : '#d32f2f',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
        >
          Dwarapuja & Mahasnana
        </button>
        <button
          onClick={() => setActiveTab('morning_aarti')}
          style={{
            padding: '12px 20px',
            borderRadius: '30px',
            border: activeTab === 'morning_aarti' ? 'none' : '1px solid #d32f2f',
            backgroundColor: activeTab === 'morning_aarti' ? '#d32f2f' : 'transparent',
            color: activeTab === 'morning_aarti' ? '#fff' : '#d32f2f',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
        >
          Morning Aarti
        </button>
        <button
          onClick={() => setActiveTab('sandhya_aarti')}
          style={{
            padding: '12px 20px',
            borderRadius: '30px',
            border: activeTab === 'sandhya_aarti' ? 'none' : '1px solid #d32f2f',
            backgroundColor: activeTab === 'sandhya_aarti' ? '#d32f2f' : 'transparent',
            color: activeTab === 'sandhya_aarti' ? '#fff' : '#d32f2f',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
        >
          Sandhya Aarti
        </button>
        <button
          onClick={() => setActiveTab('pahada')}
          style={{
            padding: '12px 20px',
            borderRadius: '30px',
            border: activeTab === 'pahada' ? 'none' : '1px solid #d32f2f',
            backgroundColor: activeTab === 'pahada' ? '#d32f2f' : 'transparent',
            color: activeTab === 'pahada' ? '#fff' : '#d32f2f',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
        >
          Pahada (Temple Doors Closed)
        </button>
      </div>

      {/* Tab Contents */}
      {activeTab === 'mangala' && (
        <div className="reveal active">
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ color: '#4f2b16', fontSize: '2rem', marginBottom: '15px' }}>Mangala Alati (Awakening)</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto 30px', color: '#555', lineHeight: '1.8' }}>
              Performed before dawn at 04:30 AM, Mangala Alati is the auspicious first ritual of the day. It signifies awakening the deity, driving away the dark night, and beginning the day with absolute purity.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '20px' }}>
              <div style={{ overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                <img src={bedha2} alt="Temple Bedha" style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                <img src={dblt} alt="Lord Dhabaleswar" style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                <img src={slide2} alt="Divine Serenity" style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block', objectPosition: 'center' }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'dwarapuja' && (
        <div className="reveal active">
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ color: '#4f2b16', fontSize: '2rem', marginBottom: '15px' }}>Dwarapuja & Mahasnana</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto 30px', color: '#555', lineHeight: '1.8' }}>
              Following the awakening, the temple gates are ritually worshipped (Dwarapuja) and the deity is given a sacred grand bath (Mahasnana) with pure river water, milk, and holy ingredients.
            </p>
            
            {/* Video Section */}
            <div style={{ width: '100%', maxWidth: '960px', margin: '0 auto 40px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.15)' }}>
              <video 
                src={mainVideo} 
                controls 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{ width: '100%', maxHeight: '540px', objectFit: 'cover', display: 'block' }}
              ></video>
            </div>

            {/* Attraction Section */}
            <div style={{ marginTop: '50px', background: '#fdfaf5', padding: '40px', borderRadius: '15px', border: '1px solid rgba(79, 43, 22, 0.1)' }}>
              <h3 style={{ color: '#d32f2f', fontSize: '1.8rem', marginBottom: '15px' }}>Spiritual Attractions of Mahasnana</h3>
              <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
                The sacred bath is one of the most visually stunning and spiritually elevating morning attractions at Dhabaleswara Mandir. Devotees gather inside the courtyard to witness the bathing process, chants of Vedic mantras, and the holy transformation of the deity.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
                <div style={{ flex: '1', minWidth: '250px', background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                  <h4 style={{ color: '#4f2b16', marginBottom: '10px' }}>Vedic Chanting</h4>
                  <p style={{ fontSize: '0.95rem', color: '#666' }}>Resonating hymns echo through the stone walls, creating a meditative state for all present.</p>
                </div>
                <div style={{ flex: '1', minWidth: '250px', background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                  <h4 style={{ color: '#4f2b16', marginBottom: '10px' }}>Purification Bath</h4>
                  <p style={{ fontSize: '0.95rem', color: '#666' }}>Using water drawn from the holy Mahanadi River to cleanse and prepare the deity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'morning_aarti' && (
        <div className="reveal active">
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ color: '#4f2b16', fontSize: '2rem', marginBottom: '15px' }}>Morning Aarti & Balabhoga</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto 30px', color: '#555', lineHeight: '1.8' }}>
              Observed after the morning purification bath, the Morning Aarti (Balabhoga) welcomes the day's first major light offering accompanied by traditional breakfast sweets.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '20px' }}>
              <div style={{ overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                <img src={slide3} alt="Divine Morning" style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                <img src={sir} alt="Lord Dhabaleswar Temple View" style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>

            {/* Attraction Section */}
            <div style={{ marginTop: '50px', background: '#fdfaf5', padding: '40px', borderRadius: '15px', border: '1px solid rgba(79, 43, 22, 0.1)' }}>
              <h3 style={{ color: '#d32f2f', fontSize: '1.8rem', marginBottom: '15px' }}>Spiritual Attractions of Morning Aarti</h3>
              <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
                The morning light ceremony is a peaceful and sacred experience. Devotees witness the transition of the morning prayers while receiving early prasada blessings directly from the temple.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
                <div style={{ flex: '1', minWidth: '250px', background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                  <h4 style={{ color: '#4f2b16', marginBottom: '10px' }}>Devotional Lighting</h4>
                  <p style={{ fontSize: '0.95rem', color: '#666' }}>A beautiful presentation of ghee lamps offered to Lord Shiva to invite auspicious energy.</p>
                </div>
                <div style={{ flex: '1', minWidth: '250px', background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                  <h4 style={{ color: '#4f2b16', marginBottom: '10px' }}>Balabhoga Offering</h4>
                  <p style={{ fontSize: '0.95rem', color: '#666' }}>Sacred offering of sweetened rice flakes, banana, and coconut to start the morning darshan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'sandhya_aarti' && (
        <div className="reveal active">
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ color: '#4f2b16', fontSize: '2rem', marginBottom: '15px' }}>Sandhya Aarti (Twilight Offering)</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto 30px', color: '#555', lineHeight: '1.8' }}>
              As twilight transitions, the Sandhya Aarti offers a captivating display of lights, deeps, and dynamic chanting to honor Lord Shiva.
            </p>
            
            {/* Video Section */}
            <div style={{ width: '100%', maxWidth: '960px', margin: '0 auto 40px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.15)' }}>
              <video 
                src={sandhyaVideo} 
                controls 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{ width: '100%', maxHeight: '540px', objectFit: 'cover', display: 'block' }}
              ></video>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '20px' }}>
              <div style={{ overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                <img src={sir} alt="Temple Sanctum View" style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                <img src={mangala} alt="Auspicious Shivalinga" style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>

            {/* Attraction Section */}
            <div style={{ marginTop: '50px', background: '#fdfaf5', padding: '40px', borderRadius: '15px', border: '1px solid rgba(79, 43, 22, 0.1)' }}>
              <h3 style={{ color: '#d32f2f', fontSize: '1.8rem', marginBottom: '15px' }}>Spiritual Attractions of Sandhya Aarti</h3>
              <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
                The twilight aarti creates a high-energy spiritual environment. Devotees fill the temple halls to hear the rhythmic bell-ringing and witness the magnificent flame offerings.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
                <div style={{ flex: '1', minWidth: '250px', background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                  <h4 style={{ color: '#4f2b16', marginBottom: '10px' }}>Twilight Chants</h4>
                  <p style={{ fontSize: '0.95rem', color: '#666' }}>Devotional hymns and Shiva stotrams chanted in unison by priests and visitors.</p>
                </div>
                <div style={{ flex: '1', minWidth: '250px', background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                  <h4 style={{ color: '#4f2b16', marginBottom: '10px' }}>Deepa Aradhana</h4>
                  <p style={{ fontSize: '0.95rem', color: '#666' }}>A multi-tiered brass oil lamp is waved in graceful circular patterns before the deity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pahada' && (
        <div className="reveal active">
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ color: '#4f2b16', fontSize: '2rem', marginBottom: '15px' }}>Pahada (Temple Doors Closed)</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto 30px', color: '#555', lineHeight: '1.8' }}>
              Between 01:00 PM and 04:00 PM, the deity takes midday rest (Pahada). During these hours, the main sanctum is closed to public visits, offering a peaceful, quiet interlude on the temple grounds.
            </p>

            <div style={{ marginBottom: '40px', padding: '30px', borderLeft: '4px solid #d32f2f', background: '#fff8ec', textAlign: 'left', display: 'inline-block', maxWidth: '600px' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#4f2b16' }}>Visiting Guidelines During Pahada</h4>
              <p style={{ margin: 0, color: '#3f342d', fontSize: '0.95rem', lineHeight: '1.6' }}>
                While the inner sanctum is closed, visitors can relax in the outer gardens, cross the suspension bridge, or prepare for the evening's Sandhya Aarti starting at 06:30 PM.
              </p>
            </div>

            {/* Video Section */}
            <div style={{ width: '100%', maxWidth: '960px', margin: '0 auto 40px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.15)' }}>
              <video 
                src={bedhavVideo} 
                controls 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{ width: '100%', maxHeight: '540px', objectFit: 'cover', display: 'block' }}
              ></video>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '20px' }}>
              <div style={{ overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                <img src={bedhaImg} alt="Temple Bedha Boundary" style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                <img src={slide1} alt="Temple Outer View" style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicMedia;
