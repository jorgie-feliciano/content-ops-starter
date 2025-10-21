---
title: Contact Us
slug: contact
sections:
  - type: GenericSection
    title:
      text: Get in Touch
      color: text-dark
      type: TitleBlock
    subtitle: Let's discuss your audio needs
    text: >
      Ready to rent equipment or need expert advice for your event? Fill out the form below 
      and our team will respond within 24 hours. We're here to help make your event sound amazing.
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
      Please provide as much detail as possible about your event. This helps us 
      recommend the perfect equipment package and provide an accurate quote.
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
          Prefer to talk? Give us a call during business hours. We're happy to 
          discuss your needs and answer any questions.
          
          
          **(555) 123-4567**
          
          
          Monday - Friday: 9am - 6pm
          
          Saturday: 10am - 4pm
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
          For detailed inquiries or to send documents, reach us via email. 
          We respond to all messages within 24 hours.
          
          
          **info@sonidovivo.com**
          
          
          Include your event details for faster service
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
        title: Visit Us
        subtitle: See our equipment
        text: >-
          Want to see our equipment in person? Schedule a visit to our facility. 
          We'd love to show you our inventory and discuss your needs face-to-face.
          
          
          **By Appointment Only**
          
          
          Contact us to schedule a visit
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
      text: Frequently Asked Questions
      color: text-dark
      type: TitleBlock
    subtitle: Quick answers to common questions
    text: |
      **How far in advance should I book equipment?**
      
      We recommend booking at least 2-4 weeks in advance for most events. For large events or peak seasons (spring/summer), book 6-8 weeks ahead.
      
      
      **Do you deliver and set up equipment?**
      
      Yes! We offer delivery, setup, and pickup services. Technical support and sound engineering are also available.
      
      
      **What if something goes wrong during my event?**
      
      All equipment is tested before delivery. We provide on-call technical support and can dispatch a technician if needed.
      
      
      **Do you offer packages or custom quotes?**
      
      Both! We have standard packages for common event types and create custom quotes for unique requirements.
      
      
      **What is your cancellation policy?**
      
      Cancellations made 14+ days before your event receive a full refund. Contact us to discuss our complete policy.
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
seo:
  metaTitle: Contact Us - Sonido Vivo Professional Audio Rentals
  metaDescription: Get in touch with Sonido Vivo for professional audio equipment rentals. Request a quote, ask questions, or schedule a consultation for your event.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
