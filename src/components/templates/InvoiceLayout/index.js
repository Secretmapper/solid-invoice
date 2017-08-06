import React from 'react'
import Paper from 'Paper'
import Header from './Header'

export default ({ headerLeft, headerRight }) => (
  <Paper>
    <Header>
      <Header.Left width={[1, 1 / 2, 1 / 2, 1 / 2]}>
        {headerLeft}
      </Header.Left>
      <Header.Right width={[1, 1 / 2, 1 / 2, 1 / 2]}>
        {headerRight}
      </Header.Right>
    </Header>
  </Paper>
)
