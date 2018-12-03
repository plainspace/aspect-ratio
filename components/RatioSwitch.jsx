import React from 'react'

const RATIOS = [
  { id: '169', name: '16x9' },
  { id: '43', name: '4x3' },
  { id: '219', name: '21x9' },
  { id: '21', name: '2x1' }
]

class RatioSwitch extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(ratio) {
    this.props.onChange(ratio)
  }

  render() {
    const current = this.props.currentRatio
    return (
      <React.Fragment>
        {RATIOS.map(r => {
          const cx = `ratio-button ${current === r.id ? 'active' : ''}`
          return (
            <button
              className={cx}
              data-ratio={r.id}
              key={r.id}
              onClick={e => this.handleChange(e.target.dataset.ratio)}
            >
              {r.name}
            </button>
          )
        })}
      </React.Fragment>
    )
  }
}

export default RatioSwitch
