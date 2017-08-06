import React from 'react'
import { storiesOf } from '@storybook/react'
import Breakdown from './index'

storiesOf('organisms.InvoiceBreakdown', module)
  .add('default', () => (
    <Breakdown />
  ))
