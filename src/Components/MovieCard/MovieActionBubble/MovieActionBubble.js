import React from 'react';
import PropTypes from 'prop-types';
import { useToggle } from '../../../hooks/useToggle';
import MovieActionDrop from '../MovieActionDrop/MovieActionDrop';
import { useToggle } from '../../Hooks/useToggle';
import Icon from '../../Icon/Icon';
import './MovieActionBubble.scss';

const MovieActionBubble = ({ toggleHandler, movieId }) => {
    const [isOpenDrop, setOpenDrop] = useToggle(false);

    return (
        <>
            <button className="movie-action-bubble" onClick={setOpenDrop}>
                <Icon size={20} iconName="options" />
            </button>
            {isOpenDrop && 
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