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
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        setSubmitted(true);
        setShowModal(true);
        formElement.reset();
      } else {
        console.error('Form submission failed');
        alert('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (!form || !fields || fields.length === 0) {
    return null;
  }

  return (
    <div
      id={formId}
      className={classNames(
        'sb-component',
        'sb-component-block',
        'sb-component-form-block',
        styles?.self?.margin
      )}
      data-sb-field-path={props['data-sb-field-path']}
    >
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className={classNames(
          'sb-form',
          styles?.self?.padding,
          styles?.self?.borderColor,
          styles?.self?.borderStyle ? mapStyles({ borderStyle: styles?.self?.borderStyle }) : 'border-none',
          styles?.self?.borderRadius ? mapStyles({ borderRadius: styles?.self?.borderRadius }) : null
        )}
      >
        {/* Hidden input for Netlify form registration */}
        <input type="hidden" name="form-name" value="contact" />
        
        {/* Honeypot field for spam protection */}
        <p style={{ display: 'none' }}>
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>

        <div className="sb-form-fields">
          {fields.map((field, index) => {
            const fieldType = field.type || field.__metadata?.modelName;
            if (!fieldType) {
              console.warn('Field missing type:', field);
              return null;
            }

            return (
              <div
                key={index}
                className={classNames(
                  'sb-form-field',
                  {
                    'mb-4': index < fields.length - 1,
                    'mb-6': index === fields.length - 1
                  }
                )}
                data-sb-field-path={`${props['data-sb-field-path']}.form.fields.${index}`}
              >
                <DynamicComponent {...field} />
              </div>
            );
          })}
        </div>

        {submitButton && (
          <div data-sb-field-path={`${props['data-sb-field-path']}.form.submitButton`}>
            <DynamicComponent {...submitButton} disabled={isSubmitting} />
          </div>
        )}
      </form>

      {/* Success Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Thank You!
            </h2>
            <p className="text-gray-700 mb-6">
              Thank you for contacting Sonido Vivo! We received your message and will get back to you.
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormBlock;
