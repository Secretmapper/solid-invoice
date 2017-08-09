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
    case 'ACTIVE_INVOICE_DOWNLOAD':
      return {
        ...state,
        meta: {
          ...state.meta,
          triedToSubmit: true,
          submitAnimating: true
        }
      }
    case 'ACTIVE_INVOICE_SET_CURRENCY':
      const { currency } = action.payload
      return {
        ...state,
        currency
      }
    case 'ACTIVE_INVOICE_DOWNLOAD_ANIMATE_END':
      return {
        ...state,
        meta: {
          ...state.meta,
          triedToSubmit: true,
          submitAnimating: false
        }
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
  }),
  activeInvoiceSetCurrency: currency => ({
    type: 'ACTIVE_INVOICE_SET_CURRENCY',
    payload: { currency }
  }),
  activeInvoiceDownload: _ => dispatch => {
    dispatch({ type: 'ACTIVE_INVOICE_DOWNLOAD' })
    setTimeout(
      _ => dispatch({ type: 'ACTIVE_INVOICE_DOWNLOAD_ANIMATE_END' }),
      300
    )
  }
}

export const connectActiveInvoice = (selector) => connect(
  selector || (({ activeInvoice }) => ({ activeInvoice: withTotal(activeInvoice) })),
  Actions
)
