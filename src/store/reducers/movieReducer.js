import {
    GET_INITIAL_DATA_SUCCESS,
    ADD_MOVIE_SUCCESS,
    EDIT_MOVIE_SUCCESS,
    DELETE_MOVIE_SUCCESS,
    SORT_MOVIE_SUCCESS,
    FILTER_MOVIE_SUCCESS,
    REQUEST_FAILURE
} from '../actions/actions';

const initialState = {
    movies: [],
    totalAmount: 0,
    error: null,
    endpointParams: {
        sortBy: 'release_date',
        sortOrder: 'desc',
        filter: ''
    }
};

export default function movieReducer(state = initialState, {type, payload}) {
    switch(type) {
        case GET_INITIAL_DATA_SUCCESS:
            return {
                ...state,
                movies: [...state.movies, ...payload.data],
                totalAmount: payload.totalAmount,
                error: null
            }
        case ADD_MOVIE_SUCCESS:
            return {
                ...state,
                movies: [...state.movies, payload],
                error: null
            }
        case EDIT_MOVIE_SUCCESS:
            return {
                ...state,
                movies: state.movies.map(item => item.id !== payload.id ? item : payload),
                error: null
            }
        case DELETE_MOVIE_SUCCESS:
            return {
                ...state,
                movies: state.movies.filter(item => item.id !== payload),
                error: null
            }
        case FILTER_MOVIE_SUCCESS:
        case SORT_MOVIE_SUCCESS:
            return {
                ...state,
                movies: [...payload.data],
                totalAmount: payload.totalAmount,
                endpointParams: payload.params,
                error: null
            }
        case REQUEST_FAILURE:
            return {
                ...state,
                error: payload.error
            }
        default:
            return state;
    }
}