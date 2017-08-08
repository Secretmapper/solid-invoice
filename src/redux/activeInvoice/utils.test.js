import initialState, { items, TYPE_PERCENTAGE } from './__fixtures__/initialState'
import { withTotal } from './utils'

describe('activeInvoice utils', () => {
  describe('withTotal', () => {
    it('adds up total of quantity and rate as item amount', () => {
      const totaled = withTotal({ ...initialState, items })

      expect(totaled.items[0].amount).toEqual(1)
      expect(totaled.items[1].amount).toEqual(25)
      expect(totaled.items[2].amount).toEqual(150)
    })
  })

  it('adds up item amounts as subTotal', () => {
    const totaled = withTotal({ ...initialState, items })

    expect(totaled.fields.subTotal).toEqual(176)
  })

  it('adds up item amounts as total', () => {
    const totaled = withTotal({ ...initialState, items })

    expect(totaled.fields.total).toEqual(176)
  })

  it('applies discount on total', () => {
    const flat = withTotal({
      ...initialState,
      fields: {
        ...initialState.fields,
        discount: 50
      },
      items
    })

    const perc = withTotal({
      ...initialState,
      fields: {
        ...initialState.fields,
        discountType: TYPE_PERCENTAGE,
        discount: 25
      },
      items
    })

    expect(flat.fields.total).toEqual(176 - 50)
    expect(perc.fields.total).toEqual(176 * 0.75)
  })

  it('applies tax on total', () => {
    const flat = withTotal({
      ...initialState,
      fields: {
        ...initialState.fields,
        tax: 50
      },
      items
    })

    const perc = withTotal({
      ...initialState,
      fields: {
        ...initialState.fields,
        taxType: TYPE_PERCENTAGE,
        tax: 25
      },
      items
    })

    expect(flat.fields.total).toEqual(176 + 50)
    expect(perc.fields.total).toEqual(176 * 1.25)
  })

  it('applies discount and tax (discount first) on total', () => {
    const flat = withTotal({
      ...initialState,
      fields: {
        ...initialState.fields,
        discount: 50,
        tax: 50
      },
      items
    })

    const perc = withTotal({
      ...initialState,
      fields: {
        ...initialState.fields,
        discountType: TYPE_PERCENTAGE,
        discount: 25,
        taxType: TYPE_PERCENTAGE,
        tax: 25
      },
      items
    })

    expect(flat.fields.total).toEqual(176 - 50 + 50)
    expect(perc.fields.total).toEqual(176 * 0.75 * 1.25)
  })

  it('adds up total even if tax and discount are non-numbers', () => {
    const und = withTotal({ ...initialState, tax: undefined, discount: undefined, items })
    const nan = withTotal({ ...initialState, tax: NaN, discount: NaN, items })

    expect(und.fields.total).toEqual(176)
    expect(nan.fields.total).toEqual(176)
  })
})
