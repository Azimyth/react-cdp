import { SHOW_MODAL, HIDE_MODAL } from '../actions/actions';

export const showModal = (type, id) => ({
    type: SHOW_MODAL,
    payload: {type, id}
});

export const hideModal = () => ({
    type: HIDE_MODAL,
    payload: {}
});