import React from 'react'
import Wrapper from './Wrapper'
import Side from './Side'
import Main from './Main'
import InvoicePane from 'InvoicePane'
import InvoicePage from 'InvoicePage'

export default () => (
  <Wrapper>
    <Side>
      <InvoicePane />
    </Side>
    <Main>
      <InvoicePage />
    </Main>
  </Wrapper>
)
