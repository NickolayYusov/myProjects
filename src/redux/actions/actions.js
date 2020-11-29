import actionTypes from "../actionTypes/actionTypes";

export const putDefaultCategoriesRequest = () => ({ type: actionTypes.PUT_DEFAULT_CATEGORIES_REQUEST });
export const putDefaultCategories = payload => ({ type: actionTypes.PUT_DEFAULT_CATEGORIES, payload });
export const putRandomJoke = payload => ({ type: actionTypes.PUT_RANDOM_JOKE, payload });
export const putRandomJokeByCategoryRequest = payload => ({ type: actionTypes.PUT_RANDOM_JOKE_BY_CATEGORY_REQUEST, payload });
export const putRandomJokeByCategory = payload => ({ type: actionTypes.PUT_RANDOM_JOKE_BY_CATEGORY, payload });
export const searchQueryRequest = payload => ({ type: actionTypes.SEARCH_QUERY_REQUEST, payload });
export const putSearchedQuery = payload => ({ type: actionTypes.SEARCH_QUERY, payload });
