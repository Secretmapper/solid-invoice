import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './index'

storiesOf('atoms.InvoiceInput', module)
  .add('uncontrolled with placeholder', () => (
    <Input placeholder='Placeholder' />
  ))
