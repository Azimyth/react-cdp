import { DELETE_MOVIE_SUCCESS } from '../actions/actions';
import { requestFailure } from './requestFailure';
import { ApiServise } from '../../api';
import { hideModal } from './toggleModal';

const deleteMovieSuccess = (id) => ({
    type: DELETE_MOVIE_SUCCESS,
    payload: id
});

export const deleteMovie = (id) => {
    return dispatch => {
        return ApiServise.delete(id)
        .then(() => {
            dispatch(deleteMovieSuccess(id));
            dispatch(hideModal());
        })
        .catch(err => {
            dispatch(requestFailure(err.message));
        });
    };
};