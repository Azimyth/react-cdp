import { FILTER_MOVIE_SUCCESS } from '../actions/actions';
import { requestFailure } from './requestFailure';
import { ApiServise } from '../../api';

const filterMovieSuccess = (data, params) => ({
    type: FILTER_MOVIE_SUCCESS,
    payload: { ...data, params }
});

export const filterMovies = (params) => {
    return dispatch => {
        ApiServise.get(params)
        .then(res => {
            dispatch(filterMovieSuccess(res.data, params));
        })
        .catch(err => {
            dispatch(requestFailure(err.message));
        });
    };
};