import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const DeleteMessage = props => (
    <>
        <p>{props.title}</p>
        <div className="button-wrap">
            <Button label="Confirm" btnType="primary" />
        </div>
    </>
);

DeleteMessage.defaultProps = {
    title: 'Are you sure you want to delete this movie?'
};

DeleteMessage.propTypes = {
    title: PropTypes.string
};

export default DeleteMessage;