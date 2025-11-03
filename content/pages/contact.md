---
title: Contact
slug: contact
isDraft: false
seo:
  title: Contacta a SoundWave Equipment
  description: >-
    Ponte en contacto con SoundWave Equipment para alquiler de equipos de
    sonido. Completa nuestro formulario para tu evento.
  thumbnail: images/soundwave-equipment-logo-facebook.jpg
  noindex: false
sections:
  - title:
      text: Get Professional Sound for Your Event
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Contact SoundWave Equipment Today
    text: >+
      Fill out the form below and let us know about your event. We'll get back
      to you with equipment options and pricing.

    media:
      altText: Sound equipment at event
      elementId: ''
      styles:
        self:
          borderRadius: medium
      type: ImageBlock
    badge:
      label: Available 24/7
      color: text-primary
      styles:
        self:
          textAlign: center
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-9
          - pb-9
          - pl-9
          - pr-9
        alignItems: center
        flexDirection: row-reverse
        justifyContent: center
      subtitle:
        textAlign: center
    type: GenericSection
  - title:
      text: Request Equipment Quote
      color: text-dark
      type: TitleBlock
    text: >
      We rent professional audio equipment for all types of events. Fill out the
      form and we'll provide you with options and pricing.
    form:
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
          placeholder: >-
            What equipment are you interested in? (PA system, microphones,
            etc.)
          isRequired: false
          width: full
          type: TextareaFormControl
        - name: message
          label: Additional Details
          hideLabel: true
          placeholder: >-
            Any additional information about your event or special
            requirements
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
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
        submitButton:
          textAlign: center
      submitButton:
        type: SubmitButtonFormControl
        label: Submit
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: sign-up-submit-btn
    colors: bg-light-fg-dark
    backgroundImage:
      type: BackgroundImage
      altText: altText of the image
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
    styles:
      self:
        padding:
          - pt-12
          - pb-12
          - pr-6
          - pl-6
        alignItems: center
      subtitle:
        textAlign: center
    type: FormBlock
type: PageLayout
---
