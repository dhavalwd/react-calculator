import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">React Calculator</a>
        <div id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/dhavalwd/react-calculator">Github</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
