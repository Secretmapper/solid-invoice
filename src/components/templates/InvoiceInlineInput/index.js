import React from 'react'
import Wrapper from './Wrapper'
import InputWrapper from './InputWrapper'

export default ({ className, label, input }) => (
  <Wrapper className={className}>
    {label}
    <InputWrapper>
      {input}
    </InputWrapper>
  </Wrapper>
)
