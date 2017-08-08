import React, { Component } from 'react'
import Main from 'MainPage'

import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from './redux'
import theme from './theme'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App
