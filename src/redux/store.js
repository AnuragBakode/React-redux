import {createStore , applyMiddleware} from 'redux'
import cakeReducer from './cakes/cakeReducer'
import { combineReducers } from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'

const store = createStore(rootReducer , applyMiddleware(logger))

export default store