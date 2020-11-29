import { all, fork, put, call, delay, takeEvery } from 'redux-saga/effects'
import actionTypes from "../redux/actionTypes/actionTypes";
import * as helpers from '../helpers/helpers.js'
import {
    putDefaultCategories,
    putRandomJoke,
    putRandomJokeByCategory,
    putSearchedQuery,
} from "../redux/actions/actions";

function* putDefaultCategoriesRequest() {
    try {
        const defaultCategory = yield call(helpers.fetchCategories);
        const randomJoke = yield call(helpers.fetchRandomJoke);
        yield put(putDefaultCategories(defaultCategory));
        yield put(putRandomJoke(randomJoke));
    } catch(e) {
        console.log(e)
    }
}
function* putJokeByCategoriesRequest(action) {
    try {
        const randomJokeByCategory = yield call(helpers.fetchRandomJokeByCategory, action.payload);
        yield put(putRandomJokeByCategory(randomJokeByCategory));
    } catch(e) {
        console.log(e)
    }
}
function* searchQueryRequest(action) {
    if (action.payload.query.length < 3) {
        return
    }
    yield delay(1000);
    try {
        const searchedJokes = yield call(helpers.fetchJokesBySearch, action.payload.query);
        yield put(putSearchedQuery(searchedJokes.result));
    } catch (e) {
        console.log(e)
    }
}

function* jokesSaga() {
    yield all([fork(watchFetchRequest)]);
}

export function* watchFetchRequest() {
    yield takeEvery(actionTypes.PUT_DEFAULT_CATEGORIES_REQUEST, putDefaultCategoriesRequest);
    yield takeEvery(actionTypes.PUT_RANDOM_JOKE_BY_CATEGORY_REQUEST, putJokeByCategoriesRequest);
    yield takeEvery(actionTypes.SEARCH_QUERY_REQUEST, searchQueryRequest);
}
export default jokesSaga;
