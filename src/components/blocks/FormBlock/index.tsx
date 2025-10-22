import * as React from 'react';
import classNames from 'classnames';

import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import SubmitButtonFormControl from './SubmitButtonFormControl';

export default function FormBlock(props) {
    const formRef = React.createRef<HTMLFormElement>();
    const { fields = [], elementId, submitButton, className, styles = {}, 'data-sb-field-path': fieldPath } = props;
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    if (fields.length === 0) {
        return null;
    }

    const isSpanish = typeof window !== 'undefined' && window.location.pathname.startsWith('/es');

    // Check if form was submitted successfully
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('success') === 'true' || document.referrer.includes(window.location.pathname)) {
                setIsSubmitted(true);
            }
        }
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        const form = event.currentTarget;
        const formData = new FormData(form);
                // Ensure form-name is included for Netlify
        formData.append('form-name', 'contact');

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData as any).toString()
        })
            .then(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
                if (typeof window !== 'undefined') {
                    window.history.pushState({}, '', '?success=true');
                }
            })
            .catch((error) => {
                setIsSubmitting(false);
                alert(isSpanish ? 'Error al enviar el formulario. Por favor, inténtelo de nuevo.' : 'Error submitting form. Please try again.');
                console.error(error);
            });
    };

    if (isSubmitted) {
        return (
            <div
                className={classNames(
                    'sb-component',
                    'sb-component-block',
                    'sb-component-form-block',
                    className,
                    styles?.self?.margin ? mapStyles({ margin: styles?.self?.margin }) : undefined,
                    styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : undefined,
                    'bg-primary',
                    'text-white',
                    'rounded-lg',
                    'p-8',
                    'text-center'
                )}
            >
                <svg
                    className="w-16 h-16 mx-auto mb-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <h3 className="text-2xl font-bold mb-2">
                    {isSpanish ? '¡Gracias por contactarnos!' : 'Thanks for reaching out!'}
                </h3>
                <p className="text-lg">
                    {isSpanish ? 'Le responderemos lo antes posible.' : 'We will get back to you shortly.'}
                </p>
            </div>
        );
    }

    return (
        <form
            className={classNames(
                'sb-component',
                'sb-component-block',
                'sb-component-form-block',
                className,
                styles?.self?.margin ? mapStyles({ margin: styles?.self?.margin }) : undefined,
                styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : undefined,
                styles?.self?.borderWidth && styles?.self?.borderWidth !== 0 && styles?.self?.borderStyle !== 'none'
                    ? mapStyles({
                          borderWidth: styles?.self?.borderWidth,
                          borderStyle: styles?.self?.borderStyle,
                          borderColor: styles?.self?.borderColor ?? 'border-primary'
                      })
                    : undefined,
                styles?.self?.borderRadius ? mapStyles({ borderRadius: styles?.self?.borderRadius }) : undefined
            )}
            name="contact"
            id={elementId}
            method="POST"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
            data-sb-field-path={fieldPath}
            onSubmit={handleSubmit}
        >
            <input type="hidden" name="form-name" value="contact" />
            <div style={{ display: 'none' }}>
                <label>
                    Don't fill this out if you're human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
            </div>
            <div
                className={classNames('w-full', 'flex', 'flex-wrap', 'gap-8', mapStyles({ justifyContent: styles?.self?.justifyContent ?? 'flex-start' }))}
                {...(fieldPath && { 'data-sb-field-path': '.fields' })}
            >
                {fields.map((field, index) => {
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
                    return <FormControl key={index} {...field} {...(fieldPath && { 'data-sb-field-path': `.${index}` })} />;
                })}
            </div>
            {submitButton && (
                <div className={classNames('mt-8', 'flex', mapStyles({ justifyContent: styles?.self?.justifyContent ?? 'flex-start' }))}>
                    <SubmitButtonFormControl {...submitButton} {...(fieldPath && { 'data-sb-field-path': '.submitButton' })} disabled={isSubmitting} />
                </div>
            )}
        </form>
    );
}
