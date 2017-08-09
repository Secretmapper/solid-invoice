import React, { Component } from 'react'
import Prefix from './Prefix'
import Suffix from './Suffix'
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

  onClickSuffix = e => {
    e.stopPropagation()
  }

  render () {
    const { onBlur, onClickWrapper, setInput, onChange, onFocus, onClickSuffix } = this
    const { active } = this.state
    const { className, placeholder, disabled, required } = this.props
    const { auto, prefix, suffix, simple, textarea } = this.props
    const { submit, submitAnimating } = this.props
    const value = this.props.value ? this.props.value : this.state.value

    const filled = !active && value && value.length > 0

    const inputProps = {
      disabled,
      filled,
      placeholder,
      value: disabled && prefix ? `${prefix} ${value}` : value,
      onChange,
      onBlur,
      onFocus,
      simple,
      prefix
    }

    const filling = (filled || active)
    const error = required && submit && !filling
    const palette = !error ? 'primary' : 'danger'

    return (
      <Wrapper
        data-input-wrapper
        active={active}
        simple={simple}
        auto={auto}
        className={className}
        disabled={disabled}
        filled={filled}
        onClick={onClickWrapper}
        palette={palette}
        error={error}
        errorAnimating={error && submitAnimating}
      >
        {!disabled && prefix && <Prefix>{prefix}</Prefix>}
        {textarea
          ? <Textarea palette={palette} data-input {...inputProps} inputRef={setInput} />
          : <Input palette={palette} data-input {...inputProps} innerRef={setInput} />
        }
        {!disabled && suffix && <Suffix onClick={onClickSuffix}>{suffix}</Suffix>}
      </Wrapper>
    )
  }
}
