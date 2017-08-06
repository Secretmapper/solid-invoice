import React from 'react'
import ReactDOM from 'react-dom'

import Invoice from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Invoice />, div)
})
