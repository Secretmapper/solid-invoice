import { connect } from 'react-redux'
import uiid from 'uuid/v1'

const initialState = {
  description: null,
  quantity: null,
  rate: null,
  amount: 0
}

const createInitial = () => ({
  id: uiid(),
  ...initialState
})

export default function (state, action) {
  if (state == null) {
    state = createInitial()
  }

  switch (action.type) {
    case 'ACTIVE_INVOICE_ITEM_ADD':
      return {
        ...state
      }
      break
    case 'ACTIVE_INVOICE_ITEM_CHANGE_FIELD':
      if (action.payload.label in initialState) {
        const { label, value } = action.payload

        const newState = {
          ...state,
          [label]: value
        }

        const amount = (label === 'rate' || label === 'quantity')
          ? newState.rate * newState.quantity
          : newState.amount

        newState.amount = amount

        return newState
      }
    default:
      return state
  }
}
