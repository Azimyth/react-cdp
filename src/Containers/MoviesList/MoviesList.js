import React from 'react';
import MovieCard from '../../Components/MovieCard/MovieCard';
import data from '../../MockData.json';
import './MoviesList.scss';

const MoviesList = () => {
    if (!data.movies) {
        throw new Error('Data is missing!!!');
    }

    return (
        <section className="movies-list">
            {data.movies.map(movie => (
                <MovieCard 
                    key={movie.id}
                    poster={movie.poster_path}
                    title={movie.title}
                    genres={movie.genres}
                    publishDate={movie.release_date}
                />
            ))}
        </section>
    )
};

export default MoviesList;