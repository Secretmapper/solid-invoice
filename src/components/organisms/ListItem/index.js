import React from 'react'
import Wrapper from './Wrapper'
import Right from './Right'

export default ({ name, right, tabIndex, onClick }) => (
  <Wrapper tabIndex={tabIndex} onClick={onClick}>
    <div>{name}</div>
    <Right>{right}</Right>
  </Wrapper>
)
