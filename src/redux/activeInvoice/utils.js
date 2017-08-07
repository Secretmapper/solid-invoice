import { TYPE_PERCENTAGE } from './__fixtures__/initialState'

const sumAmount = items => items.reduce((acc, { amount }) => acc + amount, 0)

const withItemTotal = (item) => ({
  ...item,
  amount: (item.quantity * item.rate) || 0
})

const applyDiscount = (subTotal, fields) => {
  const discount = Number(fields.discount) || 0

  if (fields.discountType === TYPE_PERCENTAGE) {
    return subTotal * ((100 - discount) / 100)
  } else {
    // TYPE_FLAT is default
    return subTotal - discount
  }
}

const applyTax = (subTotal, fields) => {
  const tax = Number(fields.tax) || 0

  if (fields.taxType === TYPE_PERCENTAGE) {
    return subTotal * ((100 + tax) / 100)
  } else {
    // TYPE_FLAT is default
    return subTotal + tax
  }
}

const withFieldsTotal = (fields, items) => {
  const subTotal = sumAmount(items)
  const total = applyTax(applyDiscount(subTotal, fields), fields)

  return {
    ...fields,
    subTotal,
    total
  }
}

export const withTotal = (activeInvoice) => {
  const items = activeInvoice.items.map(withItemTotal)

  return {
    ...activeInvoice,
    items,
    fields: withFieldsTotal(activeInvoice.fields, items)
  }
}

export default {
  withTotal
}
