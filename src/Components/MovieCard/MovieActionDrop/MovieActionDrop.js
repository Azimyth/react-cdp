import React from 'react';
import PropTypes from 'prop-types';
import './MovieActionDrop.scss';
import Icon from '../../Icon/Icon';

const MovieActionDrop = props => {
    const clickHandler = (modalType) => {
        props.dropHandler();
        props.modalHandler(modalType, props.movieId);
    };

    return (
        <div className="drop">
            <button onClick={props.dropHandler} className="drop__close icon-clear">
                <Icon size={20} iconName="close" />
            </button>
            <button onClick={() => clickHandler('edit')} className="drop__button">Edit</button>
            <button onClick={() => clickHandler('delete')} className="drop__button">Delete</button>
        </div>
    )
};

MovieActionDrop.propTypes = {
    movieId: PropTypes.number,
    toggleHandler: PropTypes.func
};

export default MovieActionDrop;