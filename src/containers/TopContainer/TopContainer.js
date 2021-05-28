import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovie } from '../../store/actionCreators/getMovie';
import Hero from '../../components/Hero/Hero';
import loadable from '@loadable/component';

const MovieDetails = loadable(() => import("../../components/MovieDetails/MovieDetails"), {
    fallback: <div>Loading...</div>,
    ssr: false
});

export const TopContainer = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(getMovie(id));
        }
    },[id])

    return (
        <>
            { id ? <MovieDetails /> : <Hero /> }
        </>
    )
}