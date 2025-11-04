---
title: Contact
slug: contact
type: PageLayout
sections:
  - type: ContactSection
    title:
      type: TitleBlock
      text: Get in Touch
      color: text-dark
    subtitle: >-
      Have questions? Need a quote? Contact us and we'll respond as soon as
      possible.
    text: ''
    media:
      type: ImageBlock
      url: /images/img-placeholder-dark.svg
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
        - type: TextareaFormControl
          name: message
          label: Message
          hideLabel: false
          placeholder: Tell us about your project or event
          isRequired: true
          width: full
      submitLabel: Send Message
      styles:
        submitButton:
          type: SubmitButtonFormControl
          color: bg-primary
          size: medium
    actions: []
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      subtitle:
        textAlign: center
      text:
        textAlign: center
  - type: FaqSection
    title:
      type: TitleBlock
      text: Frequently Asked Questions
      color: text-dark
    subtitle: ''
    items:
      - type: FaqItem
        question: What services do you offer?
        answer: >-
          We offer professional sound equipment for concerts, corporate events,
          and private parties. We also provide technical installation and
          on-site support.
      - type: FaqItem
        question: Do you offer custom quotes?
        answer: >-
          Yes, each event is unique. Contact us with the details of your event
          and we'll provide you with a personalized quote.
      - type: FaqItem
        question: What is your coverage area?
        answer: >-
          We primarily serve the metropolitan area, but we also take on projects
          in other regions. Contact us to discuss your specific needs.
      - type: FaqItem
        question: Do you offer technical support during the event?
        answer: >-
          Yes, we offer complete technical support during your event to ensure
          everything runs perfectly.
    colors: colors-f
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pr-4
          - pl-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
  - type: GenericSection
    title:
      type: TitleBlock
      text: Contact Information
      color: text-dark
    subtitle: ''
    text: |
      **Phone:** (555) 123-4567

      **Email:** info@soundequipment.com

      **Address:** 123 Main Street, Your City, State 12345

      **Business Hours:** Monday to Friday, 9:00 AM - 6:00 PM
    actions: []
    media:
      type: ImageBlock
      url: /images/img-placeholder.svg
      altText: Contact information
    colors: colors-f
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      subtitle:
        textAlign: center
      text:
        textAlign: center
---
