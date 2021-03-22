import React from 'react';
import PropTypes from 'prop-types';
import './FormControl.scss';
import DropList from '../DropList/DropList';

const FormControl = props => {
    const { label, name, type, placeholder, value, optionsList, disabled } = props;
    
    const input = <input
        type={type}
        defaultValue={value}
        name={name}
        placeholder={placeholder}
        disabled = {disabled}
    />;

    return (
        <label className="form-control">
            {label}
            {type === 'select' ? <DropList options={optionsList} /> : input}
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
};

export default FormControl;