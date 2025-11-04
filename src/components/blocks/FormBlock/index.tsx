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
    setIsSubmitting(true);
    // Show modal after a brief delay to simulate submission feedback
    setTimeout(() => {
      setSubmitted(true);
      setShowModal(true);
      setIsSubmitting(false);
    }, 500);
    // Let the native form submission continue to Netlify
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (!form) {
    return null;
  }

  return (
    <div
      className={classNames('sb-component', 'sb-component-block', 'sb-component-form-block', mapStyles(styles))}
      data-sb-field-path={props['data-sb-field-path']}
    >
      <form
        id={formId}
        name="contact"
        method="POST"
        action="/contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className={classNames('sb-form', mapStyles(form?.styles))}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div style={{ display: 'none' }}>
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </div>
        {fields.map((field: any, index: number) => {
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
