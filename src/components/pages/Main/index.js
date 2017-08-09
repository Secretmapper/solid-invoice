import React from 'react'
import { compose, withHandlers, withState } from 'recompose'

import Modal from './Modal'
import Wrapper from './Wrapper'
import Side from './Side'
import Main from './Main'
import InvoicePane from 'InvoicePane'
import InvoicePage from 'Invoice'
import CurrencyPicker from 'CurrencyPicker'

export default compose(
  withState('isPickerOpen', 'setIsPickerOpen', false),
  withHandlers({
    openPicker: ({ setIsPickerOpen }) => _ => setIsPickerOpen(true),
    closePicker: ({ setIsPickerOpen }) => _ => setIsPickerOpen(false),
    onPickCurrency: props => currency => {
      const { activeInvoiceSetCurrency, setIsPickerOpen } = props
      activeInvoiceSetCurrency(currency)
      setIsPickerOpen(false)
    }
  })
)(({
  activeInvoice: { currency, ...props },
  activeInvoiceDownload,

  onPickCurrency,
  isPickerOpen,
  openPicker,
  closePicker,
  ...funcs
}) => (
  <Wrapper>
    <Modal
      isOpen={isPickerOpen}
      onRequestClose={closePicker}
      shouldCloseOnOverlayClick
      contentLabel='Currency Picker'
    >
      <CurrencyPicker onPick={onPickCurrency} />
    </Modal>
    <Side>
      <InvoicePane
        onDownloadInvoice={activeInvoiceDownload}
        onOpenCurrencyPicker={openPicker}
        currency={currency}
      />
    </Side>
    <Main>
      <InvoicePage {...props} {...funcs} />
    </Main>
  </Wrapper>
))
