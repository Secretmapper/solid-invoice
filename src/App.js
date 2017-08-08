import React, { Component } from 'react'
import Main from 'MainPage'

import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from './redux'

const theme = {
  palette: {
    // background, border, color
    danger: ['#fff1f1', '#ffbbbb', '#fb7777'],
    primary: ['#f1faff', '#d1e5f0', '#9cb6c4']
  }
}

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
