import React, { Component } from 'react'
import Wrapper from './Wrapper'
import { Input, Textarea } from './Input'

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
    const { auto, className, placeholder, disabled, textarea } = this.props
    const value = this.props.value ? this.props.value : this.state.value

    const filled = !active && value && value.length > 0

    const inputProps = {
      disabled,
      filled,
      placeholder,
      value,
      onChange,
      onBlur,
      onFocus
    }

    return (
      <Wrapper
        active={active}
        auto={auto}
        className={className}
        disabled={disabled}
        filled={filled}
        onClick={onClickWrapper}
      >
        {textarea
          ? <Textarea data-input {...inputProps} inputRef={setInput} />
          : <Input data-input {...inputProps} innerRef={setInput} />
        }
      </Wrapper>
    )
  }
}
