import React, { Component } from 'react'
import styled from 'styled-components'

import Heading from './InvoiceHeading'
import SubHeading from './InvoiceSubHeading'
import AlignRight from 'AlignRight'
import Input from 'InvoiceInput'
import UploadableImage from 'UploadableImage'

import InvoiceLayout from 'InvoiceLayout'
import InvoiceBreakdown from 'InvoiceBreakdown'
import InlineInput from 'InvoiceInlineInput'

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
          </div>
        }
        headerRight={
          <AlignRight>
            <UploadableImage />
          </AlignRight>
        }
        business={
          <div>
            <Input textarea placeholder='Your Business' />
            <Label placeholder='Bill To' value='Bill To' left />
            <Input textarea placeholder='Who the invoice is for' />
          </div>
        }
        terms={
          <AlignRight>
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
        main={
          <InvoiceBreakdown />
        }
        summary={
          <AlignRight>
            <InlineInput
              label={<Label placeholder='Sub Total' value='Sub Total' />}
              input={<Input placeholder='' value='₱ 75,087' disabled='disabled' />}
            />
            <InlineInput
              label={<Label placeholder='Discounts' value='Discounts' />}
              input={<Input placeholder='0%' value='' />}
            />
            <InlineInput
              label={<Label placeholder='Tax' value='Tax' />}
              input={<Input placeholder='0%' value='' />}
            />
            <InlineInput
              bold
              label={<Label placeholder='Total' value='Total' />}
              input={<Input placeholder='' value='₱ 75,087' disabled='disabled' />}
            />
          </AlignRight>
        }
        addendum={
          <Input textarea placeholder='Notes/Addendum' />
        }
      />
    )
  }
}

export default Invoice
