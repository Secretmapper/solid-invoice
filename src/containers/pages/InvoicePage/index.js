import { connectActiveInvoice } from '../../../redux/activeInvoice'
import Invoice from 'Invoice'

export default connectActiveInvoice(({ activeInvoice }) => (activeInvoice))(Invoice)
