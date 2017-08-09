import React from 'react'
import Input from 'InvoiceInput'
import Title from './Title'
import InputWrapper from './InputWrapper'

export default ({ title, children, search, onSearchChange }) => (
  <div>
    <Title>{title}</Title>
    <InputWrapper>
      <Input placeholder='Search' simple value={search} onChange={onSearchChange} />
    </InputWrapper>
    {children}
  </div>
)
