import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInitialData } from '../../store/actionCreators/getInitialData';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieCard from '../../components/MovieCard/MovieCard';
import './MoviesList.scss';

const MoviesList = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.movies);
    const params = useSelector(state => state.movies.endpointParams);
    const { searchQuery } = useParams();

    useEffect(() => {
        dispatch(getInitialData({
            ...params,
            search: searchQuery ?? ''
        }));
    }, [searchQuery])

    return (
        <>
            {movies.length
                ? <section className="movies-list">
                    {movies.map(movie => (
                        <MovieCard 
                            key={movie.id}
                            movie={movie}
                        />
                    ))}
                </section>
                : <div className="no-movies">
                    <h2>No movies found</h2>
                </div>
            }
        </>
    )
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string),
        release_date: PropTypes.string.isRequired,
        id: PropTypes.number
    }))
};

export default MoviesList;