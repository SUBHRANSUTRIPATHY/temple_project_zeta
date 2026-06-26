import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Home.css';

const rituals = [
  {
    ritual_id: 'RIT-001',
    ritual_name: 'Mangala Alati',
    time_slot: '04:30 AM - 05:00 AM',
    base_price: 251
  },
  {
    ritual_id: 'RIT-003',
    ritual_name: 'Balabhoga & Morning Aarti',
    time_slot: '08:30 AM - 09:15 AM',
    base_price: 351
  },
  {
    ritual_id: 'RIT-005',
    ritual_name: 'Rudra Abhisheka',
    time_slot: '12:00 PM - 01:00 PM',
    base_price: 1101,
    featured: true
  },
  {
    ritual_id: 'RIT-007',
    ritual_name: 'Sandhya Aarti',
    time_slot: '06:30 PM - 07:30 PM',
    base_price: 501,
    featured: true
  }
];

const availabilityLabels = {
  available: 'Available',
  filling_fast: 'Filling Fast',
  sold_out: 'Sold Out'
};

const participantFee = 151;

const formatDateValue = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const formatDisplayDate = (dateValue) => {
  if (!dateValue) {
    return 'Select a date';
  }

  return new Intl.DateTimeFormat('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(new Date(`${dateValue}T00:00:00`));
};

const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);

const getAvailability = (dateValue, ritualId) => {
  const day = Number(dateValue.slice(-2));
  const ritualWeight = Number(ritualId.slice(-1));
  const score = (day + ritualWeight) % 7;

  if (score === 0) {
    return 'sold_out';
  }

  if (score === 1 || score === 2) {
    return 'filling_fast';
  }

  return 'available';
};

const BookingSlot = () => {
  const [searchParams] = useSearchParams();
  const today = useMemo(() => formatDateValue(new Date()), []);
  const lockedRitualId = searchParams.get('ritual_id');
  const lockedDate = searchParams.get('date');
  const fallbackRitual = rituals.find((ritual) => ritual.ritual_id === lockedRitualId) || rituals[2];

  const [selectedRitualId, setSelectedRitualId] = useState(fallbackRitual.ritual_id);
  const [selectedDate, setSelectedDate] = useState(lockedDate || today);
  const [primaryDevoteeName, setPrimaryDevoteeName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [gatraGotra, setGatraGotra] = useState('');
  const [nakshatra, setNakshatra] = useState('');
  const [numberOfParticipants, setNumberOfParticipants] = useState(1);
  const [submissionState, setSubmissionState] = useState(null);

  const selectedRitual = rituals.find((ritual) => ritual.ritual_id === selectedRitualId) || fallbackRitual;
  const isDateLocked = Boolean(lockedDate);
  const isRitualLocked = Boolean(lockedRitualId && rituals.some((ritual) => ritual.ritual_id === lockedRitualId));
  const selectedAvailability = getAvailability(selectedDate, selectedRitual.ritual_id);

  const calendarDays = useMemo(() => {
    return Array.from({ length: 14 }, (_, index) => {
      const date = new Date();
      date.setDate(date.getDate() + index);
      const value = formatDateValue(date);

      return {
        value,
        day: date.getDate(),
        weekday: new Intl.DateTimeFormat('en-IN', { weekday: 'short' }).format(date),
        availability: getAvailability(value, selectedRitual.ritual_id)
      };
    });
  }, [selectedRitual.ritual_id]);

  const dynamicPrice = selectedRitual.base_price + (numberOfParticipants - 1) * participantFee;

  const errors = {
    selectedDate:
      selectedDate < today
        ? 'Please select today or an upcoming date.'
        : selectedAvailability === 'sold_out'
          ? 'This ritual slot is sold out for the selected date.'
          : '',
    primaryDevoteeName: primaryDevoteeName.trim() ? '' : 'Primary devotee name is required.',
    contactNumber:
      contactNumber.trim().length >= 10 ? '' : 'Enter a valid contact number with at least 10 digits.',
    numberOfParticipants:
      numberOfParticipants >= 1 && numberOfParticipants <= 5 ? '' : 'Participants must be between 1 and 5.'
  };

  const isFormValid = Object.values(errors).every((error) => !error);

  const bookingPayload = {
    ritual_id: selectedRitual.ritual_id,
    ritual_name: selectedRitual.ritual_name,
    time_slot: selectedRitual.time_slot,
    execution_date: selectedDate,
    primary_devotee_name: primaryDevoteeName.trim(),
    contact_number: contactNumber.trim(),
    gatra_gotra: gatraGotra.trim(),
    nakshatra: nakshatra.trim(),
    number_of_participants: numberOfParticipants,
    dynamic_price: dynamicPrice,
    availability_status: selectedAvailability
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      setSubmissionState('Please complete the highlighted fields before payment.');
      return;
    }

    window.dispatchEvent(new CustomEvent('ritualBooking:ready', { detail: bookingPayload }));
    setSubmissionState('Booking details are ready for secure payment.');
  };

  return (
    <div className="booking-page">
      <section className="booking-hero">
        <p className="festival-kicker">Devotee Services</p>
        <h1>Ritual Slot Booking</h1>
        <p>
          Select a ritual, choose an available date, add devotee details, and review the final
          amount before moving to secure payment.
        </p>
      </section>

      <form className="booking-layout" onSubmit={handleSubmit} noValidate>
        <div className="booking-flow">
          <section className="booking-step">
            <div className="booking-step-heading">
              <span>Step 1</span>
              <div>
                <h2>Ritual & Date Selection</h2>
                <p>Choose from bookable daily rituals and confirm slot availability.</p>
              </div>
            </div>

            <div className="ritual-picker-grid" role="radiogroup" aria-label="Select ritual">
              {rituals.map((ritual) => {
                const isSelected = ritual.ritual_id === selectedRitual.ritual_id;

                return (
                  <button
                    className={`ritual-picker-card ${isSelected ? 'selected' : ''}`}
                    type="button"
                    key={ritual.ritual_id}
                    onClick={() => setSelectedRitualId(ritual.ritual_id)}
                    disabled={isRitualLocked && !isSelected}
                    role="radio"
                    aria-checked={isSelected}
                  >
                    <span>{ritual.ritual_id}</span>
                    <strong>{ritual.ritual_name}</strong>
                    <small>{ritual.time_slot}</small>
                    <em>{formatCurrency(ritual.base_price)} base seva</em>
                  </button>
                );
              })}
            </div>

            <div className="calendar-panel">
              <div className="calendar-panel-header">
                <h3>Available Dates</h3>
                {isDateLocked && <span>Locked from selected link</span>}
              </div>

              <div className="availability-legend" aria-label="Availability legend">
                {Object.entries(availabilityLabels).map(([key, label]) => (
                  <span className={`availability-dot-label availability-${key}`} key={key}>
                    <i aria-hidden="true"></i>
                    {label}
                  </span>
                ))}
              </div>

              <div className="slot-calendar">
                {calendarDays.map((day) => {
                  const isSelected = day.value === selectedDate;
                  const isSoldOut = day.availability === 'sold_out';

                  return (
                    <button
                      className={`calendar-day availability-${day.availability} ${isSelected ? 'selected' : ''}`}
                      type="button"
                      key={day.value}
                      onClick={() => setSelectedDate(day.value)}
                      disabled={isSoldOut || (isDateLocked && !isSelected)}
                      aria-pressed={isSelected}
                    >
                      <span>{day.weekday}</span>
                      <strong>{day.day}</strong>
                      <small>{availabilityLabels[day.availability]}</small>
                    </button>
                  );
                })}
              </div>

              <label className="booking-field compact-field">
                Exact execution date
                <input
                  type="date"
                  min={today}
                  value={selectedDate}
                  onChange={(event) => setSelectedDate(event.target.value)}
                  disabled={isDateLocked}
                />
              </label>
              {errors.selectedDate && <p className="field-error">{errors.selectedDate}</p>}
            </div>
          </section>

          <section className="booking-step">
            <div className="booking-step-heading">
              <span>Step 2</span>
              <div>
                <h2>Devotee Information</h2>
                <p>Use the primary devotee name that should appear on the seva record.</p>
              </div>
            </div>

            <div className="booking-form-grid">
              <label className="booking-field">
                Primary devotee name
                <input
                  type="text"
                  value={primaryDevoteeName}
                  onChange={(event) => setPrimaryDevoteeName(event.target.value)}
                  placeholder="Enter full name"
                  aria-invalid={Boolean(errors.primaryDevoteeName)}
                />
                {errors.primaryDevoteeName && <span>{errors.primaryDevoteeName}</span>}
              </label>

              <label className="booking-field">
                Contact information
                <input
                  type="tel"
                  value={contactNumber}
                  onChange={(event) => setContactNumber(event.target.value)}
                  placeholder="Mobile number"
                  aria-invalid={Boolean(errors.contactNumber)}
                />
                {errors.contactNumber && <span>{errors.contactNumber}</span>}
              </label>

              <label className="booking-field">
                Gotra
                <input
                  type="text"
                  value={gatraGotra}
                  onChange={(event) => setGatraGotra(event.target.value)}
                  placeholder="Optional"
                />
              </label>

              <label className="booking-field">
                Nakshatra
                <input
                  type="text"
                  value={nakshatra}
                  onChange={(event) => setNakshatra(event.target.value)}
                  placeholder="Optional"
                />
              </label>
            </div>
          </section>
        </div>

        <aside className="booking-summary-card" aria-label="Booking order summary">
          <div className="booking-step-heading summary-heading">
            <span>Step 3</span>
            <div>
              <h2>Order Summary</h2>
              <p>Review the ritual pass before payment.</p>
            </div>
          </div>

          <dl className="summary-list">
            <div>
              <dt>Ritual ID</dt>
              <dd>{selectedRitual.ritual_id}</dd>
            </div>
            <div>
              <dt>Ritual</dt>
              <dd>{selectedRitual.ritual_name}</dd>
            </div>
            <div>
              <dt>Time Slot</dt>
              <dd>{selectedRitual.time_slot}</dd>
            </div>
            <div>
              <dt>Execution Date</dt>
              <dd>{formatDisplayDate(selectedDate)}</dd>
            </div>
            <div>
              <dt>Availability</dt>
              <dd>{availabilityLabels[selectedAvailability]}</dd>
            </div>
          </dl>

          <label className="participant-control">
            <span>Participants</span>
            <div>
              <button
                type="button"
                onClick={() => setNumberOfParticipants((value) => Math.max(1, value - 1))}
                aria-label="Decrease participants"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                max="5"
                value={numberOfParticipants}
                onChange={(event) => setNumberOfParticipants(Number(event.target.value))}
              />
              <button
                type="button"
                onClick={() => setNumberOfParticipants((value) => Math.min(5, value + 1))}
                aria-label="Increase participants"
              >
                +
              </button>
            </div>
            {errors.numberOfParticipants && <em>{errors.numberOfParticipants}</em>}
          </label>

          <div className="price-breakdown">
            <div>
              <span>Base seva pass</span>
              <strong>{formatCurrency(selectedRitual.base_price)}</strong>
            </div>
            <div>
              <span>Additional devotees</span>
              <strong>{formatCurrency((numberOfParticipants - 1) * participantFee)}</strong>
            </div>
            <div className="summary-total">
              <span>Final Amount</span>
              <strong>{formatCurrency(dynamicPrice)}</strong>
            </div>
          </div>

          <button className="secure-payment-button" type="submit" disabled={!isFormValid}>
            Step 4: Proceed to Secure Payment
          </button>

          {submissionState && <p className="booking-submit-note">{submissionState}</p>}
        </aside>
      </form>
    </div>
  );
};

export default BookingSlot;
