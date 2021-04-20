import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import DropList from './DropList/DropList';
import FormControl from './FormControl/FormControl';
import { addMovie } from '../../store/actionCreators/addMovie';
import { editMovie } from '../../store/actionCreators/editMovie';
import './MovieForm.scss';

const MovieForm = ({ movie = {}, type }) => {
    const availableGenres = ['Documentary', "Comedy", "Horror", "Crime"];
    const emptyDataObj = {
        release_date: '',
        title: '',
        tagline: '',
        vote_average: '',
        poster_path: '',
        overview: '',
        genres: [],
        runtime: ''
    };
    const movieDataObj = {
        release_date: movie.release_date,
        title: movie.title,
        tagline: movie.tagline,
        vote_average: movie.vote_average,
        poster_path: movie.poster_path,
        overview: movie.overview,
        genres: movie.genres,
        runtime: movie.runtime
    };

    const dispatch = useDispatch();
    const [movieData, setMovieData] = useState(type === 'edit' ? movieDataObj : emptyDataObj);

    const handleOnChange = e => {
        const { name, value } = e.target;
        const field = (name === 'runtime' || name === 'vote_average') ? {[name]: Number(value)} : {[name]: value}
        setMovieData({ ...movieData, ...field});
    };
    
    const changeGenres = e => {
        const { value, checked } = e.target;
        const newValues = checked ? [...movieData.genres, value] : movieData.genres.filter(item => item !== value);
        setMovieData({ ...movieData, genres: newValues });
    }

    const resetData = () => {
        setMovieData({
           ...emptyDataObj
        });
    }

    const onSubmitForm = e => {
        e.preventDefault();
    }

    const onSubmit = () => {
        if (type === 'add') {
            dispatch(addMovie(movieData));
        } else {
            dispatch(editMovie(Object.assign({}, movie, movieData)));
        }
    }

    return (
        <>
            <h2>{type} movie</h2>
            <form className="form-movie" onSubmit={onSubmitForm}>
                {type === 'edit' && <FormControl
                    label='Movie id'
                    type='text'
                    name='Movie id'
                    value={movie.id}
                    disabled
                />}

                <FormControl
                    label='Title'
                    type='text'
                    name='title'
                    placeholder='Title here'
                    onchange={handleOnChange}
                    value={movieData.title}
                />

                <FormControl
                    label='Tagline'
                    type='text'
                    name='tagline'
                    placeholder='Tagline here'
                    onchange={handleOnChange}
                    value={movieData.tagline}
                />

                <FormControl
                    label='Release Date'
                    type='date'
                    name='release_date'
                    placeholder='Select date'
                    onchange={handleOnChange}
                    value={movieData.release_date}
                />

                <FormControl
                    label='Movie Url'
                    type='text'
                    name='poster_path'
                    placeholder='Movie url here'
                    onchange={handleOnChange}
                    value={movieData.poster_path}
                />

                <DropList
                    label='Genres'
                    options={availableGenres}
                    genres={movieData.genres}
                    changeHandler={changeGenres}
                />
                
                <FormControl
                    label='Overview'
                    type='text'
                    name='overview'
                    placeholder='Overview here'
                    onchange={handleOnChange}
                    value={movieData.overview}
                />

                <FormControl
                    label='Runtime'
                    type='text'
                    name='runtime'
                    placeholder='Runtime here'
                    onchange={handleOnChange}
                    value={movieData.runtime}
                />

                <FormControl
                    label='Rating'
                    type='text'
                    name='vote_average'
                    placeholder='Rating here'
                    onchange={handleOnChange}
                    value={movieData.vote_average}
                />

                <div className="button-wrap">
                    <Button btnType="default" handler={resetData}>Reset</Button>
                    <Button btnType="primary" handler={onSubmit}>Submit</Button>
                </div>
            </form>
        </>
    )
}

export default MovieForm;