import styled from 'styled-components'
import Input from './Input'

export default styled.div`
  background: ${props => props.active ? '#fafdff' : '#f1faff'};
  border-radius: 2px;
  border: 1px solid #d1e5f0;
  box-sizing: border-box;
  color: #465964;
  cursor: pointer;
  display: inline-block;
  padding: 0.325rem 0.5rem;
  padding-left: 0;
  padding-right: 1rem;
  position: relative;
  width: 100%;

  ${props => props.filled && `
    background: none;
    border: 1px solid rgba(0, 0, 0, 0);
  `}

  &:hover {
    background: #f1faff;
    border: 1px solid #d1e5f0;

    ${props => props.active && `
      background: #fafdff;
      border-color: #9cb6c4;
    `};
  }

  &:hover ${Input} {
    transform: translate3d(0.5rem, 0, 0);
  }
`
