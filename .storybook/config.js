import React from 'react'
import 'style-loader!css-loader!../src/index.css'

import { configure, storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

const stories = require.context('../src', true, /.*stories((\.jsx?)|\/(index\.jsx?|.*?stories\.jsx?))$/i)

function loadStories () {
  stories.keys().forEach(stories)
  // You can require as many stories as you need.
}

configure(loadStories, module)
