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

    media:
      type: ImageBlock
      altText: Phone Icon
      styles:
        self:
          margin:
            - mt-0
            - mb-12
      url: /images/phone-icon.png
    badge:
      label: AVAILABLE 24/7
      color: text-primary
      styles:
        self:
          textAlign: center
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: col
        justifyContent: center
      subtitle:
        textAlign: center
  - type: FormBlock
    variant: card
    colors: bg-light-fg-dark
    backgroundImage:
      type: BackgroundImage
      altText: altText of the image
      backgroundSize: auto
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
    title:
      text: Request a Quote
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Tell us about your event
    styles:
      self:
        padding:
          - pt-6
          - pl-6
          - pb-6
          - pr-6
        justifyContent: center
      submitButton:
        textAlign: center
    action: /.netlify/functions/submission-created
    destination: ''
    submitButton:
      type: SubmitButtonFormControl
      label: Send Request
      icon: arrowRight
      iconPosition: right
      style: primary
    elementId: contact-form
