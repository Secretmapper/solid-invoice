import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Input from 'Input'
import Heading from './InvoiceHeading'
import SubHeading from './InvoiceSubHeading'
import AlignRight from 'AlignRight'
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

export default class extends Component {
  static childContextTypes = {
    fields: PropTypes.object.isRequired,
    changeValue: PropTypes.func.isRequired,
    submit: PropTypes.bool,
    submitAnimating: PropTypes.bool
  }

  getChildContext () {
    const { fields, meta: { triedToSubmit: submit, submitAnimating } } = this.props
    const { activeInvoiceChangeField: changeValue } = this.props

    return {
      fields,
      changeValue,
      submit,
      submitAnimating
    }
  }

  render () {
    const { items, activeInvoiceItemAdd, activeInvoiceItemChangeField } = this.props

    return (
      <InvoiceLayout
        headerLeft={
          <div>
            <Heading>INVOICE</Heading>
            <SubHeading>
              NO. <Input name='number' auto />
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
            <Input name='businessFrom' textarea placeholder='Your Business (required)' required />
            <Label name='billToLabel' left />
            <Input name='businessTo' textarea placeholder='Who the invoice is for (required)' required />
          </div>
        }
        terms={
          <AlignRight>
            <InlineInput
              label={<Label name='dateLabel' />}
              input={<Input name='date' placeholder='Month Day, Year' />}
            />
            <InlineInput
              label={<Label name='paymentTermsLabel' />}
              input={<Input name='terms' placeholder='Net 10' />}
            />
            <InlineInput
              label={<Label name='dueDateLabel' />}
              input={<Input name='dueDate' placeholder='Month Day, Year' />}
            />
            <InlineInput
              label={<Label name='balanceDueLabel' />}
              input={<Input name='total' disabled='disabled' />}
            />
          </AlignRight>
        }
        main={
          <InvoiceBreakdown
            items={items}
            addItem={activeInvoiceItemAdd}
            changeItem={activeInvoiceItemChangeField}
          />
        }
        summary={
          <AlignRight>
            <InlineInput
              label={<Label name='subTotalLabel' />}
              input={<Input name='subTotal' disabled='disabled' />}
            />
            <InlineInput
              label={<Label name='discountLabel' />}
              input={<Input name='discount' placeholder='0%' />}
            />
            <InlineInput
              label={<Label name='taxLabel' />}
              input={<Input name='tax' placeholder='0%' />}
            />
            <InlineInput
              bold
              label={<Label name='totalLabel' />}
              input={<Input name='total' disabled='disabled' />}
            />
          </AlignRight>
        }
        addendum={
          <Input name='notes' textarea placeholder='Notes/Addendum' />
        }
      />
    )
  }
}
