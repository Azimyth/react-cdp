import React from 'react';
import PropTypes from 'prop-types';
import MoviePoster from '../MovieCard/MoviePoster';
import MovieTitle from '../MovieCard/MovieTitle';
import Container from '../../layouts/Container';
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import background from '../../assets/hero-full.jpg';
import './MovieDetails.scss'

const MovieDetais = props => {
    const {poster_path, title, release_date, vote_average, tagline, overview, runtime} = props.movie;

    return (
        <article className="movie-details">
            <BackgroundImage src={background} altText="Hero background"/>
            <Container>
                <MoviePoster poster={poster_path} alt={title}/>
                <div className="movie-details__content">
                    <MovieTitle title={title} />
                    <span className="movie-details__rate">{vote_average}</span>
                    <span className="movie-details__tagline">{tagline}</span>
                    <span className="movie-details__release-date">{release_date.slice(0, 4)}</span>
                    <span className="movie-details__runtime">{runtime} min</span>
                    <p className="movie-details__overview">{overview}</p>
                </div>
            </Container>
        </article>
    )
}

MovieDetais.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        tagline: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        runtime: PropTypes.number.isRequired,
        vote_average: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    })
};

export default MovieDetais;