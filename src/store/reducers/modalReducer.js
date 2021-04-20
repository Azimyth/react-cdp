import {
    SHOW_MODAL,
    HIDE_MODAL
} from '../actions/actions';

const initialState = {
    modalType: {},
    openState: false
};

export default function movieReducer(state = initialState, {type, payload}) {
    switch(type) {
        case SHOW_MODAL:
            return {
                ...state,
                modalType: { ...payload },
                openState: true
            };
        case HIDE_MODAL:
            return {
                ...state,
                modalType: {},
                openState: false
            };
        default:
            return state;
    }
}