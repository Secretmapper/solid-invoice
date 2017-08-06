import React, { Component } from 'react'
import 'normalize.css'
import InvoicePage from 'InvoicePage'

import { Provider } from 'react-redux'
import store from './redux'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <InvoicePage />
      </Provider>
    )
  }
}

export default App
