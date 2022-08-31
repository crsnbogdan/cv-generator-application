import React from "react";

const Footer = (props) => {
  return (
    <footer className="flex align-center justify-center p-10">
      <div className="inline-flex flex-col">
        {props.mode === "previewing" ? (
          <button
            id="footer-downloadbtn"
            className=" bg-blue-400 text-white px-6 py-3 text-lg rounded-lg mb-6"
            onClick={props.generatePDFFunc}
          >
            Print CV
          </button>
        ) : null}
        <p className="text-lg">
          <span className="text-blue-400">© {new Date().getFullYear()}</span> -
          Crisan Bogdan
        </p>
      </div>
    </footer>
  );
};

export default Footer;