import { GET_INITIAL_DATA_SUCCESS } from '../actions/actions';
import { requestFailure } from './requestFailure';
import { ApiServise } from '../../api';

const getInitialDataSuccess = data => ({
    type: GET_INITIAL_DATA_SUCCESS,
    payload: {
        ...data
    }
});

export const getInitialData = params => {
    return dispatch => {
        ApiServise.get(params)
        .then(res => {
            dispatch(getInitialDataSuccess(res.data));
        })
        .catch(err => {
            dispatch(requestFailure(err.message));
        });
    };
};