const categoriesUrl = `https://api.chucknorris.io/jokes/categories`;
const randomJokeUrl = `https://api.chucknorris.io/jokes/random`;

export const fetchCategories = () => fetch(categoriesUrl).then(res => res.json())
export const fetchRandomJoke = () => fetch(randomJokeUrl).then(res => res.json())
export const fetchRandomJokeByCategory = (category) => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`
    return (
        fetch(url).then(res => res.json())
    )
}
export const fetchJokesBySearch = (query) => {
    const url = `https://api.chucknorris.io/jokes/search?query=${query}`
    return (
        fetch(url).then(res => res.json())
    )
}
