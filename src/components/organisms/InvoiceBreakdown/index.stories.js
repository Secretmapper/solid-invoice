import React from 'react'
import { action, storiesOf } from '@storybook/react'
import Breakdown from './index'

storiesOf('organisms.InvoiceBreakdown', module)
  .add('default', () => (
    <Breakdown
      items={[]}
      addItem={action('addItem')}
      changeItem={action('changeItem')}
    />
  ))
