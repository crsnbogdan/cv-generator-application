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

  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userLinkedin, setUserLinkedin] = useState("");
  const [userGithub, setUserGithub] = useState("");
  const [userAddress, setUserAddress] = useState("");

  //MainInfocontainer
  const [userDescription, setUserDescription] = useState("");
  const [userSkill, setUserSkill] = useState([]);
  const [userSkillsArr, setUserSkillsArr] = useState([]);

  const [jobTitle, setJobTitle] = useState("");
  const [jobCompany, setJobCompany] = useState("");
  const [jobStartMonth, setJobStartMonth] = useState("");
  const [jobStartYear, setJobStartYear] = useState("");
  const [jobIsOngoing, setJobIsOngoing] = useState(false);
  const [jobEndMonth, setJobEndMonth] = useState("");
  const [jobEndYear, setJobEndYear] = useState("");
  const [jobDescription, setjobDescription] = useState("");

  const [userJobsArr, setUserJobsArr] = useState([
    {
      title: "Sales Manager",
      company: "Google",
      startMonth: "March",
      startYear: 2017,

      isOngoing: true,
      endMonth: "",
      endYear: "",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempora quibusdam inventore praesentium officia. Impedit alias corporis ut quia velit provident odit, repellat iure expedita error, quo saepe libero laborum.",
      key: 123,
    },
  ]);

  const [userSchool, setUserSchool] = useState("");
  const [userDegree, setUserDegree] = useState("");
  const [userField, setUserField] = useState("");
  const [educationDescription, setEducationDescription] = useState("");
  const [educationStartMonth, setEducationStartMonth] = useState("");
  const [educationStartYear, setEducationStartYear] = useState("");
  const [educationEndMonth, setEducationEndMonth] = useState("");
  const [educationEndYear, setEducationEndYear] = useState("");
  const [userEducationArr, setUserEducationArr] = useState([
    {
      school: "University of Bucharest",
      degree: "Masters",
      field: "Chemistry",
      startMonth: "October",
      startYear: 2018,
      endMonth: "July",
      endYear: 2020,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maxime est ullam, rem asperiores perspiciatis?",
      key: 456,
    },
  ]);

  return (
    <div className="CVGeneratorApp relative">
      <Nav updateEditMode={updateMode} isEditing={editMode} />
      <Main
        userImg={userImg}
        setUserImg={updateUserImg}
        setUserName={setUserName}
        userName={userName}
        userPhoneNumber={userPhoneNumber}
        setUserPhoneNumber={setUserPhoneNumber}
        setUserEmail={setUserEmail}
        setUserLinkedin={setUserLinkedin}
        setUserGithub={setUserGithub}
        userAddress={userAddress}
        setUserAddress={setUserAddress}
        setUserDescription={setUserDescription}
        userSkill={userSkill}
        setUserSkill={setUserSkill}
        userSkillsArr={userSkillsArr}
        setUserSkillsArr={setUserSkillsArr}
        setJobTitle={setJobTitle}
        setJobCompany={setJobCompany}
        setJobStartMonth={setJobStartMonth}
        setJobStartYear={setJobStartYear}
        setJobEndMonth={setJobEndMonth}
        setJobEndYear={setJobEndYear}
        setJobIsOngoing={setJobIsOngoing}
        setjobDescription={setjobDescription}
        jobTitle={jobTitle}
        jobCompany={jobCompany}
        jobStartMonth={jobStartMonth}
        jobStartYear={jobStartYear}
        jobIsOngoing={jobIsOngoing}
        jobEndMonth={jobEndMonth}
        jobEndYear={jobEndYear}
        jobDescription={jobDescription}
        setUserJobsArr={setUserJobsArr}
        userJobsArr={userJobsArr}
        userSchool={userSchool}
        setUserSchool={setUserSchool}
        userDegree={userDegree}
        setUserDegree={setUserDegree}
        userField={userField}
        setUserField={setUserField}
        educationDescription={educationDescription}
        setEducationDescription={setEducationDescription}
        educationStartMonth={educationStartMonth}
        educationStartYear={educationStartYear}
        educationEndMonth={educationEndMonth}
        educationEndYear={educationEndYear}
        setEducationStartMonth={setEducationStartMonth}
        setEducationStartYear={setEducationStartYear}
        setEducationEndMonth={setEducationEndMonth}
        setEducationEndYear={setEducationEndYear}
        setUserEducationArr={setUserEducationArr}
        userEducationArr={userEducationArr}
      />

      <button
        onClick={() =>
          console.log(
            `start year: ${educationStartYear} \n end year: ${educationEndYear} \n start month: ${educationStartMonth} \n end month: ${educationEndMonth}`
          )
        }
      >
        click
      </button>
    </div>
  );
};
export default CVGeneratorApp;
