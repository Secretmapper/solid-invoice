import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './index'

storiesOf('atoms.InvoiceInput', module)
  .add('uncontrolled with placeholder', () => (
    <Input placeholder='Placeholder' />
  ))
  .add('disabled with value', () => (
    <Input value='Value' disabled='disabled' />
  ))
  .add('textarea', () => (
    <Input textarea />
  ))
