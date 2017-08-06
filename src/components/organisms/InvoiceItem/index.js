import React from 'react'
import { Grid } from 'grid-styled'
import Wrapper from './Wrapper'
import Input from 'InvoiceInput'

export default () => (
  <Wrapper>
    <Grid width={[1, 1 / 2]} p={1}>
      <Input textarea placeholder='Invoice Item Description' />
    </Grid>
    <Grid width={[1, 1 / 6]} p={1}>
      <Input placeholder='Quantity' />
    </Grid>
    <Grid width={[1, 1 / 6]} p={1}>
      <Input placeholder='Rate' />
    </Grid>
    <Grid width={[1, 1 / 6]} p={1}>
      <Input placeholder='Amount' />
    </Grid>
  </Wrapper>
)
