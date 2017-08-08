import styled from 'styled-components'

export default styled.button`
  background-color: #7fdbff;
  border: none;
  border-radius: 2px;
  box-shadow: inset 0 2px 0 rgba(255, 255, 255, .1), inset 0 -2px 0 rgba(0, 0, 0, .1);
  color: white;
  cursor: pointer;
  outline: none;
  padding: 8px 12px;
  user-select: none;

  transition: box-shadow 0.2s;

  &:focus {
    box-shadow: inset 0 2px 5rem rgba(0, 0, 0, .1), inset 0 -2px 0 rgba(0, 0, 0, .1);
  }

  &:hover {
    box-shadow: inset 0 2px 5rem rgba(0, 0, 0, .1), inset 0 -2px 0 rgba(0, 0, 0, .1);
  }
`
