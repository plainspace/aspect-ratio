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
    const isActive = this.props.isActive
    const cx = `input ${isActive ? 'active' : ''}`
    return (
      <div className={cx}>
        <label className="input__label">{label}</label>
        <input
          type="number"
          className="input__field"
          value={value}
          placeholder="Value"
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default BigInput
