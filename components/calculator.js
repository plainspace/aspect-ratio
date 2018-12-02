import React, { Component } from 'react'
import Debug from './debug'

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wRatio: 16,
      hRatio: 9,
      width: '',
      height: '',
      selectedRatio: 169,
      lastUsedHeight: false
    }
  }

  computeWidthFromHeight(height) {
    const { wRatio, hRatio } = this.state
    let newWidth = Math.round((height / hRatio) * wRatio)
    if (newWidth == 0) {
      newWidth = ''
    }
    return newWidth
  }

  computeHeightFromWidth(width) {
    const { wRatio, hRatio } = this.state
    let newHeight = Math.round((width / wRatio) * hRatio)
    if (newHeight == 0) {
      newHeight = ''
    }
    return newHeight
  }

  onHeightChange(val) {
    console.log('onHeightChange')
    let newWidth = this.computeWidthFromHeight(val)
    this.setState({ width: newWidth, height: val })
  }

  onWidthChange(val) {
    console.log('onWidthChange')
    let newHeight = this.computeHeightFromWidth(val)
    this.setState({ width: val, height: newHeight })
  }

  onChangeRatio(val) {
    console.log('onChangeRatio')
    let wRatio, hRatio
    switch (val) {
      case '169':
        wRatio = 16
        hRatio = 9
        break
      case '43':
        wRatio = 4
        hRatio = 3
        break
      case '219':
        wRatio = 21
        hRatio = 9
        break
      case '21':
        wRatio = 2
        hRatio = 1
    }

    this.setState({
      wRatio,
      hRatio,
      selectedRatio: parseInt(val)
    })
  }
  render() {
    return (
      <div>
        <Debug {...this.state} />
        <div className="inputs">
          <div
            id="169"
            checked={this.state.selectedRatio === 169}
            onClick={e => {
              this.onChangeRatio(e.target.id)
              this.onWidthChange(this.state.width)
            }}
          >
            16x9
          </div>
          <label>
            <input
              type="radio"
              value="43"
              checked={this.state.selectedRatio === 43}
              onChange={e => this.onChangeRatio(e.target.value)}
            />
            4x3
          </label>
          <label>
            <input
              type="radio"
              value="219"
              checked={this.state.selectedRatio === 219}
              onChange={e => this.onChangeRatio(e.target.value)}
            />
            21x9
          </label>
          <label>
            <input
              type="radio"
              value="21"
              checked={this.state.selectedRatio === 21}
              onChange={e => this.onChangeRatio(e.target.value)}
            />
            2x1
          </label>
        </div>
        <span>Width</span>
        <input
          type="number"
          value={this.state.width}
          onChange={e => this.onWidthChange(e.target.value)}
        />
        <span>Height</span>
        <input
          type="number"
          value={this.state.height}
          onChange={e => this.onHeightChange(e.target.value)}
        />
      </div>
    )
  }
}

export default Calculator
