import React, { useState } from "react"

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
      .then(() => setSubmitted(true))
      .catch((error) => {
        console.error('Form submission error:', error)
        alert('There was an error submitting the form. Please try again.')
      })
  }

  return (
    <div>
      {!submitted ? (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* Netlify requires this hidden input */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="phone" placeholder="Phone" />
          <input type="text" name="eventType" placeholder="Event Type" required />
          <input type="date" name="eventDate" placeholder="Event Date" required />
          <input type="text" name="venue" placeholder="Venue" />
          <input type="number" name="attendees" placeholder="Expected Attendees" />
          <input type="text" name="equipment" placeholder="Equipment Needed" />
          <textarea name="details" placeholder="Additional Details"></textarea>
          {/* Simple honeypot for bots */}
          <input type="text" name="bot-field" style={{ display: "none" }} />
          <button type="submit">Send Request</button>
        </form>
      ) : (
        <div>
          <p>Thank you for contacting Sonido Vivo. We received your message and will get back to you shortly!</p>
        </div>
      )}
    </div>
  )
}

export default FormBlock
