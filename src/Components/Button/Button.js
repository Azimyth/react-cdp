import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.scss';

const Button = ({ handler, children, btnType}) => {
    const classList = `${btnType} button`;

    return (
        <button className={classList} onClick={handler}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    btnType: 'default'
};

Button.propTypes = {
    handler: PropTypes.func,
    btnType: PropTypes.string
};

export default Button;