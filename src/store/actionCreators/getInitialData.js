import { GET_INITIAL_DATA_SUCCESS } from '../actions/actions';
import { requestFailure } from './requestFailure';
import { ApiServise } from '../../api';

const getInitialDataSuccess = (data, params) => ({
    type: GET_INITIAL_DATA_SUCCESS,
    payload: { ...data, params }
});

export const getInitialData = params => {
    return dispatch => {
        ApiServise.get(params)
        .then(res => {
            dispatch(getInitialDataSuccess(res.data, params));
        })
        .catch(err => {
            dispatch(requestFailure(err.message));
        });
    };
};