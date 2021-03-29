import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const DeleteMessage = ({ title }) => (
    <>
        <p>{title}</p>
        <div className="button-wrap">
            <Button btnType="primary">
                Confirm
            </Button>
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