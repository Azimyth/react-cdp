import { getMovie } from "./getMovie";
import { GET_MOVIE_SUCCESS } from "../actions/actions";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { ApiServise } from "../../api";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("GET_MOVIE", () => {
    describe("async actions", () => {
        afterEach(() => {
            jest.clearAllMocks();
        });

        it("creates GET_MOVIE when fetching get movie has been done", () => {
            const getMovietMock = jest.fn();

            jest.spyOn(ApiServise, "getMovie").mockImplementation(getMovietMock);

            getMovietMock.mockResolvedValue({id: 2, title: 'title', genres: ["Comedy", "Family"]});

            const expectedActions = [{
                type: GET_MOVIE_SUCCESS,
                payload: {id: 2, title: 'title', genres: ["Comedy", "Family"]}
            }];
            const store = mockStore({});

            return store.dispatch(getMovie(2)).then(() => {
                expect(getMovietMock.mock.calls.length).toBe(1);
                expect(store.getActions()).toEqual(expectedActions);
            })
        });
    });
});