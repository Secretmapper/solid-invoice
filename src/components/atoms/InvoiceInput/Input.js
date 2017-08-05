import styled from 'styled-components'

export default styled.input`
  background: none;
  border: 0;
  color: black;
  cursor: pointer;
  outline: none;
  width: 100%;
  will-change: transform;

  &::placeholder {
    color: #afcbda;
  }

  transform: translate3d(${props => props.filled ? '0' : '0.5rem'}, 0, 0);
  transition: transform3d 0.2s;
`
