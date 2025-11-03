import * as React from 'react';
import classNames from 'classnames';
import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import SubmitButtonFormControl from './SubmitButtonFormControl';

export default function FormBlock(props) {
    const { fields = [], elementId, submitButton, className, styles = {}, 'data-sb-field-path': fieldPath } = props;
    const [showThankYou, setShowThankYou] = React.useState(false);
    
    if (fields.length === 0) {
        return null;
    }
    
    const isSpanish = typeof window !== 'undefined' && window.location.pathname.startsWith('/es');
    
    React.useEffect(() => {
        // Check for success parameter in URL after form submission
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('success') === 'true') {
                setShowThankYou(true);
            }
        }
    }, []);
    
    const handleCloseModal = () => {
        setShowThankYou(false);
        // Clean up URL by removing success parameter
        if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);
            url.searchParams.delete('success');
            window.history.replaceState({}, '', url.pathname);
        }
    };
    
    return (
        <>
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
                action="/contact/?success=true"
                data-netlify-honeypot="bot-field"
                data-netlify="true"
                data-sb-field-path={fieldPath}
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
                        <SubmitButtonFormControl {...submitButton} {...(fieldPath && { 'data-sb-field-path': '.submitButton' })} />
                    </div>
                )}
            </form>
            
            {/* Thank You Modal */}
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
}
