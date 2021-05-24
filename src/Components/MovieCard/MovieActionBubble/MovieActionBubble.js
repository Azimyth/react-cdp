import React from 'react';
import PropTypes from 'prop-types';
import { useToggle } from '../../../hooks/useToggle';
import MovieActionDrop from '../MovieActionDrop/MovieActionDrop';
import Icon from '../../Icon/Icon';
import './MovieActionBubble.scss';

const MovieActionBubble = ({ movieId }) => {
    const [isOpenDrop, setOpenDrop] = useToggle(false);

    return (
        <>
            <button className="movie-action-bubble" onClick={setOpenDrop}>
                <Icon size={20} iconName="options" />
            </button>
            {isOpenDrop && 
                <MovieActionDrop
                    dropHandler={setOpenDrop}
                    movieId={movieId}
                />
            }
        </>
    )
}

MovieActionBubble.propTypes = {
    movieId: PropTypes.number,
};

export default MovieActionBubble;