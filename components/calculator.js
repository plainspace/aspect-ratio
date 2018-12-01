import React, { Component } from 'react'
import Debug from './debug'

class Calculator extends Component {
  state = {
    wRatio: 16,
    hRatio: 9,
    width: '',
    height: '',
    selectedRatio: 169
  }

  onHeightChange = val => {
    const { wRatio, hRatio } = this.state

    let newHeight = val
    let newWidth = Math.round((newHeight / hRatio) * wRatio)
    if (newWidth == 0) {
      newWidth = ''
    }
    this.setState({ width: newWidth, height: newHeight })
  }

  onWidthChange = val => {
    const { wRatio, hRatio } = this.state
    let newWidth = val
    let newHeight = Math.round((newWidth / wRatio) * hRatio)
    if (newHeight == 0) {
      newHeight = ''
    }
    this.setState({ width: newWidth, height: newHeight })
  }

  onChangeRatio = val => {
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
    this.setState({ wRatio, hRatio, selectedRatio: parseInt(val) })
  }
  render() {
    return (
      <div>
        <Debug {...this.state} />
        <div className="inputs">
          <label>
            <input
              type="radio"
              value="169"
              checked={this.state.selectedRatio === 169}
              onChange={e => this.onChangeRatio(e.target.value)}
            />
            16x9
          </label>
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
