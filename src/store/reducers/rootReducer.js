import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import modalReducer from './modalReducer';

export default combineReducers({
    movies: movieReducer,
    modal: modalReducer
});