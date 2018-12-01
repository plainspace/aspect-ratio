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
    this.setState({ wRatio, hRatio })
  }
  render() {
    return (
      <div>
        <Debug {...this.state} />
        <span>Width</span>
        <input
          type="text"
          value={this.state.width}
          onChange={e => this.onWidthChange(e.target.value)}
        />
        <span>Height</span>
        <input
          type="text"
          value={this.state.height}
          onChange={e => this.onHeightChange(e.target.value)}
        />
      </div>
    )
  }
}

export default Calculator
