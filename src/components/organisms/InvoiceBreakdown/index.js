import React from 'react'
import Wrapper from './Wrapper'
import Header from './Header'
import HeaderText from './HeaderText'
import AddItem from './AddItem'
import InvoiceItem from 'InvoiceItem'

export default () => (
  <Wrapper>
    <Header>
      <HeaderText width={[1, 1 / 2]} p={1}>
        Description
      </HeaderText>
      <HeaderText width={[1, 1 / 6]} p={1}>
        Quantity
      </HeaderText>
      <HeaderText width={[1, 1 / 6]} p={1}>
        Rate
      </HeaderText>
      <HeaderText width={[1, 1 / 6]} p={1}>
        Amount
      </HeaderText>
    </Header>
    <InvoiceItem />
    <AddItem>
      Add Item
    </AddItem>
  </Wrapper>
)
