import styled from 'styled-components'
import Dropzone from 'react-dropzone'

export default styled(Dropzone)`
  align-items: center;
  border: 3px solid #e9eff2;
  box-sizing: border-box;
  color: #d7e0e6;
  cursor: pointer;
  display: flex;
  font-weight: bold;
  position: relative;
  text-align: center;

  height: 110px;
  width: 110px;

  > * {
    cursor: pointer;
  }

  &:hover {
    border-color: #cdd9e0;
  }
`
