import { connectActiveInvoice, utils } from '../../../redux/activeInvoice'
import Invoice from 'Invoice'

export default connectActiveInvoice(
  ({ activeInvoice }) => (utils.withTotal(activeInvoice))
)(Invoice)
