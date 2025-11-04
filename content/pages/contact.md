---
title:
  type: TitleBlock
  text: Contact Us
  color: text-dark
  styles:
    self:
      textAlign: center
slug: contact
type: PageLayout
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: Get in Touch
      color: text-dark
      styles:
        self:
          textAlign: left
    subtitle: Contact Sonido Vivo in Puerto Rico
    text: >+
      Whether you need professional sound equipment for a corporate event,
      wedding, concert, or any special occasion, we're here to help. Fill out
      the form below or reach us directly through the contact information
      provided.

    actions: []
    badge:
      type: Badge
      label: Contact
      color: text-primary
    colors: colors-f
    backgroundImage: null
    styles:
      self:
        flexDirection: row
        justifyContent: center
  - type: ImageBlock
    url: /images/main-hero.jpg
    altText: Professional Audio Equipment Rental Puerto Rico
    caption: ''
    elementId: ''
    colors: colors-f
    styles:
      self:
        padding:
          - pt-0
          - pl-0
          - pb-0
          - pr-0
  - type: FormBlock
    elementId: contact-form
    action: /.netlify/functions/submission-created
    destination: ''
    method: POST
    fields:
      - type: TextFormControl
        name: name
        label: Name
        hideLabel: false
        placeholder: Your full name
        isRequired: true
        width: full
      - type: EmailFormControl
        name: email
        label: Email
        hideLabel: false
        placeholder: Your email address
        isRequired: true
        width: full
      - type: TextFormControl
        name: phone
        label: Phone
        hideLabel: false
        placeholder: Your phone number
        isRequired: false
        width: full
      - type: TextFormControl
        name: event-type
        label: Event Type
        hideLabel: false
        placeholder: 'e.g., Wedding, Conference, Concert'
        isRequired: true
        width: full
      - type: TextFormControl
        name: event-date
        label: Event Date
        hideLabel: false
        placeholder: Preferred date for your event
        isRequired: true
        width: full
      - type: TextFormControl
        name: venue
        label: Venue
        hideLabel: false
        placeholder: Event location
        isRequired: false
        width: full
      - type: TextFormControl
        name: attendees
        label: Expected Attendees
        hideLabel: false
        placeholder: Approximate number of guests
        isRequired: false
        width: full
      - type: TextareaFormControl
        name: equipment
        label: Equipment Needed
        hideLabel: false
        placeholder: Describe the audio equipment you're looking for
        isRequired: false
        width: full
      - type: TextareaFormControl
        name: message
        label: Additional Details
        hideLabel: false
        placeholder: Any other information about your event
        isRequired: false
        width: full
      - type: TextFormControl
        name: bot-field
        label: Don't fill this out if you're human
        hideLabel: true
        placeholder: ''
        isRequired: false
        width: full
    submitLabel: Send Request
    styles:
      self:
        padding:
          - pt-6
          - pb-6
          - pl-6
          - pr-6
      submitLabel:
        textAlign: center
    colors: colors-f
  - type: GenericSection
    title:
      type: TitleBlock
      text: Other Ways to Reach Us
      color: text-dark
      styles:
        self:
          textAlign: left
    subtitle: Contact Information
    text: >+
      **Phone:** +1 (787) 555-0123


      **Email:** contacto@sonidovivo.org


      **Hours:** Monday-Friday, 9AM-6PM AST


      We're available for emergency rentals outside regular hours. Call us to
      discuss your needs.

    actions: []
    media: null
    colors: colors-f
    styles:
      self:
        flexDirection: row
        justifyContent: center
  - type: GenericSection
    title:
      type: TitleBlock
      text: Service Areas
      color: text-dark
      styles:
        self:
          textAlign: left
    subtitle: Island-Wide Coverage
    text: >+
      We serve all of Puerto Rico, from San Juan to Ponce, Mayagüez to Fajardo.
      Our professional audio equipment and experienced technicians are ready to
      make your event a success, wherever you are on the island.

    actions: []
    colors: colors-f
    styles:
      self:
        flexDirection: row
        justifyContent: center
  - type: GenericSection
    title:
      type: TitleBlock
      text: Frequently Asked Questions
      color: text-dark
      styles:
        self:
          textAlign: left
    subtitle: Common Questions About Our Services
    text: >+
      **How far in advance should I book?**


      We recommend booking at least 2-3 weeks in advance, especially for weekend
      events. However, we can often accommodate last-minute requests.


      **Do you provide setup and technical support?**


      Yes! All our rentals include professional setup and on-site technical
      support to ensure everything runs smoothly.


      **What's included in the rental price?**


      Our rental prices include equipment delivery, setup, technical support
      during your event, and pickup after the event.


      **Can I pick up equipment myself?**


      Yes, if you prefer to pick up and return equipment yourself, we offer a
      discount on the rental price.


      **What if I need to cancel or reschedule?**


      We understand that plans change. Contact us as soon as possible if you
      need to modify your booking. Our cancellation policy varies depending on
      how far in advance you notify us.


      **Do you rent equipment for multi-day events?**


      Absolutely! We offer special rates for multi-day rentals and can customize
      packages for festivals, conferences, and extended events.


      **What areas of Puerto Rico do you serve?**


      We provide service throughout Puerto Rico, including San Juan, Ponce,
      Mayagüez, Caguas, and all other municipalities.


      **Do you offer bilingual service?**


      Yes, our team is fully bilingual in Spanish and English to serve all our
      clients comfortably.


      **What payment methods do you accept?**


      We accept cash, all major credit cards, bank transfers, and ATH Móvil for
      your convenience.

    actions: []
    colors: colors-f
    styles:
      self:
        flexDirection: row
        justifyContent: center
seo:
  metaTitle: Contact Us - Sonido Vivo Professional Audio Rentals
  metaDescription: >-
    Contact Sonido Vivo for professional audio equipment rentals in Puerto Rico.
    Get a quote for your wedding, corporate event, concert, or special occasion.
  socialImage: /images/main-hero.jpg
  type: Seo
