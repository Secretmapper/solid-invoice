import React from 'react'
import Button from 'Button'
import Wrapper from './Wrapper'
import Section from './Section'
import Title from './Title'

export default ({ onDownloadInvoice }) => (
  <Wrapper>
    <Title>Solid Invoice</Title>
    <p>
      Easy, free invoice generator
    </p>
    <Button onClick={onDownloadInvoice}>Download Invoice</Button>
    <Section>
      Currency: <b>USD</b>
    </Section>
  </Wrapper>
)
