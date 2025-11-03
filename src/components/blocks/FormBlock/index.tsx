import * as React from 'react';
import classNames from 'classnames';
import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import SubmitButtonFormControl from './SubmitButtonFormControl';

export default function FormBlock(props) {
    const { elementId, fields = [], submitLabel, className, styles = {}, 'data-sb-field-path': fieldPath } = props;
    const [showThankYou, setShowThankYou] = React.useState(false);
    const isSpanish = typeof window !== 'undefined' && window.location.pathname.startsWith('/es');

    React.useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('success') === 'true') {
            setShowThankYou(true);
        }
    }, []);

    const handleCloseModal = () => {
        setShowThankYou(false);
        window.history.replaceState({}, '', window.location.pathname);
    };

    const FormControl = getComponent('FormControl');
    if (!FormControl) {
        return null;
    }

    return (
        <>
            <form
                name="contact"
                id={elementId}
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
                        : undefined
                )}
                method="POST"
                data-netlify-honeypot="bot-field"
                data-netlify="true"
                data-sb-field-path={fieldPath}
            >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div className="sr-only">
                    <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                </div>
                {fields?.map((field, index) => {
                    if (field.name === 'bot-field') {
                        return null;
                    }
                    return (
                        <FormControl
                            key={index}
                            {...field}
                            className={classNames({
                                'mb-4': styles?.fields?.spacing ? styles?.fields?.spacing === 'loose' : true,
                                'mb-2': styles?.fields?.spacing ? styles?.fields?.spacing === 'tight' : false
                            })}
                            data-sb-field-path={`.fields.${index}`}
                        />
                    );
                })}
                <div
                    className={classNames('mt-4', {
                        'text-left': styles?.submitButton?.textAlign === 'left',
                        'text-center': styles?.submitButton?.textAlign === 'center',
                        'text-right': styles?.submitButton?.textAlign === 'right'
                    })}
                    data-sb-field-path=".submitButton"
                >
                    {submitLabel && (
                        <SubmitButtonFormControl {...styles?.submitButton} submitLabel={submitLabel} />
                    )}
                </div>
            </form>
            {showThankYou && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={handleCloseModal}
                >
                    <div
                        className="bg-white rounded-lg p-8 max-w-md mx-4 shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-center">
                            {isSpanish ? '¡Gracias!' : 'Thank You!'}
                        </h2>
                        <p className="text-center mb-6">
                            {isSpanish
                                ? 'Su mensaje ha sido enviado exitosamente. Nos pondremos en contacto con usted pronto.'
                                : 'Your message has been sent successfully. We will get back to you soon.'}
                        </p>
                        <button
                            onClick={handleCloseModal}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                        >
                            {isSpanish ? 'Cerrar' : 'Close'}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
