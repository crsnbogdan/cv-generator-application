import React, { Component } from "react";
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="footer flex align-center justify-center p-10">
        <div className="inline-flex flex-col">
          <p className="footer--text text-lg">
            <span className="text-purple-600">
              © {new Date().getFullYear()}
            </span>{" "}
            - Crisan Bogdan
          </p>
          <button className="footer-downloadbtn bg-purple-600 text-white px-6 py-3 text-lg rounded-lg mt-2">
            Download PDF
          </button>
        </div>
      </div>
    );
  }
}

export default Footer;
