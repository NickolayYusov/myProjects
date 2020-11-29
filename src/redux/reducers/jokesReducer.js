import actionTypes from "../actionTypes/actionTypes";

const initialState = {
    categories: [],
    randomJoke: null,
}

export const jokesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PUT_DEFAULT_CATEGORIES:
            return {
                ...state,
                categories: [...action.payload],
            };
        case actionTypes.PUT_RANDOM_JOKE:
            return {
                ...state,
                randomJoke: [action.payload],
            };
        case actionTypes.PUT_RANDOM_JOKE_BY_CATEGORY:
            return {
                ...state,
                randomJoke: [action.payload],
            };
        case actionTypes.SEARCH_QUERY:
            return {
                ...state,
                randomJoke: [...action.payload],
            };
        default:
            return state;
    }
}
