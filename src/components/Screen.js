import React from 'react'

class Screen extends React.Component {
  render() {
    return (
      <div className="calculator-screen">
        <p>{this.props.display}</p>
      </div>
    )
  }
}

export default Screen
