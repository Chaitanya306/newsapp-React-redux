import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import { newsReducer } from './news/reducer.js';
import reduxThunk from 'redux-thunk'

let rootReducer = combineReducers({
    news:newsReducer
})

let store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(reduxThunk,createLogger()))
)

export default store