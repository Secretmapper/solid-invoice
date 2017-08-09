import React, { Component } from 'react'
import {
  TYPE_FLAT,
  TYPE_PERCENTAGE
} from '../../../redux/activeInvoice/__fixtures__/initialState'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Input from 'Input'
import DropdownInput from './DropdownInput'
import Heading from './InvoiceHeading'
import SubHeading from './InvoiceSubHeading'
import AlignRight from 'AlignRight'
import UploadableImage from 'UploadableImage'
import ListItem from 'ListItem'

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

  onUpload = file => {
    const { activeInvoiceChangeField } = this.props

    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      activeInvoiceChangeField('logo', reader.result)
    }
    reader.onerror = function (error) {
      window.alert(error)
    }
  }

  changeField = (field, value) => _ => {
    const { activeInvoiceChangeField } = this.props

    activeInvoiceChangeField(field, value)
  }

  render () {
    const { changeField, onUpload } = this
    const { currency, items } = this.props
    const { fields: { logo, taxType, discountType } } = this.props
    const {
      activeInvoiceItemAdd,
      activeInvoiceItemChangeField,
      activeInvoiceItemDelete
    } = this.props

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
            <UploadableImage image={logo} onUpload={onUpload} />
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
              input={<Input prefix={currency.symbol} name='total' disabled='disabled' />}
            />
          </AlignRight>
        }
        main={
          <InvoiceBreakdown
            items={items}
            addItem={activeInvoiceItemAdd}
            deleteItem={activeInvoiceItemDelete}
            changeItem={activeInvoiceItemChangeField}
            currency={currency}
          />
        }
        summary={
          <AlignRight>
            <InlineInput
              label={<Label name='subTotalLabel' />}
              input={<Input prefix={currency.symbol} name='subTotal' disabled='disabled' />}
            />
            <InlineInput
              label={<Label name='discountLabel' />}
              input={
                <DropdownInput
                  name='discount'
                  placeholder='0'
                  prefix={discountType === TYPE_FLAT ? currency.symbol : '%'}
                >
                  <ListItem
                    name='Flat'
                    right={'(' + currency.symbol + ')'}
                    onClick={changeField('discountType', TYPE_FLAT)}
                  />
                  <ListItem
                    name='Percentage'
                    right='(%)'
                    onClick={changeField('discountType', TYPE_PERCENTAGE)}
                  />
                </DropdownInput>
              }
            />
            <InlineInput
              label={<Label name='taxLabel' />}
              input={
                <DropdownInput
                  name='tax'
                  placeholder='0'
                  prefix={taxType === TYPE_FLAT ? currency.symbol : '%'}
                >
                  <ListItem
                    name='Flat'
                    right={'(' + currency.symbol + ')'}
                    onClick={changeField('taxType', TYPE_FLAT)}
                  />
                  <ListItem
                    name='Percentage'
                    right='(%)'
                    onClick={changeField('taxType', TYPE_PERCENTAGE)}
                  />
                </DropdownInput>
              }
            />
            <InlineInput
              bold
              label={<Label name='totalLabel' />}
              input={<Input prefix={currency.symbol} name='total' disabled='disabled' />}
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
