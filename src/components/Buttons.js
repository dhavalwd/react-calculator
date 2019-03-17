import React from 'react'

class Buttons extends React.Component {
  render() {
    return (
      <div className="Buttons_Container">{this.props.children}</div>
    )
  }
}

export default Buttons
