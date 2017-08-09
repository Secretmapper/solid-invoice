import React from 'react'
import Button from 'Button'
import Wrapper from './Wrapper'
import Section from './Section'
import Title from './Title'

export default ({ currency, onDownloadInvoice, onOpenCurrencyPicker }) => (
  <Wrapper>
    <Title>Solid Invoice</Title>
    <p>
      Easy, free invoice generator
    </p>
    <Button onClick={onDownloadInvoice}>Download Invoice</Button>
    <Section onClick={onOpenCurrencyPicker}>
      Currency: <b>{currency.code}</b>
    </Section>
  </Wrapper>
)
