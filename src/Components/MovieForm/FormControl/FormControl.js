import React from 'react';
import PropTypes from 'prop-types';
import './FormControl.scss';

const FormControl = props => {
    const { label, name, type, placeholder, value, disabled, onchange} = props;

    return (
        <label className="form-control">
            {label}
            <input
                type={type}
                defaultValue={value}
                name={name}
                placeholder={placeholder}
                onChange={onchange}
                disabled = {disabled}
            />
        </label>
    )
};

FormControl.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onchange: PropTypes.func
};

export default FormControl;