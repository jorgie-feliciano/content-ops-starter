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
      type: FormBlock
      elementId: contact-form
      action: /contact
      destination: ''
      fields:
        - type: TextFormControl
          name: name
          label: Name
          hideLabel: false
          placeholder: Your name
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: false
          placeholder: Your email
          isRequired: true
          width: full
        - type: TextFormControl
          name: phone
          label: Phone
          hideLabel: false
          placeholder: Your phone number
          isRequired: false
          width: full
        - type: SelectFormControl
          name: event-type
          label: Event Type
          hideLabel: false
          defaultValue: Please select
          options:
            - Please select
            - Wedding
            - Corporate Event
            - Birthday Party
            - Concert/Festival
            - Conference
            - Other
          isRequired: true
          width: full
        - type: TextFormControl
          name: event-date
          label: Event Date
          hideLabel: false
          placeholder: MM/DD/YYYY
          isRequired: false
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
          placeholder: Number of guests
          isRequired: false
          width: full
        - type: TextareaFormControl
          name: equipment
          label: Equipment Needed
          hideLabel: false
          placeholder: Tell us about your sound/equipment needs
          isRequired: false
          width: full
        - type: TextareaFormControl
          name: details
          label: Additional Details
          hideLabel: false
          placeholder: Any other information we should know
          isRequired: false
          width: full
        - type: TextFormControl
          name: bot-field
          label: Don't fill this out if you're human
          hideLabel: true
          placeholder: ''
          isRequired: false
          width: full
      submitButton:
        type: SubmitButtonFormControl
        label: Send Request
        icon: arrowRight
        iconPosition: right
        style: primary
    badge:
      label: ''
      color: text-primary
      styles:
        self:
          textAlign: center
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: row
        justifyContent: center
      subtitle:
        textAlign: center
---
