import React from 'react'
import BigInput from './BigInput'
import RatioSwitch from './RatioSwitch'

function getFactors(ratio) {
  let factors = {
    wRatio: 16,
    hRatio: 9
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
      ratio: '169'
    }
    this.handleWidthChange = this.handleWidthChange.bind(this)
    this.handleHeightChange = this.handleHeightChange.bind(this)
    this.handleRatioChange = this.handleRatioChange.bind(this)
  }

  handleWidthChange(value) {
    this.setState({ lastChanged: 'width', value })
  }

  handleHeightChange(value) {
    this.setState({ lastChanged: 'height', value })
  }

  handleRatioChange(ratio) {
    this.setState({ ratio })
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
      <div className="container grid">
        <BigInput
          value={width}
          label="Width"
          onChange={this.handleWidthChange}
          isActive={lastChanged === 'width'}
        />
        <BigInput
          value={height}
          label="Height"
          onChange={this.handleHeightChange}
          isActive={lastChanged === 'height'}
        />
        <RatioSwitch
          onChange={this.handleRatioChange}
          currentRatio={this.state.ratio}
        />
      </div>
    )
  }
}

export default Calculator
