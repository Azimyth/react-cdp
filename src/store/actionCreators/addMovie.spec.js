import { addMovie } from "./addMovie";
import { ADD_MOVIE_SUCCESS, SHOW_MODAL } from "../actions/actions";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { ApiServise } from "../../api";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Add movie action", () => {
    describe("async actions", () => {
        afterEach(() => {
            jest.clearAllMocks();
        });

        it("creates ADD_MOVIE when fetching add movie has been done", () => {
            const addMovieMock = jest.fn();

            jest.spyOn(ApiServise, "post").mockImplementation(addMovieMock);

            addMovieMock.mockResolvedValue({id: 1, title: 'title', name: "name"});

            const expectedActions = [
                {
                    type: ADD_MOVIE_SUCCESS,
                    payload: {
                        id: 1,
                        title: 'title',
                        name: "name"
                    }
                },
                {
                    type: SHOW_MODAL,
                    payload: {
                        type: 'success',
                        id: null
                    }
                }
            ];

            const store = mockStore({});

            return store.dispatch(addMovie({id: 1, title: 'title', name: "name"})).then(() => {
                expect(addMovieMock.mock.calls.length).toBe(1);
                expect(store.getActions()).toEqual(expectedActions)
            })
        });
    });
});