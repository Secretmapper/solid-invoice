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
  .add('(submitted/tried to submit)', () => (
    <Input submit required />
  ))
  .add('simple', () => (
    <Input simple />
  ))
  .add('(submitted/tried to submit) animating', () => (
    <Input submit submitAnimating required />
  ))
  .add('textarea', () => (
    <Input textarea />
  ))
  .add('textarea (submitted/tried to submit)', () => (
    <Input textarea submit required />
  ))
  .add('textarea (submitted/tried to submit) animating', () => (
    <Input textarea submit submitAnimating required />
  ))
