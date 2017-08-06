import initialState from './__fixtures__/initialState'
import reducer, { Actions } from './index'

describe('activeInvoice reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should have and handle ACTIVE_INVOICE_CHANGE_FIELD', () => {
    expect(
      reducer(initialState, Actions.activeInvoiceChangeField('number', 2))
    ).toEqual({
      ...initialState,
      fields: {
        ...initialState.fields,
        number: 2
      }
    })
  })

  it('should have and handle ACTIVE_INVOICE_CHANGE_FIELD', () => {
    expect(
      reducer(initialState, Actions.activeInvoiceChangeField('number', 2))
    ).toEqual({
      ...initialState,
      fields: {
        ...initialState.fields,
        number: 2
      }
    })
  })

  it('should have and handle all field keys in ACTIVE_INVOICE_CHANGE_FIELD', () => {
    Object.keys(initialState.fields).map(k => {
      expect(
        reducer(initialState, Actions.activeInvoiceChangeField(k, 'UNIQUE'))
      ).toEqual({
        ...initialState,
        fields: {
          ...initialState.fields,
          [k]: 'UNIQUE'
        }
      })
    })
  })
})
