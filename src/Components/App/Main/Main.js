import React from "react";
import "./Main.css";
import MainInfoContainer from "./MainInfoContainer/MainInfoContainer";
import MainSidebar from "./MainSidebar/MainSidebar";

const Main = (props) => {
  return (
    <main id="main" className="main flex relative z-0">
      <MainSidebar {...props} />
      <MainInfoContainer {...props} />
    </main>
  );
};

export default Main;
