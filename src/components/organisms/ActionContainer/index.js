import styled from 'styled-components'
import UButton from 'Button'

export const Button = styled(UButton)`
  padding: 6px;
  padding-top: 4px;
  margin-top: 4px;
  margin-right: 4px;
  min-width: 28px;
`

export default styled.div`
  display: flex;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  position: absolute;
  right: 0;
  top: 0;
  transform: translate3d(100%, 0, 0);
`
