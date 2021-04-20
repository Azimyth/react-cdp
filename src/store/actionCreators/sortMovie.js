import { SORT_MOVIE_SUCCESS } from '../actions/actions';
import { requestFailure } from './requestFailure';
import { ApiServise } from '../../api';

const sortMovieSuccess = (data, params) => ({
    type: SORT_MOVIE_SUCCESS,
    payload: { ...data, params }
});

export const sortMovies = (params) => {
    return dispatch => {
        ApiServise.get(params)
        .then(res => {
            dispatch(sortMovieSuccess(res.data, params));
        })
        .catch(err => {
            dispatch(requestFailure(err.message));
        });
    };
};