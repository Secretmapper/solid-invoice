import React from 'react'
import { storiesOf } from '@storybook/react'
import Pane from './index'

storiesOf('organisms.InvoicePane', module)
  .addDecorator((story) => <div style={{ height: '100%', width: 160 }}>{story()}</div>)
  .add('default', () => (
    <Pane />
  ))
