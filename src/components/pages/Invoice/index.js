import React, { Component } from 'react'
import AlignRight from 'AlignRight'
import InvoiceLayout from 'InvoiceLayout'
import InlineInput from 'InvoiceInlineInput'
import Input from 'InvoiceInput'
import UploadableImage from 'UploadableImage'
import Heading from './InvoiceHeading'
import SubHeading from './InvoiceSubHeading'
import styled from 'styled-components'

const Label = styled(Input)`
  width: auto;
  [data-input] {
    color: #777;
    text-align: ${props => props.left ? 'left' : 'right'};
  }
`

class Invoice extends Component {
  render () {
    return (
      <InvoiceLayout
        headerLeft={
          <div>
            <Heading>INVOICE</Heading>
            <SubHeading>
              NO. <Input placeholder='1' auto />
            </SubHeading>
            <Input textarea placeholder='Your Business' />
            <Label placeholder='Bill To' value='Bill To' left />
            <Input textarea placeholder='Who the invoice is for' />
          </div>
        }
        headerRight={
          <AlignRight>
            <UploadableImage />
            <InlineInput
              label={<Label placeholder='Date' value='Date' />}
              input={<Input placeholder='August' />}
            />
            <InlineInput
              label={<Label placeholder='Payment Terms' value='Payment Terms' />}
              input={<Input placeholder='Terms' />}
            />
            <InlineInput
              label={<Label placeholder='Due Date' value='Due Date' />}
              input={<Input placeholder='August' />}
            />
            <InlineInput
              label={<Label placeholder='Balance Due ' value='Balance Due' />}
              input={<Input placeholder='' value='₱ 75,087' disabled='disabled' />}
            />
          </AlignRight>
        }
      />
    )
  }
}

export default Invoice
