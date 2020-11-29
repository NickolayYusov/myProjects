import { createSelector } from 'reselect';

export const getStore = state => state.jokes

export const getCategoriesState = createSelector(
    getStore,
    jokes => jokes.categories
);

export const getRandomJokeState = createSelector(
    getStore,
    jokes => jokes.randomJoke
);

export const getDefaultCategories = createSelector(
    getCategoriesState,
    categories => categories.length && categories.map((item) => {
        return (
            {
                value: item,
                label: item
            }
        )
    })
);