import React, { useState } from "react"

const FormBlock = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {!submitted ? (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={() => setSubmitted(true)}
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

export default FormBlock;
