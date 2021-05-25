import { sortMovies } from "./sortMovie";
import { SORT_MOVIE_SUCCESS } from "../actions/actions";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { ApiServise } from "../../api";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("SORT_MOVIES", () => {
    describe("async actions", () => {
        afterEach(() => {
            jest.clearAllMocks();
        });

        it("creates SORT_MOVIES when fetching sort desc movies has been done", () => {
            const sortMoviesMock = jest.fn();

            jest.spyOn(ApiServise, "get").mockImplementation(sortMoviesMock);

            sortMoviesMock.mockResolvedValue({data: {
                data: [
                    {id: 2, vote_average: 2},
                    {id: 1, vote_average: 1}
                ]
            }});

            const expectedActions = [{
                type: SORT_MOVIE_SUCCESS,
                payload: {
                    data: [
                        {id: 2, vote_average: 2},
                        {id: 1, vote_average: 1}
                    ],
                    params: {
                        sortBy: 'vote_average',
                        sortOrder: 'desc',
                    }
                }
            }];
            const store = mockStore({});

            return store.dispatch(sortMovies({
                sortBy: 'vote_average',
                sortOrder: 'desc',
            })).then(() => {
                expect(sortMoviesMock.mock.calls.length).toBe(1);
                expect(store.getActions()).toEqual(expectedActions);
            })
        });

        it("creates SORT_MOVIES when fetching sort asc movies has been done", () => {
            const sortMoviesMock = jest.fn();

            jest.spyOn(ApiServise, "get").mockImplementation(sortMoviesMock);

            sortMoviesMock.mockResolvedValue({data: {
                data: [
                    {id: 1, vote_average: 1},
                    {id: 2, vote_average: 2}
                ]
            }});

            const expectedActions = [{
                type: SORT_MOVIE_SUCCESS,
                payload: {
                    data: [
                        {id: 1, vote_average: 1},
                        {id: 2, vote_average: 2}
                    ],
                    params: {
                        sortBy: 'vote_average',
                        sortOrder: 'asc',
                    }
                }
            }];
            const store = mockStore({});

            return store.dispatch(sortMovies({
                sortBy: 'vote_average',
                sortOrder: 'asc',
            })).then(() => {
                expect(sortMoviesMock.mock.calls.length).toBe(1);
                expect(store.getActions()).toEqual(expectedActions);
            })
        });
    });
});