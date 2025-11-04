import * as React from 'react';
import classNames from 'classnames';

import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import SubmitButtonFormControl from './SubmitButtonFormControl';

export default function FormBlock(props) {
    const formRef = React.createRef<HTMLFormElement>();
    const { fields = [], elementId, submitButton, className, styles = {}, 'data-sb-field-path': fieldPath } = props;

    if (fields.length === 0) {
        return null;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(formRef.current);
        const value = Object.fromEntries(data.entries());
        alert(`Form data: ${JSON.stringify(value)}`);
    }

    return (
        <form
            id={elementId}
            name={elementId}
            className={classNames(
                'sb-component',
                'sb-component-block',
                'sb-component-form-block',
                className,
                mapStyles({ padding: styles.padding, borderRadius: styles.borderRadius, borderWidth: styles.borderWidth, borderStyle: styles.borderStyle, borderColor: styles.borderColor, margin: styles.margin })
            )}
            onSubmit={handleSubmit}
            ref={formRef}
            data-sb-field-path={fieldPath}
        >
            <div className={classNames('w-full', mapStyles({ justifyContent: styles.justifyContent }))}>
                <input type="hidden" name="form-name" value={elementId} />
                {fields.map((field, index) => {
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
    );
}
