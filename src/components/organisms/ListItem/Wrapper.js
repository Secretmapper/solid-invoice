import styled from 'styled-components'

export default styled.div`
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  outline: none;
  padding: 10px;

  &:hover, &:focus {
    cursor: pointer;
    background: #eee;
  }

  &:last-child {
    border-bottom: 0;
  }
`
