import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

const CustomCheckbox = ({ label, ...props }) => {
    const [field] = useField(props);
    return (
        <label>
            <input {...field} {...props} type="checkbox" />
            <span className="checkbox"></span>
            {label}
        </label>
    );
};

CustomCheckbox.propTypes = {
    label: PropTypes.string
};

export default CustomCheckbox;