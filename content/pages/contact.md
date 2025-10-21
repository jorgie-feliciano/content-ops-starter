---
title: Contact Us
slug: contact
sections:
  - type: GenericSection
    title:
      text: Get in Touch
      color: text-dark
      type: TitleBlock
    subtitle: Contact Sonido Vivo in Puerto Rico
    text: >
      Have questions about equipment rentals, live production services, or need expert consulting for your event? 
      Contact us and we'll respond as soon as possible to discuss how we can support your unique audio vision.
    badge:
      label: Contact Sonido Vivo
      color: text-primary
      type: Badge
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-8
          - pr-16
        alignItems: center
        justifyContent: center
  - type: GenericSection
    title:
      text: Request a Quote
      color: text-dark
      type: TitleBlock
    subtitle: Tell us about your event
    text: >
      Please provide information about your event so we can provide expert consulting 
      and recommend the right audio solutions and production services for your needs.
    media:
      fields:
        - name: name
          label: Name
          hideLabel: true
          placeholder: Your full name
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
          placeholder: What equipment or services are you interested in? (Audio equipment, video production, streaming, recording, consulting, etc.)
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
      styles:
        self:
          padding:
            - pt-8
            - pb-8
            - pl-8
            - pr-8
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: FormBlock
      submitButton:
        type: SubmitButtonFormControl
        label: Send Request
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: null
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-8
          - pl-16
          - pb-16
          - pr-16
  - title: Divider
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection
  - type: FeaturedItemsSection
    title:
      text: Other Ways to Reach Us
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: We're here to help
    items:
      - type: FeaturedItem
        title: Phone
        subtitle: Call us directly
        text: >-
          Contact us by phone to discuss your audio needs.
          
          
          **Contact for details**
        image:
          url: /images/icon1.svg
          altText: Phone contact
          type: ImageBlock
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
            textAlign: center
      - type: FeaturedItem
        title: Email
        subtitle: Send us a message
        text: >-
          Send us an email with your event details.
          
          
          **Contact for details**
        image:
          url: /images/icon2.svg
          altText: Email contact
          type: ImageBlock
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
            textAlign: center
      - type: FeaturedItem
        title: Location
        subtitle: Puerto Rico
        text: >-
          Sonido Vivo serves events and venues across Puerto Rico.
          
          
          **Puerto Rico**
          
          
          Contact us for service area details
        image:
          url: /images/icon3.svg
          altText: Visit us
          type: ImageBlock
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
            textAlign: center
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
  - title: Divider
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection
  - type: GenericSection
    title:
      text: About Our Services
      color: text-dark
      type: TitleBlock
    subtitle: Professional audio equipment rentals
    text: |
      **How do I request equipment or services?**
      
      Use the contact form above or reach out directly to discuss your event needs and receive expert consulting.
      
      
      **What areas do you serve?**
      
      We serve events and venues across Puerto Rico.
      
      
      **What services do you offer?**
      
      We provide equipment rentals featuring QSC, Midas, Sennheiser, and Shure, complete support for live session production including multi-camera video, recording for concerts and events, live projection, streaming capabilities, and expert consulting.
      
      
      **What equipment is available?**
      
      We offer PA systems (QSC), mixing consoles (Midas), microphones (Sennheiser, Shure), wireless systems, and complete audio packages.
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
seo:
  metaTitle: Contact Us - Sonido Vivo Professional Audio & Live Production
  metaDescription: Contact Sonido Vivo for professional audio solutions, equipment rentals, live production services, multi-camera video, recording, streaming, and expert consulting in Puerto Rico.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
