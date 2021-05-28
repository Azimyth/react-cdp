import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import DropList from './DropList/DropList';
import FormControl from './FormControl/FormControl';
import { addMovie } from '../../store/actionCreators/addMovie';
import { editMovie } from '../../store/actionCreators/editMovie';
import { Form, Formik } from 'formik';
import DatePicker from "react-datepicker";

import * as Yup from 'yup';
import './MovieForm.scss';
// import "react-datepicker/dist/react-datepicker.css";

const MovieForm = ({ movie = {}, type }) => {
    const availableGenres = ['Documentary', "Comedy", "Horror", "Crime", "Adventure", "Animation", "Family", "Fantasy", "Science Fiction", "Action", "Drama"];
    const dispatch = useDispatch();

    const validationRules = Yup.object().shape({
        title: Yup
            .string()
            .required("Title is required"),
        release_date: Yup
            .string()
            .required("Title is required"),
        poster_path: Yup
            .string()
            .required("Poster URL is required"),
        genres: Yup
            .array()
            .min(1, "Select at least one genre to proceed"),
        overview: Yup
            .string()
            .required("Overview is required"),
        runtime: Yup
            .number()
            .required("Runtime minimum is 0")
            .positive().integer().min(0),
        vote_average: Yup
            .number()
            .required("Rating minimum is 0")
            .positive().integer().min(0)
            .max(10, 'Rating must be less than or equal 10'),
    });

    const onSubmit = (values) => {
        const currValues = Object.assign({}, values, {
            release_date: new Date(values.release_date).toISOString().slice(0, 10)
        });

        if (type === 'add') {
            dispatch(addMovie(currValues));
        } else {
            dispatch(editMovie(Object.assign({}, movie, currValues)));
        }
    }

    return (
        <>
            <h2>{type} movie</h2>
            <Formik 
                initialValues = {{
                    release_date: movie.release_date ? new Date(movie.release_date) : new Date(),
                    title: movie.title ?? '',
                    tagline: movie.tagline ?? '',
                    vote_average: movie.vote_average ?? '',
                    poster_path: movie.poster_path ?? '',
                    overview: movie.overview ?? '',
                    genres: movie.genres ?? [],
                    runtime: movie.runtime ?? '',
                }}
                validationSchema = { validationRules }
                onSubmit = { values => onSubmit(values) }
            >
                {({
                    values,
                    errors,
                    handleReset,
                    setFieldValue,
                }) => (
                    <Form className="form-movie">
                        {type === 'edit' && <FormControl
                            label='Movie id'
                            name="id"
                        >
                            <input type='text' value={movie.id} disabled/>
                        </FormControl>}
    
                        <FormControl
                            label='Title'
                            type='text'
                            name='title'
                            placeholder='Title here'
                            error={errors}
                        />

                        <FormControl
                            label='Tagline'
                            type='text'
                            name='tagline'
                            placeholder='Tagline here'
                            error={errors}
                        />

                        <FormControl
                            label='Release Date'
                            type='date'
                            name='release_date'
                            placeholder='Select date'
                            error={errors}
                        >
                            <DatePicker 
                                dateFormat="dd/mm/yyyy"
                                name="release_date"
                                selected={values.release_date}
                                onSelect={date => setFieldValue("release_date", date)}
                                onChange={date => setFieldValue("release_date", date)}
                            />
                        </FormControl>

                        <FormControl
                            label='Movie Url'
                            type='text'
                            name='poster_path'
                            placeholder='Movie url here'
                            error={errors}
                        />

                        <FormControl
                            label='Genres'
                            type='text'
                            name='genres'
                            error={errors}
                        >
                            <DropList 
                                options={availableGenres}
                                genres={values.genres}
                                name='genres'
                                error={errors}
                            />
                        </FormControl>
                        
                        <FormControl
                            label='Overview'
                            type='text'
                            name='overview'
                            placeholder='Overview here'
                            value={values.overview}
                            error={errors}
                        />
                
                        <FormControl
                            label='Runtime'
                            type='number'
                            name='runtime'
                            placeholder='Runtime here'
                            value={values.runtime}
                            error={errors}
                        />
    
                        <FormControl
                            label='Rating'
                            type='number'
                            name='vote_average'
                            placeholder='Rating here'
                            value={values.vote_average}
                            error={errors}
                        />
    
                        <div className="button-wrap">
                            <Button btnType="default" handler={handleReset}>Reset</Button>
                            <Button btnType="primary">Submit</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default MovieForm;