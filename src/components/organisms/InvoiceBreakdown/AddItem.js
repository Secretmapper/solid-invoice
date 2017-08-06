import styled from 'styled-components'

export default styled.button`
  background: #fafdff;
  border: 1px solid #d1e5f0;
  border-left: 0;
  border-right: 0;
  box-sizing: border-box;
  color: #9cb6c4;
  cursor: pointer;
  display: inline-block;
  padding: 30px;
  position: relative;
  text-align: center;
  width: 100%;

  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #f1faff;
    border-color: #d1e5f0;
    color: #465964;
  }
`
