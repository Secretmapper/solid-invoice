import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import activeInvoice from './activeInvoice'

const reducers = combineReducers({
  activeInvoice
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancers = composeEnhancers(applyMiddleware(thunk))

export default createStore(reducers, enhancers)
