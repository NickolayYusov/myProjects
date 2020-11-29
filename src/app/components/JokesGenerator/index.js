import JokesGenerator from './JokesGenerator.jsx'
import { connect } from 'react-redux'
import * as actions from '../../../redux/actions/actions.js'
import { getDefaultCategories, getRandomJokeState } from '../../../redux/selectors/selectors.js'

const mapStateToProps = state => ({
    categories: getDefaultCategories(state),
    randomJoke: getRandomJokeState(state),
});

const mapDispatchToProps = dispatch => ({
    putCategories: () => dispatch(actions.putDefaultCategoriesRequest()),
    searchJokes: payload => dispatch(actions.searchQueryRequest(payload)),
    putRandomJokeByCategory: payload => dispatch(actions.putRandomJokeByCategoryRequest(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(JokesGenerator);
