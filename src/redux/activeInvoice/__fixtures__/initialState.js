export const TYPE_PERCENTAGE = 'PERCENTAGE'
export const TYPE_FLAT = 'FLAT'

export default {
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
    items: [],
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
