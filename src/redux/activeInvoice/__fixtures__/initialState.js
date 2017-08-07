export const TYPE_PERCENTAGE = 'PERCENTAGE'
export const TYPE_FLAT = 'FLAT'

export default {
  items: [],
  fields: {
    number: 1,
    businessFrom: null,
    businessTo: null,
    date: null,
    terms: null,
    dueDate: null,
    discount: null,
    tax: null,
    discountType: TYPE_FLAT,
    taxType: TYPE_FLAT,
    notes: null,
    subTotal: 0,
    total: 0,

    // labels
    billToLabel: 'Bill To',
    dateLabel: 'Date',
    paymentTermsLabel: 'Payment Terms',
    dueDateLabel: 'Due Date',
    balanceDueLabel: 'Balance Due',
    subTotalLabel: 'Sub Total',
    discountLabel: 'Discounts',
    taxLabel: 'Tax',
    totalLabel: 'Total'
  }
}

export const items = [
  { description: '', quantity: 1, rate: 1 },
  { description: '', quantity: 5, rate: 5 },
  { description: '', quantity: 10, rate: 15 }
] 
