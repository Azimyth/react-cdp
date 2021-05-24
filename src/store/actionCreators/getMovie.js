import { GET_MOVIE_SUCCESS } from '../actions/actions';
import { requestFailure } from './requestFailure';
import { ApiServise } from '../../api';

const getMovieSuccess = (data) => ({
    type: GET_MOVIE_SUCCESS,
    payload: data
});

export const getMovie = (id) => {
    return dispatch => {
        ApiServise.getMovie(id)
        .then(res => {
            dispatch(getMovieSuccess(res));
        })
        .catch(err => {
            dispatch(requestFailure(err.message));
        });
    };
};