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
          isRequired: false
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
            - pt-6
            - pb-6
            - pl-6
