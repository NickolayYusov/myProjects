import React from 'react'
import { StWrapper, StControlPanel, StSelect, StInput, StButton, StMainLogo } from './styled'
import Display from "./Display";

const JokesGenerator = ({ putCategories, searchJokes, categories, randomJoke, putRandomJokeByCategory }) => {
    const [category, setCategory] = React.useState(null)
    React.useEffect(() => {
        if (!categories) {
            putCategories()
        }
    }, [])

    const handleClick = () =>  {
        if (category) {
            putRandomJokeByCategory(category)
        } else {
            putCategories()
        }
    }

    const handleSelectChange = (value) =>  {
        setCategory(value.value)
    }

    const handleChange = (e) =>  {
        searchJokes({ query: e.currentTarget.value, chosenCategory: category})
    }
    return (
        <StWrapper>
            <StControlPanel>
                <StButton onClick={handleClick}>Get Joke</StButton>
                <StSelect
                    options={categories}
                    placeholder='Choose category'
                    onChange={handleSelectChange}
                />
                <StInput onChange={handleChange} placeholder='Search joke'/>
            </StControlPanel>
            <StMainLogo>
                <img src='https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png'/>
            </StMainLogo>
            {randomJoke && randomJoke.length
                ? randomJoke.map((item) => (
                    <Display randomJoke={item} key={item.url}/>
                ))
            : null}
        </StWrapper>
    )
}

export default JokesGenerator;
