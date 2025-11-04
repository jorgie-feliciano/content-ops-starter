---
title: Contact
slug: contact
isDraft: false
type: PageLayout
seo:
  title: Contacta a Sonido Vivo
  description: >-
    Ponte en contacto con Sonido Vivo para alquiler de equipos de sonido.
    Completa nuestro formulario para tu evento.
  thumbnail: images/soundwave-equipment-logo-facebook.jpg
  noindex: false
sections:
  - type: GenericSection
    title:
      text: Get Professional Sound for Your Event
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Contact Sonido Vivo Today
    text: >+
      Fill out the form below and let us know about your event. We'll get back
      to you with equipment options and pricing.

    actions: []
    media:
      type: ImageBlock
    colors: colors-f
    styles:
      self:
        padding:
          - pt-28
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        flexDirection: row-reverse
        justifyContent: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
  - type: FormBlock
    fields:
      - name: name
        label: Name
        hideLabel: true
        placeholder: Your name
        isRequired: true
        width: full
        type: TextFormControl
      - name: email
        label: Email
        hideLabel: true
        placeholder: Your email address
        isRequired: true
        width: full
        type: EmailFormControl
      - name: phone
        label: Phone
        hideLabel: true
        placeholder: Your phone number
        isRequired: false
        width: full
        type: TextFormControl
      - name: event-type
        label: Event Type
        hideLabel: true
        placeholder: Type of event (concert, wedding, corporate, etc.)
        isRequired: true
        width: full
        type: TextFormControl
      - name: event-date
        label: Event Date
        hideLabel: true
        placeholder: Event date
        isRequired: true
        width: full
        type: TextFormControl
      - name: venue
        label: Venue
        hideLabel: true
        placeholder: Venue name and location
        isRequired: false
        width: full
        type: TextFormControl
      - name: attendees
        label: Expected Attendees
        hideLabel: true
        placeholder: Approximate number of attendees
        isRequired: false
        width: full
        type: TextFormControl
      - name: equipment
        label: Equipment Needed
        hideLabel: true
        placeholder: What equipment are you interested in? (PA system, microphones, etc.)
        isRequired: false
        width: full
        type: TextareaFormControl
      - name: message
        label: Additional Details
        hideLabel: true
        placeholder: Any additional information about your event or special requirements
        width: full
        type: TextareaFormControl
      - name: bot-field
        label: Don't fill this out
        hideLabel: true
        placeholder: Leave this field empty
        isRequired: false
        width: full
        type: TextFormControl
    elementId: contact-form
    action: /contact
    destination: ''
    submitButton:
      type: SubmitButtonFormControl
      label: Send Request
      showIcon: false
      icon: arrowRight
      iconPosition: right
      style: primary
      elementId: contact-form-submit
    styles:
      self:
        padding:
          - pt-6
          - pb-6
          - pl-6
          - pr-6
        borderColor: border-dark
        borderStyle: solid
        borderWidth: 1
        borderRadius: large
    colors: colors-a
  - type: GenericSection
    title:
      text: Contact Information
      color: text-dark
      styles:
        self:
          textAlign: left
      type: TitleBlock
    subtitle: ''
    text: |-
      **Phone:** (787) 548-9643

      **Email:** sonidovivo2011@gmail.com

      **Hours:** Monday-Sunday, 8:00 AM - 8:00 PM AST
    actions: []
    colors: colors-f
    styles:
      self:
        flexDirection: col
        justifyContent: center
  - type: GenericSection
    title:
      text: Service Area
      color: text-dark
      type: TitleBlock
    subtitle: We proudly serve all of Puerto Rico
    text: >-
      Whether you're in San Juan, Ponce, Mayagüez, or anywhere else on the
      island, Sonido Vivo is ready to deliver professional audio equipment for
      your event.
    actions: []
    colors: colors-f
    styles:
      self:
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        flexDirection: col
  - type: GenericSection
    title:
      text: Frequently Asked Questions
      color: text-dark
      type: TitleBlock
    subtitle: ''
    text: >+
      **What types of events do you serve?**


      We provide sound systems for concerts, weddings, corporate events,
      festivals, church services, and any occasion that needs professional audio.


      **How far in advance should I book?**


      We recommend booking at least 2-4 weeks in advance, especially for weekend
      events. However, we'll do our best to accommodate last-minute requests.


      **Do you provide setup and technical support?**


      Yes, all our rentals include delivery, professional setup, and on-site
      technical support to ensure everything runs smoothly.


      **What's included in the rental price?**


      Our rental packages include equipment delivery, setup, operation during the
      event, and pickup. Specific pricing depends on your event size and
      equipment needs.

    actions: []
    colors: colors-f
    styles:
      self:
        padding:
          - pt-12
          - pb-40
          - pl-4
          - pr-4
        alignItems: flex-start
        flexDirection: col
---
