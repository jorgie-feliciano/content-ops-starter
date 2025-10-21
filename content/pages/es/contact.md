---
title: Contáctanos
slug: es/contact
sections:
  - type: GenericSection
    title:
      text: Comuníquese con Nosotros
      color: text-dark
      type: TitleBlock
    subtitle: Contacte a Sonido Vivo en Puerto Rico
    text: >
      ¿Tiene preguntas sobre alquiler de equipos o necesita servicios de audio para su evento? 
      Contáctenos y responderemos lo antes posible.
    badge:
      label: Contacte a Sonido Vivo
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
      text: Solicitar Cotización
      color: text-dark
      type: TitleBlock
    subtitle: Cuéntenos sobre su evento
    text: >
      Por favor proporcione información sobre su evento para que podamos asistirle con 
      los equipos y servicios adecuados.
    media:
      fields:
        - name: name
          label: Nombre
          hideLabel: true
          placeholder: Su nombre completo
          isRequired: true
          width: full
          type: TextFormControl
        - name: email
          label: Correo Electrónico
          hideLabel: true
          placeholder: Su dirección de correo electrónico
          isRequired: true
          width: full
          type: EmailFormControl
        - name: phone
          label: Teléfono
          hideLabel: true
          placeholder: Su número de teléfono
          isRequired: false
          width: full
          type: TextFormControl
        - name: event-type
          label: Tipo de Evento
          hideLabel: true
          placeholder: Tipo de evento (concierto, boda, corporativo, etc.)
          isRequired: true
          width: full
          type: TextFormControl
        - name: event-date
          label: Fecha del Evento
          hideLabel: true
          placeholder: Fecha del evento
          isRequired: true
          width: full
          type: TextFormControl
        - name: venue
          label: Local
          hideLabel: true
          placeholder: Nombre y ubicación del local
          isRequired: false
          width: full
          type: TextFormControl
        - name: attendees
          label: Asistentes Esperados
          hideLabel: true
          placeholder: Número aproximado de asistentes
          isRequired: false
          width: full
          type: TextFormControl
        - name: equipment
          label: Equipos Necesarios
          hideLabel: true
          placeholder: ¿Qué equipos necesita? (sistema PA, micrófonos, etc.)
          isRequired: false
          width: full
          type: TextareaFormControl
        - name: message
          label: Detalles Adicionales
          hideLabel: true
          placeholder: Cualquier información adicional sobre su evento o requisitos especiales
          width: full
          type: TextareaFormControl
        - name: bot-field
          label: No llene esto
          hideLabel: true
          placeholder: Deje este campo vacío
          isRequired: false
          width: full
          type: TextFormControl
      elementId: contact-form
      action: /es/contact
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
        label: Enviar Solicitud
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
      text: Otras Formas de Contactarnos
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Estamos aquí para ayudarle
    items:
      - type: FeaturedItem
        title: Teléfono
        subtitle: Llámenos directamente
        text: >-
          Contáctenos por teléfono para discutir sus necesidades de audio.
          
          
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
        title: Correo Electrónico
        subtitle: Envíenos un mensaje
        text: >-
          Envíenos un correo electrónico con los detalles de su evento.
          
          
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
        title: Ubicación
        subtitle: Puerto Rico
        text: >-
          Sonido Vivo sirve eventos y locales en todo Puerto Rico incluyendo San Juan, Bayamón, Carolina, Ponce, Caguas, Guaynabo, Mayagüez, Arecibo, Toa Baja, Trujillo Alto y áreas circundantes.
          
          
          **Puerto Rico**
          
          
          Servicio disponible en toda la isla
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
      text: Áreas de Servicio
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Todo Puerto Rico
    text: >
      Servimos con orgullo eventos y locaciones en todo Puerto Rico. Desde San Juan hasta Ponce, Mayagüez hasta Fajardo—donde sea que esté tu evento, ahí estaremos.


      **Cobertura en Toda la Isla**

      • Área metro de San Juan

      • Regiones norte, sur, este y oeste

      • Municipios montaña (Utuado, Jayuya, etc.)

      • Para locaciones costeras, playas y remotas (pueden aplicar cargos)
    badge:
      label: Servicio en Toda la Isla
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
      text: Preguntas Frecuentes
      color: text-dark
      type: TitleBlock
    subtitle: Todo lo que necesita saber sobre nuestros servicios de audio
    text: |
      **¿Cómo solicito equipos para mi evento?**
      
      Use el formulario de contacto arriba para proporcionar detalles sobre su evento, o comuníquese directamente por teléfono (321 300 5425) o correo electrónico (contacto@sonidovivo.org). Discutiremos sus necesidades específicas de audio y proveeremos una cotización personalizada basada en los requisitos de su evento.
      
      
      **¿Qué áreas de Puerto Rico cubren?**
      
      Servimos eventos y locales en todo Puerto Rico incluyendo San Juan, Bayamón, Carolina, Ponce, Caguas, Guaynabo, Mayagüez, Arecibo, Toa Baja, Trujillo Alto y municipios circundantes en toda la isla. No importa dónde esté ubicado su evento, podemos entregar soluciones de audio profesional a su local.
      
      
      **¿Qué servicios ofrecen?**
      
      Proveemos soluciones de audio integrales incluyendo alquiler de equipos profesionales, servicios de ingeniería de sonido, entrega e instalación, soporte técnico durante eventos y optimización de sistemas. El audio es nuestro servicio principal, con soluciones de video disponibles como extensión opcional para proyectos selectos.
      
      
      **¿Qué marcas de equipos tienen?**
      
      Ofrecemos marcas premium incluyendo QSC, Midas, Sennheiser, Shure, sE Electronics y Beyerdynamic para clientes que buscan calidad de audio de primer nivel. También proveemos opciones económicas de Mackie y Behringer, asegurando soluciones de sonido de calidad para eventos de todos los niveles de presupuesto.
      
      
      **¿Qué tipos de equipos están disponibles?**
      
      Nuestro inventario incluye sistemas de PA, bocinas line array, bocinas activas y pasivas, consolas de mezcla (digitales y análogas), micrófonos (dinámicos, de condensador, inalámbricos), sistemas inalámbricos, cables y todos los accesorios de audio necesarios.
      
      
      **¿Proveen ingenieros de sonido para eventos?**
      
      Sí, ofrecemos servicios profesionales de ingeniería de sonido. Nuestros técnicos experimentados pueden manejar la configuración de audio, mezcla en vivo, optimización de sistemas y solución de problemas para asegurar calidad de sonido óptima durante todo su evento.
      
      
      **¿Con cuánta anticipación debo reservar equipos?**
      
      Recomendamos reservar lo antes posible, especialmente para eventos de fin de semana y temporadas altas. Contáctenos con la fecha de su evento y confirmaremos disponibilidad y reservaremos los equipos que necesita.
      
      
      **¿Ofrecen servicios de entrega, instalación y recogida?**
      
      Sí, proveemos soporte logístico completo incluyendo entrega de equipos a su local, instalación profesional y pruebas, y recogida después del evento. Nuestro equipo asegura que todo esté instalado apropiadamente y funcionando antes de que comience su evento.
      
      
      **¿Qué tipos de eventos sirven?**
      
      Servimos todo tipo de eventos incluyendo conciertos, bodas, eventos corporativos, conferencias, festivales, servicios religiosos, eventos escolares, fiestas privadas e instalaciones de locales en todo Puerto Rico.
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-12
          - pl-12
          - pb-12
          - pr-12
seo:
  metaTitle: Contáctanos - Sonido Vivo Alquiler de Audio Profesional
  metaDescription: Contacte a Sonido Vivo para alquiler de equipos de audio profesional en Puerto Rico. Equipos, ingeniería de sonido y servicios de soporte técnico.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
