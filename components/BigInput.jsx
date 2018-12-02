import React from 'react'

class BigInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onChange(e.target.value)
  }

  render() {
    const value = this.props.value
    const label = this.props.label
    return (
      <fieldset>
        <legend>This is the: {label}</legend>
        <input value={value} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

export default BigInput
