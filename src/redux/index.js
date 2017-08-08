import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import activeInvoice from './activeInvoice'

const reducers = combineReducers({
  activeInvoice
})

const hasReduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
const isProduction = process.env.NODE_ENV === 'production'

const devtools = (hasReduxDevTools && !isProduction)
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : undefined

const enhancers = compose(applyMiddleware(thunk), devtools)

export default createStore(reducers, enhancers)
