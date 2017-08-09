import React from 'react'
import Wrapper from './Wrapper'
import Header from './Header'
import HeaderText from './HeaderText'
import AddItem from './AddItem'
import ItemContainer from './ItemContainer'
import ActionContainer, { Button } from 'ActionContainer'
import InvoiceItem from 'InvoiceItem'

import TrashIcon from 'react-icons/lib/fa/trash-o'

export default ({ items, addItem, changeItem, deleteItem, currency }) => (
  <Wrapper>
    <Header>
      <HeaderText width={[1 / 2, 1 / 2, 1 / 2, 1 / 2]} p={1}>
        Description
      </HeaderText>
      <HeaderText width={[1 / 2, 1 / 2, 1 / 2, 1 / 6]} p={1}>
        Quantity
      </HeaderText>
      <HeaderText width={[1 / 2, 1 / 2, 1 / 2, 1 / 6]} p={1}>
        Rate
      </HeaderText>
      <HeaderText width={[1 / 2, 1 / 2, 1 / 2, 1 / 6]} p={1}>
        Amount
      </HeaderText>
    </Header>
    {items.map((item, index) => (
      <ItemContainer key={item.id}>
        <InvoiceItem
          item={item}
          changeItem={changeItem}
          currency={currency}
        />
        <ActionContainer>
          <Button danger onClick={e => deleteItem(item.id)}>
            <TrashIcon />
          </Button>
        </ActionContainer>
      </ItemContainer>
    ))}
    <AddItem onClick={addItem}>
      Add Item
    </AddItem>
  </Wrapper>
)
