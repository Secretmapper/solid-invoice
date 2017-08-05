import React, { Component } from 'react'
import Wrapper from './Wrapper'
import Input from './Input'

export default class extends Component {
  state = {
    value: '',
    active: false
  }

  setInput = ref => { this.input = ref }
  onClickWrapper = _ => {
    if (this.input) {
      this.input.focus()
    }
  }

  onBlur = _ => this.setState({ active: false })
  onFocus = _ => this.setState({ active: true })

  onChange = ({ target: { value } }) => {
    const { onChange } = this.props

    onChange ? onChange(value) : this.setState({ value })
  }

  render () {
    const { onBlur, onClickWrapper, setInput, onChange, onFocus } = this
    const { active } = this.state
    const { placeholder } = this.props
    const value = this.props.value ? this.props.value : this.state.value

    const filled = !active && value && value.length > 0

    return (
      <Wrapper active={active} filled={filled} onClick={onClickWrapper}>
        <Input
          innerRef={setInput}
          filled={filled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </Wrapper>
    )
  }
}
