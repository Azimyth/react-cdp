import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieActionBubble from './MovieActionBubble/MovieActionBubble';
import MoviePoster from './MoviePoster';
import MovieTitle from './MovieTitle';
import './MovieCard.scss';

const MovieCard = ({ movie }) => {
    const { poster_path: poster, title, genres, release_date: publishDate, id } = movie;
    const history = useHistory();

    const redirection = () => {
        history.push(`/film/${id}`)
    };
    
    return (
        <article className="movie-card">
            <MoviePoster poster={poster} alt={title} handler={redirection} />
            <div className="movie-card__content">
                <div className="movie-card__description">
                    <MovieTitle title={title}/>
                    <p className="movie-card__genres">{genres.join(', ')}</p>
                </div>
                <span className="movie-card__release-date">{publishDate.slice(0, 4)}</span>
            </div>
            <MovieActionBubble movieId={id} />
        </article>
    )
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string,
        title: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string),
        release_date: PropTypes.string.isRequired,
        id: PropTypes.number
    })
};

export default MovieCard;