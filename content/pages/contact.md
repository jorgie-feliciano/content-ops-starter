---
title: Contact
slug: contact
type: PageLayout
sections:
  - type: ContactSection
    title:
      type: TitleBlock
      text: Contact
      color: text-dark
    subtitle: >-
      We provide professional sound equipment, installation, and technical
      support for concerts, corporate events, and more.
    text: ''
    media:
      type: ImageBlock
      altText: Contact us
      elementId: ''
      styles:
        self:
          padding:
            - pt-0
            - pl-0
            - pb-0
            - pr-0
    colors: colors-f
    form:
      type: FormBlock
      fields:
        - type: TextFormControl
          name: name
          label: Name
          placeholder: Name
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          placeholder: Email
          isRequired: true
          width: full
        - type: TelFormControl
          name: phone
          label: Phone
          placeholder: Phone
          isRequired: false
          width: full
        - type: TextareaFormControl
          name: message
          label: Message
          placeholder: Tell us about your event...
          isRequired: true
          width: full
      submitLabel: Submit
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      styles:
        submitButton:
          textAlign: left
    styles:
      self:
        flexDirection: row
        justifyContent: center
  - type: GenericSection
    title:
      type: TitleBlock
      text: Get in Touch
      color: text-dark
    subtitle: Office Location & Hours
    text: >
      **Address:** Calle Principal 123, San Juan, Puerto Rico 00901


      **Phone:** +1 (787) 555-0123


      **Email:** info@sonidovivo.pr


      **Business Hours:**

      Monday - Friday: 9:00 AM - 6:00 PM

      Saturday: 10:00 AM - 3:00 PM

      Sunday: Closed
    actions: []
    colors: colors-f
    styles:
      self:
        flexDirection: row
        justifyContent: center
seo:
  metaTitle: Contact Sonido Vivo - Sound Equipment Rentals Puerto Rico
  metaDescription: >-
    Contact Sonido Vivo for professional sound equipment rentals, installation,
    and technical support in Puerto Rico. Available for concerts, events, and
    more.
  socialImage: /images/social.png
  type: Seo
---
