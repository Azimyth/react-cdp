import { GET_MOVIE_SUCCESS } from '../actions/actions';
import { requestFailure } from './requestFailure';
import { ApiServise } from '../../api';

const getMovieSuccess = (res) => ({
    type: GET_MOVIE_SUCCESS,
    payload: res
});

export const getMovie = (id) => {
    return dispatch => {
        return ApiServise.getMovie(id)
        .then(res => {
            dispatch(getMovieSuccess(res));
        })
        .catch(err => {
            dispatch(requestFailure(err.message));
        });
    };
};