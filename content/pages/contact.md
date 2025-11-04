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
        - type: TextareaFormControl
          name: message
          label: Message
          hideLabel: false
          placeholder: Your message
          isRequired: true
          width: full
      submitButton:
        type: SubmitButtonFormControl
        label: Send Message
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
      elementId: ''
      action: /.netlify/functions/submission_created
      destination: ''
      styles:
        self:
          padding:
            - pt-0
            - pb-0
            - pl-0
            - pr-0
    elementId: ''
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
