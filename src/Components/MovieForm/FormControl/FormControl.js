import React from 'react';
import PropTypes from 'prop-types';
import './FormControl.scss';
import { ErrorMessage, Field } from 'formik';

const FormControl = ({ label, name, type, placeholder, disabled, children, error = {} }) => {
    return (
        <div className="form-control">
            <label>
                {label}
            </label>
            {children || <Field className={error[name] && 'has-error'} type={type} name={name} placeholder={placeholder} disabled = {disabled} />}
            <ErrorMessage name={name} component="div" className="error-message" />
        </div>
    )
};

FormControl.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string
};

export default FormControl;