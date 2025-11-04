import React, { useState } from 'react';
import classNames from 'classnames';

import { DynamicComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

type FormBlockProps = {
  elementId?: string;
  form?: {
    fields?: any[];
    submitButton?: any;
    elementId?: string;
    action?: string;
    destination?: string;
  };
  styles?: any;
  [key: string]: any;
};

const FormBlock: React.FC<FormBlockProps> = (props) => {
  const { elementId, form, styles = {} } = props;
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formId = form?.elementId || elementId || 'contact-form';
  const fields = form?.fields || [];
  const submitButton = form?.submitButton;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    try {
      // Submit to Netlify
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        // Show success modal
        setShowModal(true);
        setSubmitted(true);
        // Reset form after a short delay to allow modal to display
        setTimeout(() => {
          formElement.reset();
        }, 100);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form
        id={formId}
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className={classNames(styles?.self?.flexDirection ? mapStyles({ flexDirection: styles.self.flexDirection }) : '')}
      >
        {/* Netlify requires this hidden input */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Honeypot field for spam prevention */}
        <p style={{ display: 'none' }}>
          <label>
            Don't fill this out: <input name="bot-field" />
          </label>
        </p>

        {/* Dynamically render form fields */}
        {fields.map((field, index) => (
          <DynamicComponent key={index} {...field} />
        ))}

        {/* Render submit button */}
        {submitButton && <DynamicComponent {...submitButton} />}
      </form>

      {/* Success Modal */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '8px',
              maxWidth: '500px',
              width: '90%',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#666',
              }}
              aria-label="Close"
            >
              ×
            </button>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '3rem',
                  color: '#4CAF50',
                  marginBottom: '1rem',
                }}
              >
                ✓
              </div>
              <h2 style={{ marginBottom: '1rem', color: '#333' }}>
                Thank you for contacting Sonido Vivo!
              </h2>
              <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                We received your message and will get back to you.
              </p>
              <button
                onClick={closeModal}
                style={{
                  backgroundColor: '#0066cc',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  fontWeight: '600',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormBlock;
