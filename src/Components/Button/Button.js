import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.scss';

const Button = props => {
    const classList = `${props.btnType} button`;
    const { handler } = props;

    return (
        <button 
            className={classList}
            onClick={handler}>
            {props.label}
        </button>
    )
}

Button.defaultProps = {
    btnType: 'default'
};

Button.propTypes = {
    btnType: PropTypes.string,
    label: PropTypes.string,
    handler: PropTypes.func
};

export default Button;