import React from 'react'
import ReactDOM from 'react-dom'
import initialState from '../../../redux/activeInvoice/__fixtures__/initialState'

import Invoice from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <Invoice
      {...initialState}
      activeInvoiceChangeField={_ => {}}
    />,
    div
  )
})
