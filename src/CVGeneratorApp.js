import React, { useState } from "react";
import Main from "./Components/App/Main/Main";
import Nav from "./Components/App/Nav/Nav";

const CVGeneratorApp = () => {
  //Nav
  const [editMode, setEditMode] = useState(true);
  const updateMode = () => {
    editMode === true ? setEditMode(false) : setEditMode(true);
  };
  //MainSidebar
  const [userName, setUserName] = useState("");
  const [userImg, setUserImg] = useState("");
  const updateUserImg = (e) => {
    setUserImg(URL.createObjectURL(e.target.files[0]));
  };

  const [userPhoneNumber, setUserPhoneNumber] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [userLinkedin, setUserLinkedin] = useState("");
  const [userGithub, setUserGithub] = useState("");
  const [userAddress, setUserAddress] = useState("");

  //MainInfocontainer
  const [userDescription, setUserDescription] = useState("");
  const [userSkill, setUserSkill] = useState([]);
  const [userSkillsArr, setUserSkillsArr] = useState([]);

  return (
    <div className="CVGeneratorApp relative">
      <Nav updateEditMode={updateMode} isEditing={editMode} />
      <Main
        userImg={userImg}
        setUserImg={updateUserImg}
        setUserName={setUserName}
        setUserPhoneNumber={setUserPhoneNumber}
        setUserEmail={setUserEmail}
        setUserLinkedin={setUserLinkedin}
        setUserGithub={setUserGithub}
        setUserAddress={setUserAddress}
        setUserDescription={setUserDescription}
        userSkill={userSkill}
        setUserSkill={setUserSkill}
        userSkillsArr={userSkillsArr}
        setUserSkillsArr={setUserSkillsArr}
      />

    </div>
  );
};
export default CVGeneratorApp;
