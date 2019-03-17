import React from 'react'

class Button extends React.Component {
  render() {
    return (
      <button type="button" value={this.props.value} onClick={this.props.onClick} className="btn btn-primary Button">{this.props.text}</button>
    )
  }
}

export default Button
