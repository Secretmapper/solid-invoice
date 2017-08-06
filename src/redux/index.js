import { combineReducers, createStore } from 'redux'
import activeInvoice from './activeInvoice'

const reducers = combineReducers({
  activeInvoice
})

const hasReduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
const isProduction = process.env.NODE_ENV === 'production'

const enhancers = (hasReduxDevTools && !isProduction)
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : undefined

export default createStore(reducers, enhancers)
