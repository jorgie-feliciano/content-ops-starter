---
title: Contact
slug: contact
isDraft: false
seo:
  title: Contacta a Sonido Vivo
  description: >-
    Ponte en contacto con Sonido Vivo para alquiler de equipos de
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
    subtitle: Contact Sonido Vivo Today
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
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: ''
    fields:
      - name: first-name
        label: First Name
        hideLabel: false
        placeholder: Enter your first name
        isRequired: true
        width: 1/2
        type: TextFormControl
      - name: last-name
        label: Last Name
        hideLabel: false
        placeholder: Enter your last name
        isRequired: true
        width: 1/2
        type: TextFormControl
      - name: email
        label: Email Address
        hideLabel: false
        placeholder: your.email@example.com
        isRequired: true
        width: full
        type: EmailFormControl
      - name: phone
        label: Phone Number
        hideLabel: false
        placeholder: (123) 456-7890
        isRequired: false
        width: full
        type: TextFormControl
      - name: event-date
        label: Event Date
        hideLabel: false
        placeholder: MM/DD/YYYY
        isRequired: true
        width: full
        type: TextFormControl
      - name: event-type
        label: Event Type
        hideLabel: false
        defaultValue: Select event type
        options:
          - Wedding
          - Corporate Event
          - Concert
          - Private Party
          - Other
        isRequired: true
        width: full
        type: SelectFormControl
      - name: attendees
        label: Expected Number of Attendees
        hideLabel: false
        placeholder: Approximate number of guests
        isRequired: false
        width: full
        type: TextFormControl
      - name: message
        label: Additional Details
        hideLabel: false
        placeholder: Any additional information about your event or special requirements
        width: full
        type: TextareaFormControl
      - name: bot-field
        label: Don't fill this out
        hideLabel: false
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
