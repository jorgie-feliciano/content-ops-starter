import React, { useState } from 'react';
import classNames from 'classnames';
import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

type FormBlockProps = {
  elementId?: string;
  form?: {
    fields?: any[];
    submitButton?: any;
    elementId?: string;
    action?: string;
    destination?: string;
    styles?: any;
  };
  styles?: any;
  [key: string]: any;
};

const FormBlock: React.FC<FormBlockProps> = (props) => {
  const { elementId, form, styles = {} } = props;
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const formId = form?.elementId || elementId || 'contact';
  const fields = form?.fields || [];
  const submitButton = form?.submitButton;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      
      // Ensure form-name is included for Netlify
      formData.append('form-name', formId);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        setSubmitted(true);
        setShowModal(true);
        form.reset();
      } else {
        console.error('Form submission failed');
        alert('There was an error submitting the form. Please try again.');
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

  if (!form) {
    return null;
  }

  return (
    <div
      id={elementId}
      className={classNames('sb-component', 'sb-component-block', 'sb-component-form-block', styles?.self?.padding)}
      data-sb-field-path={props['data-sb-field-path']}
    >
      <form
        id={formId}
        name={formId}
        className={classNames(
          'max-w-screen-md',
          mapStyles({ justifyContent: form?.styles?.justifyContent || 'flex-start' }),
          form?.styles?.width ? mapStyles({ width: form?.styles?.width }) : null
        )}
        onSubmit={handleSubmit}
        data-sb-field-path=".form"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* Hidden fields for Netlify */}
        <input type="hidden" name="form-name" value={formId} />
        <input type="hidden" name="bot-field" style={{ display: 'none' }} />
        
        {fields.map((field: any, index: number) => {
          const FieldComponent = getComponent(field.type);
          if (!FieldComponent) {
            return null;
          }
          return (
            <div
              key={index}
              className={classNames(
                {
                  'mb-4': index < fields.length - 1,
                  'mb-6': index === fields.length - 1
                }
              )}
              data-sb-field-path={`${props['data-sb-field-path']}.form.fields.${index}`}
            >
              <FieldComponent {...field} />
            </div>
          );
        })}
        {submitButton && (() => {
          const SubmitComponent = getComponent(submitButton.type);
          if (!SubmitComponent) {
            return null;
          }
          return (
            <div data-sb-field-path={`${props['data-sb-field-path']}.form.submitButton`}>
              <SubmitComponent {...submitButton} disabled={isSubmitting} />
            </div>
          );
        })()}
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
