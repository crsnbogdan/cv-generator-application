import Switch from "@mui/material/Switch";
import React from "react";

const Nav = (props) => {
  return (
    <nav className="nav bg-white flex justify-between px-20 py-5 items-center sticky top-0 z-50">
      {props.isEditing ? (
        <div className="nav__textcontainer">
          <h1 className="font-bold text-3xl text-blue-400">CV Generator</h1>
          <p className="my-1 text-lg text-slate-300">Currently editing</p>
        </div>
      ) : (
        <div className="nav__textcontainer">
          <h1 className="font-bold text-3xl text-slate-300">CV Generator</h1>
          <p className="my-1 text-lg text-blue-400">Currently previewing</p>
        </div>
      )}

      <Switch onClick={props.updateEditMode} className="mr-16 color-blue-400" />
    </nav>
  );
};

export default Nav;
