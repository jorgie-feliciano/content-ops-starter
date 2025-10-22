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
      Have questions about equipment rentals or need audio services for your
      event?  Contact us and we'll respond as soon as possible.
    badge:
      label: Contact Sonido Vivo
      color: text-primary
      type: Badge
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-12
          - pl-12
          - pb-6
          - pr-12
        alignItems: center
        justifyContent: center
  - type: GenericSection
    title:
      text: Request a Quote
      color: text-dark
      type: TitleBlock
    subtitle: Tell us about your event
    text: >
      Please provide information about your event so we can assist you with  the
      right equipment and services.
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
          placeholder: 'Type of event (concert, wedding, corporate, etc.)'
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
          placeholder: 'What equipment are you interested in? (PA system, microphones, etc.)'
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
            - pt-6
            - pb-6
            - pl-6
            - pr-6
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
          - pt-6
          - pl-12
          - pb-12
          - pr-12
  - title: Divider
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-5
          - pl-5
          - pb-5
          - pr-5
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
        text: |-
          Contact by phone to discuss audio needs.

          **321 300 5425**
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pl-6
              - pb-6
              - pr-6
            borderRadius: x-large
            flexDirection: col
            textAlign: center
      - type: FeaturedItem
        title: Email
        subtitle: Send us a message
        text: |-
          Send an email with event details.

          **contacto@sonidovivo.org**
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pl-6
              - pb-6
              - pr-6
            borderRadius: x-large
            flexDirection: col
            textAlign: center
      - type: FeaturedItem
        title: Location
        subtitle: Puerto Rico
        text: >-
          Sonido Vivo serves events and venues across Puerto Rico including San
          Juan, Bayamón, Carolina, Ponce, Caguas, Guaynabo, Mayagüez, Arecibo,
          Toa Baja, Trujillo Alto, and surrounding areas.


          **Puerto Rico**


          Island-wide service available
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pl-6
              - pb-6
              - pr-6
            borderRadius: x-large
            flexDirection: col
            textAlign: center
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-12
          - pl-12
          - pb-12
          - pr-12
        justifyContent: center
      subtitle:
        textAlign: center
  - title: Divider
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-5
          - pl-5
          - pb-5
          - pr-5
    type: DividerSection
  - type: GenericSection
    title:
      text: Service Areas
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: All of Puerto Rico
    text: >
      We proudly serve events and venues throughout Puerto Rico. From San Juan
      to Ponce, Mayagüez to Fajardo-- Wherever your event is, we're there.


      **Island-Wide Coverage**

      • Metro San Juan area

      • North, South, East & West regions

      • Mountain towns (Utuado, Jayuya, etc.)

      • For Coastal Venues and Beach/Remote locations (fees may apply)
    badge:
      label: Island-Wide Service
      color: text-primary
      styles:
        self:
          textAlign: center
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        padding:
          - pt-12
          - pl-12
          - pb-12
          - pr-12
  - title: Divider
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-5
          - pl-5
          - pb-5
          - pr-5
    type: DividerSection
  - type: GenericSection
    title:
      text: Frequently Asked Questions
      color: text-dark
      type: TitleBlock
    subtitle: Everything you need to know about our audio services
    text: >
      **How do I request equipment for my event?**


      Use the contact form above to provide details about your event, or reach
      out directly via phone (321-300-5425) or email
      (<contacto@sonidovivo.org>). We'll discuss your specific audio needs and
      provide a customized quote based on your event requirements.


      **What areas of Puerto Rico do you serve?**


      We serve events and venues across Puerto Rico including San Juan, Bayamón,
      Carolina, Ponce, Caguas, Guaynabo, Mayagüez, Arecibo, Toa Baja, Trujillo
      Alto, and surrounding municipalities throughout the island. No matter
      where your event is located, we can deliver professional audio solutions
      to your venue.


      **What services do you offer?**


      We provide comprehensive audio solutions including professional equipment
      rentals, sound engineering services, delivery and setup, technical support
      during events, and system optimization. Audio is our primary service, with
      video solutions available as an optional extension for select projects.


      **What equipment brands do you carry?**


      We offer premium brands including QSC, Midas, Sennheiser, Shure, sE
      Electronics, and Beyerdynamic for clients seeking top-tier audio quality.
      We also provide budget-friendly options from Mackie and Behringer,
      ensuring quality sound solutions for events of all budget levels.


      **What types of equipment are available?**


      Our inventory includes PA systems, powered and speakers, mixing consoles,
      microphones (dynamic, condenser, wireless), in ear monitors (wireless &
      wired systems), cables, and all necessary audio accessories.


      **Do you provide sound engineers for events?**


      Yes, we offer professional sound engineering services. Our experienced
      technicians can handle audio setup, live mixing, system optimization, and
      troubleshooting to ensure optimal sound quality throughout your event.


      **How far in advance should I book equipment?**


      We recommend booking as early as possible, especially for weekend events
      and peak seasons. Contact us with your event date, and we'll confirm
      availability and reserve the equipment you need.


      **Do you offer delivery, setup, and pickup services?**


      Yes, we provide complete logistics support including equipment delivery to
      your venue, professional setup and testing, and post-event pickup. Our
      team ensures everything is properly installed and functioning before your
      event begins.


      **What types of events do you serve?**


      We serve all types of events including concerts, weddings, corporate
      events, conferences, festivals, church services, school events, private
      parties, and venue installations throughout Puerto Rico.
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-12
          - pl-12
          - pb-12
          - pr-12
seo:
  metaTitle: Contact Us - Sonido Vivo Professional Audio Rentals
  metaDescription: >-
    Contact Sonido Vivo for professional audio equipment rentals in Puerto Rico.
    Equipment, sound engineering, and technical support services.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
