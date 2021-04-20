import { ADD_MOVIE_SUCCESS } from '../actions/actions';
import { requestFailure } from './requestFailure';
import { ApiServise } from '../../api';
import { showModal } from './toggleModal';

const addMovieSuccess = (data) => ({
    type: ADD_MOVIE_SUCCESS,
    payload: { ...data }
});

export const addMovie = (movie) => {
    return dispatch => {
        ApiServise.post(movie)
        .then(res => {
            dispatch(addMovieSuccess(res.data));
            dispatch(showModal('success'));
        })
        .catch(err => {
            dispatch(requestFailure(err.message));
        });
    };
};