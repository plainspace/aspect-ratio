import React from 'react'

const RATIOS = ['169', '43', '219', '21']

class RatioSwitch extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(ratio) {
    this.props.onChange(ratio)
  }

  render() {
    return (
      <div>
        {RATIOS.map(r => (
          <button
            data-ratio={r}
            key={r}
            onClick={e => this.handleChange(e.target.dataset.ratio)}
          >
            {r}
          </button>
        ))}
        <style jsx>
          {`
            div {
              display: flex;
            }

            button {
              padding: 24px;
              border: 1px solid black;
            }
          `}
        </style>
      </div>
    )
  }
}

export default RatioSwitch
