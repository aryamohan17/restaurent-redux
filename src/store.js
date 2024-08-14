import {createStore,combineReducers,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import {allRestaurentReducer} from './reducers/getAllRestaurentReducer'
const reducers = combineReducers({
    allRestaurentReducer
})
const middleware = [thunk]
const store = createStore(reducers,applyMiddleware(...middleware))

export default store
