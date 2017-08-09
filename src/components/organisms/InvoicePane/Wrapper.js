import styled from 'styled-components'

export default styled.div`
  box-sizing: border-box;
  padding: 10px 20px;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;

  @media screen and (min-width: 40em) {
    flex-direction: column;
    padding: 20px;
  }
`
