import { editMovie } from "./editMovie";
import { EDIT_MOVIE_SUCCESS, HIDE_MODAL } from "../actions/actions";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { ApiServise } from "../../api";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("EDIT_MOVIE", () => {
    describe("async actions", () => {
        afterEach(() => {
            jest.clearAllMocks();
        });

        it("creates EDIT_MOVIE when fetching edit movie has been done", () => {
            const editMovieMock = jest.fn();

            jest.spyOn(ApiServise, "put").mockImplementation(editMovieMock);

            editMovieMock.mockResolvedValue({id: 1, title: 'title'});

            const expectedActions = [
                {
                    type: EDIT_MOVIE_SUCCESS,
                    payload: {
                        id: 1,
                        title: 'title'
                    }
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

            return store.dispatch(editMovie({id: 1, title: 'title', name: 'name'})).then(() => {
                expect(editMovieMock.mock.calls.length).toBe(1);
                expect(store.getActions()).toEqual(expectedActions);
            })
        });
    });
});