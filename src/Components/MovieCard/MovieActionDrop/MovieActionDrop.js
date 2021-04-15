import React from 'react';
import PropTypes from 'prop-types';
import './MovieActionDrop.scss';
import Icon from '../../Icon/Icon';

const MovieActionDrop = ({ movieId, dropHandler, modalHandler }) => {
    const clickHandler = (modalType) => {
        dropHandler();
        modalHandler(modalType, movieId);
    };

    return (
        <div className="drop">
            <button onClick={dropHandler} className="drop__close icon-clear">
                <Icon size={20} iconName="close" />
            </button>
            <button onClick={() => clickHandler('edit')} className="drop__button">Edit</button>
            <button onClick={() => clickHandler('delete')} className="drop__button">Delete</button>
        </div>
    )
};

MovieActionDrop.propTypes = {
    movieId: PropTypes.number,
    toggleHandler: PropTypes.func,
    modalHandler: PropTypes.func
};

export default MovieActionDrop;