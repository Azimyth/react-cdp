import * as types from "../actions/actions";
import reducer from "./movieReducer";

const MOVIELIST = [
    {
        id: 1,
        title: "title 1",
        vote_avarage: 2,
    },
    {
        id: 2,
        title: "title 2",
        vote_avarage: 4,
    },
    {
        id: 3,
        title: "title 3",
        vote_avarage: 5
    },
];

const params = {
    sortBy: 'release_date',
    sortOrder: 'desc',
    searchBy: 'title',
    filter: '',
    search: ''
}

describe("Movie reducer", () => {
    describe("INITIAL_STATE", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(
                {
                    movies: [],
                    totalAmount: 0,
                    error: null,
                    movieDetails: null,
                    endpointParams: params
                }
            )
        })
    });

    describe("GET_INITIAL_DATA_SUCCESS", () => {
        it("should set movie list into store", () => {
            expect(reducer({}, {
                type: types.GET_INITIAL_DATA_SUCCESS,
                payload: {
                    data: MOVIELIST,
                    params: params,
                    totalAmount: 3
                }
            })).toEqual(
                expect.objectContaining({
                    movies: MOVIELIST,
                    totalAmount: 3,
                    endpointParams: params,
                    error: null
            }))
        });
    });

    describe("GET_MOVIE_SUCCESS", () => {
        it("should set movie details into store", () => {
            expect(reducer({}, {
                type: types.GET_MOVIE_SUCCESS,
                payload: {data: {
                    id: 4,
                    title: "title4"
                }}
            })).toEqual(
                expect.objectContaining({
                    movieDetails: {
                        id: 4,
                        title: "title4",
                    },
                    error: null
                }))
        });
    });

    describe("ADD_MOVIE", () => {
        it("should add movie into the movies list and set into the store", () => {
            expect(reducer({movies: MOVIELIST}, {
                type: types.ADD_MOVIE_SUCCESS,
                payload: {
                    data: {
                        id: 5,
                        title: "title 5",
                    }
                }
            })).toEqual(
                expect.objectContaining({
                    movies: [
                        ...MOVIELIST,
                        {
                            id: 5,
                            title: "title 5",
                        }
                    ],
                    error: null
                }))
        });
    });

    describe("EDIT_MOVIE", () => {
        it("should edit movie and set into the store", () => {
            expect(reducer({movies: [
                {
                    id: 1,
                    title: "title 1",
                },
                {
                    id: 2,
                    title: "title 2",
                }
            ]}, {
                type: types.EDIT_MOVIE_SUCCESS,
                payload: {
                    id: 1,
                    title: "new title",
                }
            })).toEqual(
                expect.objectContaining({
                    movies: [
                        {
                            id: 1,
                            title: "new title",
                        },
                        {
                            id: 2,
                            title: "title 2",
                        },
                    ]
                }))
        });
    });

    describe("DELETE_MOVIE", () => {
        it("should delete movie from movie list and set into the store", () => {
            expect(reducer({movies: MOVIELIST}, {
                type: types.DELETE_MOVIE_SUCCESS,
                payload: 2
            })).toEqual(
                expect.objectContaining({
                    movies: MOVIELIST.filter(item => item.id !== 2)
            }))
        });
    });

    describe("SORT_MOVIES", () => {
        it("should set sorted movies into store", () => {
            expect(reducer({}, {
                type: types.SORT_MOVIE_SUCCESS,
                payload: {
                    data: MOVIELIST,
                    params: params,
                    totalAmount: 3
                }
            })).toEqual(
                expect.objectContaining({
                    movies: MOVIELIST,
                    totalAmount: 3,
                    endpointParams: params,
                    error: null
            }))
        });
    });

    describe("FILTER_MOVIES", () => {
        it("should set filtered movies into store", () => {
            expect(reducer({}, {
                type: types.SORT_MOVIE_SUCCESS,
                payload: {
                    data: MOVIELIST,
                    params: params,
                    totalAmount: 3
                }
            })).toEqual(
                expect.objectContaining({
                    movies: MOVIELIST,
                    totalAmount: 3,
                    endpointParams: params,
                    error: null
            }))
        });
    });
});