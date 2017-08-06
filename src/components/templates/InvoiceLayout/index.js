import React from 'react'
import Paper from 'Paper'
import Header from './Header'
import Addendum from './Addendum'

export default ({ headerLeft, headerRight, main, summary, addendum }) => (
  <Paper style={{ minHeight: 1035 }}>
    <Header>
      <Header.Left width={[1, 1 / 2, 1 / 2, 1 / 2]}>
        {headerLeft}
      </Header.Left>
      <Header.Right width={[1, 1 / 2, 1 / 2, 1 / 2]}>
        {headerRight}
      </Header.Right>
    </Header>
    {main}
    {summary}
    <Addendum>
      {addendum}
    </Addendum>
  </Paper>
)
