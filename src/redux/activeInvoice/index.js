import { connect } from 'react-redux'
import utils, { withTotal } from './utils'
import initialState from './__fixtures__/initialState'
import itemReducer from './item'

export { utils }

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
    case 'ACTIVE_INVOICE_ITEM_ADD':
      return {
        ...state,
        items: [...state.items, itemReducer(undefined, action)]
      }
    case 'ACTIVE_INVOICE_ITEM_CHANGE_FIELD':
      const { id } = action.payload

      return {
        ...state,
        items: state.items.map(
          (item) => (item.id === id) ? itemReducer(item, action) : item
        )
      }
    default:
      return state
  }

  return state
}

export const Actions = {
  activeInvoiceChangeField: (label, value) => ({
    type: 'ACTIVE_INVOICE_CHANGE_FIELD',
    payload: { label, value }
  }),
  activeInvoiceItemAdd: _ => ({
    type: 'ACTIVE_INVOICE_ITEM_ADD'
  }),
  activeInvoiceItemChangeField: (id, label, value) => ({
    type: 'ACTIVE_INVOICE_ITEM_CHANGE_FIELD',
    payload: { id, label, value }
  })
}

export const connectActiveInvoice = (selector) => connect(
  selector || (({ activeInvoice }) => ({ activeInvoice: withTotal(activeInvoice) })),
  Actions
)
