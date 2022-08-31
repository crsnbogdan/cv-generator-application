import React from "react";
import "./Nav.css";

const Nav = (props) => {
  return (
    <nav className="nav z-40 flex justify-between items-center px-20 bg-white">
      {props.mode === "editing" ? (
        <div className="nav__text">
          <h1 className="font-bold text-3xl text-blue-400">CV Generator</h1>
          <p className="my-1 text-lg text-gray-400">Currently editing</p>
        </div>
      ) : (
        <div className="nav__text">
          <h1 className="font-bold text-3xl text-gray-400">CV Generator</h1>
          <p className="my-1 text-lg text-blue-400">Currently previewing</p>
        </div>
      )}
      {props.mode === "previewing" ? (
        <a href="#footer___downloadbtn" className="text-blue-400">
          Go to print
        </a>
      ) : null}
      <div className="nav__modetoggle">
        <input type="checkbox" id="switch" onChange={props.switchMode} />
        <label htmlFor="switch" className="nav__modetoggle--switchlabel">
          Toggle
        </label>
      </div>
    </nav>
  );
};

export default Nav;
