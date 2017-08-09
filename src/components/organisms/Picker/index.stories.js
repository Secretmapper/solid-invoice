import React from 'react'
import { storiesOf } from '@storybook/react'
import Picker from './index'
import ListItem from 'ListItem'

storiesOf('organisms.Picker', module)
  .add('uncontrolled with placeholder', () => (
    <Picker title='Picker'>
      <ListItem name='Icon 1' right='1' />
      <ListItem name='Icon 2' right='2' />
      <ListItem name='Icon 3' right='3' />
    </Picker>
  ))
