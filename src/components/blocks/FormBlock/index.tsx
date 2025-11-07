import * as React from 'react';
import classNames from 'classnames';
import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import SubmitButtonFormControl from './SubmitButtonFormControl';

export default function FormBlock(props) {
    const [showThankYou, setShowThankYou] = React.useState(false);
    const { fields = [], elementId, action, submitButton, className, styles = {}, 'data-sb-field-path': fieldPath } = props;

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);

                // Convert FormData to URLSearchParams for TypeScript compatibility
        const params = new URLSearchParams();
        formData.forEach((value, key) => {
            params.append(key, String(value));
        });
        
        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: params.toString()
            });
            
            if (response.ok) {
                setShowThankYou(true);
                form.reset();
            } else {
                alert('There was a problem submitting your form. Please try again.');
            }
        } catch (error) {
            alert('There was a problem submitting your form. Please try again.');
        }
    };

    const handleCloseThankYou = () => {
        setShowThankYou(false);
    };

    if (fields.length === 0) {
        return null;
    }

    return (
        <>
            <form
                id={elementId}
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action={action || '/contact'}
                onSubmit={handleFormSubmit}
                className={classNames(
                    'sb-component',
                    'sb-component-block',
                    'sb-component-form-block',
                    className,
                    mapStyles({ padding: styles.padding, borderRadius: styles.borderRadius, borderWidth: styles.borderWidth, borderStyle: styles.borderStyle, borderColor: styles.borderColor, margin: styles.margin })
                )}
                data-sb-field-path={fieldPath}
            >
                {/* Hidden input for Netlify form name */}
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Honeypot field for spam protection */}
                <div style={{ display: 'none' }}>
                    <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                </div>

                <div className={classNames('w-full', mapStyles({ justifyContent: styles.justifyContent }))}>
                    {fields.map((field, index) => {
                        // Skip rendering the bot-field as it's already handled above
                        if (field.name === 'bot-field') {
                            return null;
                        }
                        const modelName = field.__metadata.modelName;
                        if (!modelName) {
                            throw new Error(`form field does not have the 'modelName' property`);
                        }
                        const FormControl = getComponent(modelName);
                        if (!FormControl) {
                            throw new Error(`no component matching the form field model name: ${modelName}`);
                        }
                        return <FormControl key={index} {...field} data-sb-field-path={`${fieldPath}.fields.${index}`} />;
                    })}
                </div>

                {submitButton && (
                    <div className={classNames('mt-8', mapStyles({ justifyContent: styles.justifyContent }))}>
                        <SubmitButtonFormControl {...submitButton} data-sb-field-path={`${fieldPath}.submitButton`} />
                    </div>
                )}
            </form>

            {/* Thank You Modal */}
            {showThankYou && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '0.5rem',
                        maxWidth: '500px',
                        width: '90%',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h2 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
                            ¡Gracias! / Thank You!
                        </h2>
                        <p style={{ marginBottom: '1rem' }}>
                            Recibimos tu mensaje y te contactaremos pronto.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We received your message and will get back to you shortly!
                        </p>
                        <button
                            onClick={handleCloseThankYou}
                            style={{
                                backgroundColor: '#3b82f6',
                                color: 'white',
                                padding: '0.5rem 1rem',
                                borderRadius: '0.25rem',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                fontWeight: '500'
                            }}
                        >
                            Close / Cerrar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
