import React from 'react'
import Wrapper from './Wrapper'
import Side from './Side'
import Main from './Main'
import InvoicePane from 'InvoicePane'
import InvoicePage from 'Invoice'

export default ({ activeInvoice: { ...props }, activeInvoiceDownload, ...funcs }) => (
  <Wrapper>
    <Side>
      <InvoicePane onDownloadInvoice={activeInvoiceDownload} />
    </Side>
    <Main>
      <InvoicePage {...props} {...funcs} />
    </Main>
  </Wrapper>
)
