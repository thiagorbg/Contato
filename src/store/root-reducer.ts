import { combineReducers } from 'redux'
import userReducer from './reducers/reducer-cantatos'

const rootReducer = combineReducers({ userReducer })

export default rootReducer
