import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieActionDrop from '../MovieActionDrop/MovieActionDrop';
import { useToggle } from '../../Hooks/useToggle';
import Icon from '../../Icon/Icon';
import './MovieActionBubble.scss';

const MovieActionBubble = props => {
    const {toggleHandler, movieId} = props;
    const [openDrop, setOpenDrop] = useToggle(false);

    return (
        <>
            <button className="movie-action-bubble" onClick={setOpenDrop}>
                <Icon size={20} iconName="options" />
            </button>
            {openDrop && 
                <MovieActionDrop 
                    dropHandler={setOpenDrop}
                    modalHandler={toggleHandler}
                    movieId={movieId}
                />
            }
        </>
    )
}

MovieActionBubble.propTypes = {
    movieId: PropTypes.number,
    toggleHandler: PropTypes.func
};

export default MovieActionBubble;