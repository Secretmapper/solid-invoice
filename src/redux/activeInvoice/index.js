import { connect } from 'react-redux'
import initialState from './__fixtures__/initialState'

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ACTIVE_INVOICE_CHANGE_FIELD':
      if (action.payload.label in initialState.fields) {
        const { label, value } = action.payload

        return {
          ...state,
          fields: {
            ...state.fields,
            [label]: value
          }
        }
      }
      break
    default:
      return state
  }

  return state
}

export const Actions = {
  activeInvoiceChangeField: (label, value) => ({
    type: 'ACTIVE_INVOICE_CHANGE_FIELD',
    payload: { label, value }
  })
}

export const connectActiveInvoice = (selector) => connect(
  selector || (({ activeInvoice }) => ({ activeInvoice })),
  Actions
)
