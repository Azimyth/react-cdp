import { ADD_MOVIE_SUCCESS } from '../actions/actions';
import { requestFailure } from './requestFailure';
import { ApiServise } from '../../api';
import { showModal } from './toggleModal';

const addMovieSuccess = (data) => ({
    type: ADD_MOVIE_SUCCESS,
    payload: data
});

export const addMovie = (movie) => {
    return dispatch => {
        return ApiServise.post(movie)
            .then(res => {
                console.log(res.data)
                dispatch(addMovieSuccess(res));
                dispatch(showModal('success', null));
            })
            .catch(err => {
                dispatch(requestFailure(err.message));
            });
    };
};