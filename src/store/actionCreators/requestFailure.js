import { REQUEST_FAILURE } from '../actions/actions';

export const requestFailure = error => ({
    type: REQUEST_FAILURE,
    payload: {
        error
    }
});