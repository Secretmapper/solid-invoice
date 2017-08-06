import React from 'react'
import { Grid } from 'grid-styled'
import Paper from 'Paper'
import Header from './Header'
import Addendum from './Addendum'

export default ({ headerLeft, headerRight, business, terms, main, summary, addendum }) => (
  <Paper style={{ minHeight: 1035 }}>
    <Header>
      <Header.Left width={[2 / 3]}>
        {headerLeft}
      </Header.Left>
      <Header.Right width={[1 / 3]}>
        {headerRight}
      </Header.Right>
      <Grid width={[1, 1 / 2, 1 / 2, 1 / 2]} p={1}>
        {business}
      </Grid>
      <Grid width={[1, 1 / 2, 1 / 2, 1 / 2]} p={1}>
        {terms}
      </Grid>
    </Header>
    {main}
    {summary}
    <Addendum>
      {addendum}
    </Addendum>
  </Paper>
)
