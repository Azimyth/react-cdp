import { deleteMovie } from "./deleteMovie";
import { DELETE_MOVIE_SUCCESS, HIDE_MODAL } from "../actions/actions";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { ApiServise } from "../../api";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("DELETE_MOVIE", () => {
    describe("async actions", () => {
        afterEach(() => {
            jest.clearAllMocks();
        });

        it("creates DELETE_MOVIE when fetching delete movie has been done", () => {
            const deleteMovieMock = jest.fn();

            jest.spyOn(ApiServise, "delete").mockImplementation(deleteMovieMock);

            deleteMovieMock.mockResolvedValue();

            const expectedActions = [
                {
                    type: DELETE_MOVIE_SUCCESS,
                    payload: 2
                },
                {
                    type: HIDE_MODAL,
                    payload: {
                        type: null,
                        id: null
                    }
                }
            ];
            const store = mockStore({});

            return store.dispatch(deleteMovie(2)).then(() => {
                expect(deleteMovieMock.mock.calls.length).toBe(1);
                expect(store.getActions()).toEqual(expectedActions)
            })
        });
    });
});