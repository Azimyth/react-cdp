import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import fallback from '../../assets/default-fallback-image.png';

const MoviePoster = ({ poster, alt}) => {
    const addDefaultSrc = useCallback((e) => {
        e.target.src = fallback;
    },[]);

    return <img className="movie-poster" src={poster || fallback} alt={alt} onError={addDefaultSrc}/>
}

MoviePoster.propTypes = {
    poster: PropTypes.string,
    alt: PropTypes.string.isRequired,
};

export default MoviePoster;