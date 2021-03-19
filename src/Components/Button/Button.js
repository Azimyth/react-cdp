import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.scss';

const Button = props => {
    const classList = `${props.btnType} button`;
    const { handler, children } = props;

    return (
        <button 
            className={classList}
            onClick={handler}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    btnType: 'default'
};

Button.propTypes = {
    handler: PropTypes.func,
    btnType: PropTypes.string,
    childer: PropTypes.string
};

export default Button;