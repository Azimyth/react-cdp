import { filterMovies } from "./filterMovie";
import { FILTER_MOVIE_SUCCESS } from "../actions/actions";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { ApiServise } from "../../api";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("FILTER_MOVIES", () => {
    describe("async actions", () => {
        afterEach(() => {
            jest.clearAllMocks();
        });

        it("creates FILTER_MOVIES when fetching filter movies has been done", () => {
            const filterMoviesMock = jest.fn();

            jest.spyOn(ApiServise, "get").mockImplementation(filterMoviesMock);

            filterMoviesMock.mockResolvedValue({data: {
                data: [
                    {id: 2, genres: ["Comedy", "Family"]},
                    {id: 1, genres: ["Adventure", "Comedy"]}
                ]
            }});

            const expectedActions = [{
                type: FILTER_MOVIE_SUCCESS,
                payload: {
                    data: [
                        {id: 2, genres: ["Comedy", "Family"]},
                        {id: 1, genres: ["Adventure", "Comedy"]}
                    ],
                    params: {
                        filter: 'Comedy'
                    }
                }
            }];
            const store = mockStore({});

            return store.dispatch(filterMovies({
                filter: 'Comedy',
            })).then(() => {
                expect(filterMoviesMock.mock.calls.length).toBe(1);
                expect(store.getActions()).toEqual(expectedActions);
            })
        });
    });
});