import { EDIT_MOVIE_SUCCESS } from '../actions/actions';
import { requestFailure } from './requestFailure';
import { ApiServise } from '../../api';
import { hideModal } from './toggleModal';

const editMovieSuccess = (data) => ({
    type: EDIT_MOVIE_SUCCESS,
    payload: { ...data }
});

export const editMovie = (movie) => {
    return dispatch => {
        ApiServise.put(movie)
        .then(res => {
            dispatch(editMovieSuccess(res.data));
            dispatch(hideModal());
        })
        .catch(err => {
            dispatch(requestFailure(err.message));
        });
    };
};