import React, { Component } from "react";
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <footer className="footer flex align-center justify-center p-10">
        <div className="inline-flex flex-col">
          {this.props.mode === "previewing" ? (
            <button
              id="footer-downloadbtn"
              className=" bg-blue-400 text-white px-6 py-3 text-lg rounded-lg mb-6"
              onClick={this.props.generatePDFFunc}
            >
              Print CV
            </button>
          ) : null}
          <p className="footer--text text-lg">
            <span className="text-blue-400">© {new Date().getFullYear()}</span>{" "}
            - Crisan Bogdan
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
