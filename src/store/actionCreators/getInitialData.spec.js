import { getInitialData } from "./getInitialData";
import { GET_INITIAL_DATA_SUCCESS } from "../actions/actions";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { ApiServise } from "../../api";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("GET_MOVIES_LIST", () => {
    describe("async actions", () => {
        afterEach(() => {
            jest.clearAllMocks();
        });

        it("creates GET_MOVIES_LIST when fetching movies has been done", () => {
            const getMoviesListMock = jest.fn();

            jest.spyOn(ApiServise, "get").mockImplementation(getMoviesListMock);

            getMoviesListMock.mockResolvedValue({data: {
                data: [
                    {id: 1, title: 'title1', genres: ["Comedy", "Family"]},
                    {id: 2, title: 'title2', genres: ["Adventure", "Comedy"]},
                    {id: 3, title: 'title3', genres: ["Adventure", "Comedy"]}
                ]
            }});

            const expectedActions = [{
                type: GET_INITIAL_DATA_SUCCESS,
                payload: {
                    data: [
                        {id: 1, title: 'title1', genres: ["Comedy", "Family"]},
                        {id: 2, title: 'title2', genres: ["Adventure", "Comedy"]},
                        {id: 3, title: 'title3', genres: ["Adventure", "Comedy"]}
                    ],
                    params: {
                        sortBy: 'release_date',
                        sortOrder: 'desc',
                        searchBy: 'title',
                        filter: '',
                        search: ''
                    }
                }
            }];
            const store = mockStore({});

            return store.dispatch(getInitialData({
                sortBy: 'release_date',
                sortOrder: 'desc',
                searchBy: 'title',
                filter: '',
                search: ''
            })).then(() => {
                expect(getMoviesListMock.mock.calls.length).toBe(1);
                expect(store.getActions()).toEqual(expectedActions);
            })
        });
    });
});