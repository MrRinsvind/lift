import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import thunk from 'redux-thunk'
import logger from '../middlewares/logger'
import lift from '../middlewares/lift'
const enhancer = applyMiddleware(thunk,lift,logger)

const store = createStore(reducer,{},enhancer)

window.store = store

export default store