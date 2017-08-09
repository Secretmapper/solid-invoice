import React from 'react'
import Button from 'Button'
import Wrapper from './Wrapper'
import Section from './Section'
import Title from './Title'
import Subtitle from './Subtitle'
import Footer from './Footer'

export default ({ currency, onDownloadInvoice, onOpenCurrencyPicker }) => (
  <Wrapper>
    <div>
      <Title>Solid Invoice</Title>
      <Subtitle>
        Easy, free invoice generator
      </Subtitle>
    </div>
    <div>
      <Button onClick={onDownloadInvoice}>Download Invoice</Button>
      <Section onClick={onOpenCurrencyPicker}>
        Currency: <b>{currency.code}</b>
      </Section>
      <Footer>
        Made with Love by <a href='//twitter.com/Secretmapper'>@secretmapper</a>
      </Footer>
    </div>
  </Wrapper>
)
