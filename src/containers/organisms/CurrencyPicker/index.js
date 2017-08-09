import React, { Component } from 'react'
import Fuse from 'fuse.js'
import Picker from 'Picker'
import ListItem from 'ListItem'
import List from './List'

import currencyMap from '../../../lib/currencies'

const currencies = Object.keys(currencyMap).map(k => currencyMap[k])
const options = {
  shouldSort: true,
  threshold: 0.5,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 0,
  keys: [
    'name',
    'symbol'
  ]
}

export default class extends Component {
  state = {
    fuse: new Fuse(currencies, options),
    search: ''
  }

  onSearchChange = search => {
    this.setState({ search })
  }

  onListItemClick = currency => _ => {
    const { onPick } = this.props

    onPick(currency)
  }

  getListItem = (currency, i) => {
    const { onListItemClick } = this

    return (
      <ListItem
        onClick={onListItemClick(currency)}
        key={currency.code}
        name={currency.name}
        right={currency.code}
        tabIndex={i}
      />
    )
  }

  render () {
    const { getListItem, onSearchChange } = this
    const { search, fuse } = this.state

    const items = search && search.length > 0 ? fuse.search(search) : currencies

    return (
      <Picker title='Select Currency' search={search} onSearchChange={onSearchChange}>
        <List>
          {items.map(getListItem)}
        </List>
      </Picker>
    )
  }
}
