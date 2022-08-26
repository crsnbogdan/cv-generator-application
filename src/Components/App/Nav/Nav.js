import React, { Component } from "react";
import "./Nav.css";
class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        id="nav"
        className="nav z-40 flex justify-between items-center px-20 bg-white"
      >
        {this.props.mode === "editing" ? (
          <div className="navtext">
            <h1 className="font-bold text-3xl text-blue-400">CV Generator</h1>
            <p className="my-1 text-lg text-gray-400">Currently editing</p>
          </div>
        ) : (
          <div className="navtext">
            <h1 className="font-bold text-3xl text-gray-400">CV Generator</h1>
            <p className="my-1 text-lg text-blue-400">Currently previewing</p>
          </div>
        )}

        {this.props.mode === "previewing" ? (
          <a href="#footer-downloadbtn" className="text-blue-400">
            Go to print
          </a>
        ) : null}
        <div className="modetoggle">
          <input type="checkbox" id="switch" onChange={this.props.switchMode} />
          <label htmlFor="switch" className="switchLabel">
            Toggle
          </label>
        </div>
      </div>
    );
  }
}

export default Nav;
