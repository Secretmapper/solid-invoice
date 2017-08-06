import styled from 'styled-components'
import { defaultProps } from 'recompose'
import { Grid } from 'grid-styled'

const Header = styled.div``

const RowGrid = defaultProps({
  width: [
    1,
    1 / 2,
    1 / 2,
    1 / 2
  ],
  px: 1
})(Grid)

Header.Left = RowGrid
Header.Right = styled(RowGrid)`
`

export default Header
