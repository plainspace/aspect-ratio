import React from 'react'
import BigInput from './BigInput'

function getFactors(ratio) {
  let factors = {
    wRatio: 16,
    hRatio: 9,
  }
  switch (ratio) {
    case '169':
      factors.wRatio = 16
      factors.hRatio = 9
      break
    case '43':
      factors.wRatio = 4
      factors.hRatio = 3
      break
    case '219':
      factors.wRatio = 21
      factors.hRatio = 9
      break
    case '21':
      factors.wRatio = 2
      factors.hRatio = 1
  }
  console.log(factors)
  return factors
}

function getHeightFromWidth(width, ratio) {
  const { wRatio, hRatio } = getFactors(ratio)
  return (width / wRatio) * hRatio
}

function getWidthFromHeight(height, ratio) {
  const { wRatio, hRatio } = getFactors(ratio)
  return (height / hRatio) * wRatio
}

function tryConvert(value, ratio, conversion) {
  const input = parseInt(value)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = conversion(input, ratio)
  const rounded = Math.round(output)
  return rounded.toString()
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      lastChanged: 'width',
      ratio: '43',
    }
    this.handleWidthChange = this.handleWidthChange.bind(this)
    this.handleHeightChange = this.handleHeightChange.bind(this)
  }

  handleWidthChange(value) {
    this.setState({ lastChanged: 'width', value })
  }

  handleHeightChange(value) {
    this.setState({ lastChanged: 'height', value })
  }

  render() {
    const ratio = this.state.ratio
    const value = this.state.value
    const lastChanged = this.state.lastChanged

    const width =
      lastChanged === 'height'
        ? tryConvert(value, ratio, getWidthFromHeight)
        : value

    const height =
      lastChanged === 'width'
        ? tryConvert(value, ratio, getHeightFromWidth)
        : value

    return (
      <div>
        <BigInput
          value={width}
          label="Width"
          onChange={this.handleWidthChange}
        />
        <BigInput
          value={height}
          label="height"
          onChange={this.handleHeightChange}
        />
      </div>
    )
  }
}

export default Calculator
