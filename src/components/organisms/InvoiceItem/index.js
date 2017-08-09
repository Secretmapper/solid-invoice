import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'grid-styled'
import Wrapper from './Wrapper'
import Input from 'Input'

export default class extends Component {
  static childContextTypes = {
    fields: PropTypes.object.isRequired,
    changeValue: PropTypes.func.isRequired
  }

  getChildContext () {
    const { item, changeItem } = this.props

    return {
      fields: item,
      changeValue: (l, v) => changeItem(item.id, l, v)
    }
  }

  render () {
    const { currency } = this.props

    return (
      <Wrapper>
        <Grid width={[1, 1 / 2]} p={1}>
          <Input textarea name='description' placeholder='Invoice Item Description' />
        </Grid>
        <Grid width={[1, 2 / 6]}>
          <Grid width={[1 / 2]} p={1}>
            <Input name='quantity' placeholder='Quantity' />
          </Grid>
          <Grid width={[1 / 2]} p={1}>
            <Input prefix={currency.symbol} name='rate' placeholder='Rate' />
          </Grid>
        </Grid>
        <Grid width={[1, 1 / 6]} p={1}>
          <Input prefix={currency.symbol} name='amount' disabled='disabled' />
        </Grid>
      </Wrapper>
    )
  }
}
