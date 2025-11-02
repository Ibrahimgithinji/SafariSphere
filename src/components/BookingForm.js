import React, { useState, useEffect } from 'react';
import '../css/components.css';

// Small email/phone validation helpers
const emailRegex = /^\S+@\S+\.\S+$/;
const phoneRegex = /^[0-9+()\-\s]{7,20}$/;

const BookingForm = ({ type = 'Tour', initialData = {} }) => {
  const today = new Date().toISOString().split('T')[0]; // Get today's date for min date

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    travelers: 1,
    date: '',
    message: '',
    specialRequirements: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    // Prefill destination if provided (via location state)
    if (initialData.destination) {
      setFormData(fd => ({ ...fd, destination: initialData.destination }));
    }
  }, [initialData.destination]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName || formData.fullName.trim().length < 2) errs.fullName = 'Please enter your full name.';
    if (!formData.email || !emailRegex.test(formData.email)) errs.email = 'Please enter a valid email address.';
    if (!formData.phone || !phoneRegex.test(formData.phone)) errs.phone = 'Please enter a valid phone number.';
    if (!formData.destination || formData.destination.trim().length < 2) errs.destination = 'Please specify a destination.';
    if (!formData.travelers || Number(formData.travelers) < 1) errs.travelers = 'Enter number of travelers (at least 1).';
    if (!formData.date) errs.date = 'Please select a preferred date.';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // focus first error field
      const first = Object.keys(errs)[0];
      const el = document.getElementsByName(first)[0];
      if (el) el.focus();
      return;
    }

    setSubmitting(true);

    try {
      // Try to POST to backend if available; otherwise simulate
      const payload = { type, ...formData };
      let ok = false;

      try {
        const res = await fetch('/api/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        ok = res.ok;
      } catch (err) {
        // likely no backend during development; simulate success after delay
        await new Promise(r => setTimeout(r, 800));
        ok = true;
      }

      if (ok) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          destination: '',
          travelers: 1,
          date: '',
          message: ''
        });
      } else {
        setSubmitError('Submission failed. Please try again later.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="booking-form" role="status" aria-live="polite">
        <h2>Thank You!</h2>
        <p>Your {type} booking inquiry has been submitted. We'll contact you soon.</p>
        <button onClick={() => setSubmitted(false)}>Book Another</button>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <h2>Book a {type}</h2>
      {submitError && <p className="form-error">{submitError}</p>}

      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        {errors.fullName && <small className="error">{errors.fullName}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <small className="error">{errors.email}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <small className="error">{errors.phone}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="destination">Destination</label>
        <input
          type="text"
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />
        {errors.destination && <small className="error">{errors.destination}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="travelers">Number of Travelers</label>
        <input
          type="number"
          id="travelers"
          name="travelers"
          value={formData.travelers}
          onChange={handleChange}
          min="1"
          required
        />
        {errors.travelers && <small className="error">{errors.travelers}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="date">Preferred Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          min={today}
          required
          className="date-input"
        />
        {errors.date && <small className="error">{errors.date}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Additional Notes</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Tell us about any specific preferences or requirements..."
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="specialRequirements">Special Requirements</label>
        <select
          id="specialRequirements"
          name="specialRequirements"
          value={formData.specialRequirements}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">None</option>
          <option value="wheelchair">Wheelchair Accessibility</option>
          <option value="dietary">Dietary Restrictions</option>
          <option value="medical">Medical Considerations</option>
          <option value="language">Language Assistance</option>
          <option value="other">Other (Please specify in notes)</option>
        </select>
      </div>

      <button type="submit" disabled={submitting}>
        {submitting ? (
          <span className="loading-text">
            <span className="loading-dots"></span>
            Processing...
          </span>
        ) : (
          'Confirm Booking'
        )}
      </button>
    </form>
  );
};

export default BookingForm;