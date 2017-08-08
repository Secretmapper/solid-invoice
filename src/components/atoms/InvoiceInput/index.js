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
    const { auto, className, placeholder, disabled, error, textarea } = this.props
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

    const filling = (filled || active)
    const palette = !error || filling ? 'primary' : 'danger'

    return (
      <Wrapper
        data-input-wrapper
        active={active}
        auto={auto}
        className={className}
        disabled={disabled}
        filled={filled}
        onClick={onClickWrapper}
        palette={palette}
        error
      >
        {textarea
          ? <Textarea palette={palette} data-input {...inputProps} inputRef={setInput} />
          : <Input palette={palette} data-input {...inputProps} innerRef={setInput} />
        }
      </Wrapper>
    )
  }
}
