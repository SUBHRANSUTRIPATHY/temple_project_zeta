

import { Link } from 'react-router-dom';
import './Home.css';

const rituals = [
  {
    time: '04:30 AM - 05:00 AM',
    ritualId: 'RIT-001',
    name: 'Mangala Alati (Awakening)',
    status: 'Public Allowed',
    statusType: 'public',
    action: 'View Details',
    detailsPath: '/rituals/mangala-alati'
  },
  {
    time: '05:00 AM - 06:00 AM',
    ritualId: 'RIT-002',
    name: 'Dwarapuja & Mahasnana',
    status: 'Public Allowed',
    statusType: 'public',
    action: 'View Details',
    detailsPath: '/rituals/dwarapuja-mahasnana'
  },
  {
    time: '08:30 AM - 09:15 AM',
    ritualId: 'RIT-003',
    name: 'Balabhoga & Morning Aarti',
    status: 'Public Allowed',
    statusType: 'public',
    action: 'Book Prasadam'
  },
  {
    time: '11:30 AM - 12:00 PM',
    ritualId: 'RIT-004',
    name: 'Raja Bhoga (Mid-day Royal Feast)',
    status: 'Clergy Only',
    statusType: 'clergy',
    action: 'Internal'
  },
  {
    time: '12:00 PM - 01:00 PM',
    ritualId: 'RIT-005',
    name: 'Rudra Abhisheka (Mid-day)',
    status: 'Public Allowed',
    statusType: 'public',
    action: 'Book Slot',
    highlighted: true
  },
  {
    time: '01:00 PM - 04:00 PM',
    ritualId: 'RIT-006',
    name: 'Pahada (Temple Doors Closed)',
    status: 'Temple Closed',
    statusType: 'closed',
    action: 'View Details',
    detailsPath: '/rituals/pahada'
  },
  {
    time: '06:30 PM - 07:30 PM',
    ritualId: 'RIT-007',
    name: 'Sandhya Aarti (Twilight)',
    status: 'Public Allowed',
    statusType: 'public',
    action: 'Book Slot',
    highlighted: true
  },
  {
    time: '09:30 PM - 10:00 PM',
    ritualId: 'RIT-008',
    name: 'Shayan Aarti (Cosmic Rest)',
    status: 'Clergy Only',
    statusType: 'clergy',
    action: 'Internal'
  }
];

const DailyRituals = () => {
  return (
    <div className="page-container rituals-page">
      <div className="rituals-header">
        <h1>Daily Rituals</h1>
        <p>View the schedule for daily poojas, aartis, and niti offerings.</p>
      </div>

      <div className="rituals-table-wrap" aria-label="Daily rituals schedule">
        <table className="rituals-table">
          <thead>
            <tr>
              <th scope="col">Time Slot</th>
              <th scope="col">Ritual Name</th>
              <th scope="col">Status Tag</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {rituals.map((ritual) => (
              <tr key={`${ritual.time}-${ritual.name}`} className={ritual.highlighted ? 'high-cta-row' : undefined}>
                <td data-label="Time Slot">{ritual.time}</td>
                <td data-label="Ritual Name" className="ritual-name">
                  {ritual.name}
                </td>
                <td data-label="Status Tag">
                  <span className={`status-pill status-${ritual.statusType}`}>
                    <span className="status-dot" aria-hidden="true"></span>
                    {ritual.status}
                  </span>
                </td>
                <td data-label="Action">
                  {ritual.highlighted ? (
                    <Link
                      className="ritual-action ritual-action-primary ritual-action-link"
                      to={`/booking-slot?ritual_id=${ritual.ritualId}`}
                    >
                      {ritual.action}
                    </Link>
                  ) : ritual.detailsPath ? (
                    <Link
                      className="ritual-action ritual-action-link"
                      to={ritual.detailsPath}
                    >
                      {ritual.action}
                    </Link>
                  ) : (
                    <button
                      className="ritual-action"
                      type="button"
                      disabled={ritual.action === 'Internal'}
                    >
                      {ritual.action}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailyRituals;
