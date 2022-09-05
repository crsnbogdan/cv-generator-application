import React from "react";
import "./Main.css";
import MainInfoContainer from "./MainInfoContainer/MainInfoContainer";
import MainSidebar from "./MainSidebar/MainSidebar";

const Main = (props) => {
  return (
    <main className="main flex relative z-0">
      <MainSidebar
        userImg={props.userImg}
        setUserImg={props.setUserImg}
        setUserName={props.setUserName}
        setUserPhoneNumber={props.setUserPhoneNumber}
        setUserEmail={props.setUserEmail}
        setUserLinkedin={props.setUserLinkedin}
        setUserGithub={props.setUserGithub}
        setUserAddress={props.setUserAddress}
      />

      <MainInfoContainer
        setUserDescription={props.setUserDescription}
        userSkill={props.userSkill}
        setUserSkill={props.setUserSkill}
        userSkillsArr={props.userSkillsArr}
        setUserSkillsArr={props.setUserSkillsArr}
      />
    </main>
  );
};

export default Main;
