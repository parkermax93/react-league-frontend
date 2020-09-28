import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import myCharacters from './reducers/myRecipes'



import thunk from 'redux-thunk'

const reducer = combineReducers({
    myCharacters,
    //comments?
    //likes?
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store