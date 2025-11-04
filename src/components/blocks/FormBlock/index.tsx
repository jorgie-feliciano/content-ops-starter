import React, { useState } from 'react'

const FormBlock = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const form = event.currentTarget
    const formData = new FormData(form)
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        alert('Thank you for contacting Sonido Vivo! We received your message and will get back to you.')
        form.reset()
      })
      .catch((error) => {
        console.error('Form submission error:', error)
        alert('There was an error submitting the form. Please try again.')
      })
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
      >
        {/* Netlify requires this hidden input */}
        <input type="hidden" name="form-name" value="contact" />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="name" style={{ fontWeight: '600' }}>Your Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your Name"
            style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="email" style={{ fontWeight: '600' }}>Your Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Your Email"
            style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="phone" style={{ fontWeight: '600' }}>Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Phone Number"
            style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="eventType" style={{ fontWeight: '600' }}>Event Type *</label>
          <input
            id="eventType"
            name="eventType"
            type="text"
            required
            placeholder="Wedding, Corporate Event, Party, etc."
            style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="eventDate" style={{ fontWeight: '600' }}>Event Date *</label>
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            required
            style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="venue" style={{ fontWeight: '600' }}>Venue/Location *</label>
          <input
            id="venue"
            name="venue"
            type="text"
            required
            placeholder="Venue or Location"
            style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="attendees" style={{ fontWeight: '600' }}>Expected Number of Attendees</label>
          <input
            id="attendees"
            name="attendees"
            type="number"
            placeholder="Number of Attendees"
            style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="equipment" style={{ fontWeight: '600' }}>Equipment Needed</label>
          <input
            id="equipment"
            name="equipment"
            type="text"
            placeholder="Speakers, Microphones, DJ Equipment, etc."
            style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="details" style={{ fontWeight: '600' }}>Additional Details</label>
          <textarea
            id="details"
            name="details"
            placeholder="Additional Details"
            rows={5}
            style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', resize: 'vertical' }}
          />
        </div>

        {/* Simple honeypot for bots */}
        <input type="text" name="bot-field" style={{ display: 'none' }} />

        <button
          type="submit"
          style={{
            padding: '1rem',
            backgroundColor: '#0066cc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Send Request
        </button>
      </form>
    </div>
  )
}

export default FormBlock
