import React, { useEffect, useState } from "react";
import uniqid from "uniqid";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const MainInfoContainer = (props) => {
  const monthsArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const yearsArr = [
    2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,
    2017, 2018, 2019, 2020, 2021, 2022,
  ];

  const [jobYearsErr, setJobYearsErr] = useState(false);
  const [schoolYearsErr, setSchoolYearsErr] = useState(false);
  const checkIfYearsErr = (
    startYear,
    endYear,
    isOngoing,
    changeStateMethod,
    ignoreIsOngoing
  ) => {
    if (ignoreIsOngoing) {
      if (startYear && !endYear) {
        return changeStateMethod(true);
      }
      if (startYear && endYear && startYear > endYear) {
        return changeStateMethod(true);
      }
      return changeStateMethod(false);
    } else {
      if (startYear && !isOngoing && endYear && endYear >= startYear) {
        return changeStateMethod(false);
      }
      if (startYear && isOngoing) {
        return changeStateMethod(false);
      }
      if (startYear && !isOngoing && !endYear) {
        return changeStateMethod(true);
      }
      if (startYear && !isOngoing && endYear && startYear > endYear) {
        return changeStateMethod(true);
      }
    }
  };

  useEffect(() => {
    checkIfYearsErr(
      props.jobStartYear,
      props.jobEndYear,
      props.jobIsOngoing,
      setJobYearsErr,
      false
    );
    checkIfYearsErr(
      props.educationStartYear,
      props.educationEndYear,
      null,
      setSchoolYearsErr,
      true
    );
  }, [
    props.jobStartYear,
    props.jobEndYear,
    props.jobIsOngoing,
    props.educationStartYear,
    props.educationEndYear,
  ]);

  const createDateSelects = (
    isFor,
    setStateMethodFirst,
    setStateMethodSecond,
    isOngoing,
    startProps
  ) => {
    let label = "";
    if (isFor === "startJob" || isFor === "startSchool") label = "Start date";
    if (isFor === "endJob" || isFor === "endSchool") label = "End date";
    return (
      <div className="infocontainer__row--nooutline mt-4">
        <div className="infocontainer__flexcontainer flex">
          <div className="infocontainer__container">
            <InputLabel>
              {label.includes("Start")
                ? "Start month"
                : label.includes("End")
                ? "End month"
                : "err"}
            </InputLabel>
            <Select
              defaultValue=""
              disabled={isOngoing && !label.includes("Start") ? true : false}
              label={
                label.includes("start")
                  ? "Start month"
                  : label.includes("end")
                  ? "End month"
                  : "err"
              }
              className="date__menuitem"
              onChange={(e) => setStateMethodFirst(e.target.value)}
            >
              {monthsArr.map((month) => {
                return (
                  <MenuItem
                    className="date__menuitem"
                    value={month}
                    key={uniqid()}
                  >
                    {month}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
          <div className="infocontainer__flexcontainer flex flex-col">
            <InputLabel>
              {label.includes("Start")
                ? "Start year"
                : label.includes("End")
                ? "End year"
                : "err"}
            </InputLabel>
            <Select
              defaultValue=""
              required={startProps && !isOngoing ? true : false}
              disabled={isOngoing && label.includes("End") ? true : false}
              error={isFor.includes("Job") ? jobYearsErr : schoolYearsErr}
              label={
                label.includes("Start")
                  ? "Start year"
                  : label.includes("End")
                  ? "End year"
                  : "err"
              }
              className="date__menuitem"
              onChange={(e) => {
                setStateMethodSecond(e.target.value);
                if (isFor.includes("Job")) {
                  return checkIfYearsErr(
                    props.jobStartYear,
                    props.jobEndYear,
                    props.jobIsOngoing,
                    setJobYearsErr,
                    false
                  );
                } else {
                  return checkIfYearsErr(
                    props.educationStartYear,
                    props.educationEndYear,
                    null,
                    setSchoolYearsErr,
                    true
                  );
                }
              }}
            >
              {yearsArr.map((yearsArr) => (
                <MenuItem value={yearsArr} key={uniqid()} required>
                  {yearsArr}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="infocontainer w-10/12 bg-slate-100 p-9">
      <div className="infocontainer__row bg-white p-4 rounded-lg">
        <h3 className="infocontainer__heading text-lg mb-4">About:</h3>
        <TextField
          label="About"
          rows={3}
          className="w-full"
          multiline
          onChange={(e) => props.setUserDescription(e.target.value)}
        />
        <form className="infocontainer__form" action="">
          <div className="infocontainer__formrow">
            <h3 className="infocontainer__subheading text-lg mb-4 mt-12">
              Skills:
            </h3>
            <TextField
              id="skillfield"
              label="Skill"
              className="infocontainer__skillfield"
              size="small"
              error={
                props.userSkill[0] == null
                  ? false
                  : props.userSkill[0].length > 0 &&
                    props.userSkill[0].length < 3
                  ? true
                  : false
              }
              helperText={
                props.userSkill[0] == null
                  ? false
                  : props.userSkill[0].length > 0 &&
                    props.userSkill[0].length < 3
                  ? "Too short."
                  : false
              }
              inputProps={{ maxLength: 40, minLength: 3 }}
              onChange={(e) => props.setUserSkill([e.target.value])}
            />
            <Button
              variant="contained"
              className="infocontainer__addbtn"
              onClick={() => {
                if (props.userSkill[0] == null || props.userSkill[0].length < 3)
                  return;
                props.setUserSkillsArr([
                  ...props.userSkillsArr,
                  props.userSkill,
                ]);
                document.getElementById("skillfield").value = "";
                props.setUserSkill([]);
              }}
            >
              Add
            </Button>
            <Button
              variant="contained"
              className="infocontainer__removebtn"
              onClick={() =>
                props.setUserSkillsArr(
                  props.userSkillsArr.slice(0, props.userSkillsArr.length - 1)
                )
              }
            >
              Remove last entry
            </Button>
          </div>
        </form>
        {props.userSkillsArr.length > 0 ? (
          <div className="infocontainer__row mb-4 bg-white p-4 rounded-lg mt-6">
            <ul className="infocontainer__skills px-9 py-2">
              {props.userSkillsArr.map((skill) => {
                return (
                  <li className="infocontainer__skill overflow" key={uniqid()}>
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="infocontainer__row bg-white p-4 mt-12 rounded-lg">
        <h3 className="infocontainer__heading text-lg mb-4">
          Work experience:
        </h3>
        <form
          id="jobForm"
          className="infocontainer__form flex flex-col"
          onSubmit={(e) => e.preventDefault()}
        >
          <TextField
            required
            label="Title"
            error={
              props.jobTitle.length > 0 && props.jobTitle.length < 3
                ? true
                : false
            }
            helperText={
              props.jobTitle.length > 0 && props.jobTitle.length < 3
                ? "Too short"
                : false
            }
            placeholder="Ex: Sales Manager"
            className="infocontainer__workfield infocontainer__field"
            onChange={(e) => props.setJobTitle(e.target.value)}
            inputProps={{ maxLength: 40, minLength: 3 }}
          />
          <TextField
            label="Company"
            error={
              props.jobCompany.length > 0 && props.jobCompany.length < 3
                ? true
                : false
            }
            helperText={
              props.jobCompany.length > 0 && props.jobCompany.length < 3
                ? "Too short"
                : false
            }
            placeholder="Ex: Google"
            required
            className="infocontainer__companyfield infocontainer__field"
            onChange={(e) => props.setJobCompany(e.target.value)}
            inputProps={{ maxLength: 40, minLength: 3 }}
          />

          {createDateSelects(
            "startJob",
            props.setJobStartMonth,
            props.setJobStartYear,
            props.jobIsOngoing,
            props.jobStartYear
          )}
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked={false} />}
              className={"infocontainer__ongoingcheck"}
              onChange={() => {
                props.jobIsOngoing
                  ? props.setJobIsOngoing(false)
                  : props.setJobIsOngoing(true);
                checkIfYearsErr(
                  props.jobStartYear,
                  props.jobEndYear,
                  props.jobIsOngoing,
                  setJobYearsErr,
                  false
                );
              }}
              label="Currently working in this position."
            />
            {createDateSelects(
              "endJob",
              props.setJobEndMonth,
              props.setJobEndYear,
              props.jobIsOngoing,
              props.jobStartYear
            )}
          </FormGroup>
          <TextField
            label="Description"
            rows={3}
            className="w-full infocontainer__jobdescription"
            multiline
            onChange={(e) => props.setjobDescription(e.target.value)}
          />
          <div className="infocontainer__flexrow flex mt-6">
            <Button
              variant="contained"
              type="submit"
              className="infocontainer__addbtn--mr"
              onClick={() => {
                if (jobYearsErr === true) return;
                if (!props.jobStartYear) return;
                if (!props.jobCompany || !props.jobTitle) return;
                props.setUserJobsArr([
                  ...props.userJobsArr,
                  {
                    title: props.jobTitle,
                    company: props.jobCompany,
                    startMonth: props.jobStartMonth,
                    startYear: props.jobStartYear,
                    isOngoing: props.jobIsOngoing,
                    endMonth: props.jobEndMonth,
                    endYear: props.jobEndYear,
                    description: props.jobDescription,
                    key: uniqid(),
                  },
                ]);
                document.getElementById("jobForm").reset();
              }}
            >
              Add
            </Button>
            <Button
              variant="contained"
              className="infocontainer__removebtn-mr"
              onClick={() =>
                props.setUserJobsArr(
                  props.userJobsArr.slice(0, props.userJobsArr.length - 1)
                )
              }
            >
              Remove last entry
            </Button>
          </div>
        </form>

        {props.userJobsArr.length > 0 ? (
          <div className="infocontainer__row mb-4 p-8 rounded-lg mt-6">
            {props.userJobsArr.map((job) => {
              return (
                <div
                  className="infocontainer__row mb-4 p-8 rounded-lg mt-2"
                  key={uniqid()}
                >
                  <h4 className="text-xl font-semibold mb-1 ">{job.title}</h4>
                  <p className="text-lg font-medium text-blue-400">
                    {job.company}
                  </p>
                  <p className="text-gray-400 my-1">
                    {job.startMonth
                      ? job.startMonth + " " + job.startYear
                      : job.startYear}
                    {" - "}
                    {job.isOngoing
                      ? "Present"
                      : job.endMonth === true
                      ? job.endMonth + " " + job.endYear
                      : job.endYear}
                  </p>
                  <p>{job.description}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="infocontainer__row bg-white p-4 mt-12 rounded-lg">
        <h3 className="infocontainer__heading text-lg mb-4">Education:</h3>
        <form
          id="educationForm"
          className="infocontainer__form flex flex-col"
          onSubmit={(e) => e.preventDefault()}
        >
          <TextField
            required
            label="School"
            error={
              props.userSchool.length > 0 && props.userSchool.length < 3
                ? true
                : false
            }
            helperText={
              props.userSchool.length > 0 && props.userSchool.length < 3
                ? "Too short"
                : false
            }
            placeholder="Ex: Bucharest University"
            className="infocontainer__schoolfield infocontainer__field"
            onChange={(e) => props.setUserSchool(e.target.value)}
            inputProps={{ maxLength: 40, minLength: 3 }}
          />
          <TextField
            label="Degree"
            error={
              props.userDegree.length > 0 && props.userDegree.length < 3
                ? true
                : false
            }
            helperText={
              props.userDegree.length > 0 && props.userDegree.length < 3
                ? "Too short"
                : false
            }
            placeholder="Ex: Bachelors"
            required
            className="infocontainer__degreefield infocontainer__field"
            onChange={(e) => props.setUserDegree(e.target.value)}
            inputProps={{ maxLength: 40, minLength: 3 }}
          />
          <TextField
            label="Field"
            error={
              props.userField.length > 0 && props.userField.length < 3
                ? true
                : false
            }
            helperText={
              props.userField.length > 0 && props.userField.length < 3
                ? "Too short"
                : false
            }
            placeholder="Ex: Chemistry"
            required
            className="infocontainer__studyfield infocontainer__field"
            onChange={(e) => props.setUserField(e.target.value)}
            inputProps={{ maxLength: 40, minLength: 3 }}
          />

          {createDateSelects(
            "startSchool",
            props.setEducationStartMonth,
            props.setEducationStartYear,
            null,
            props.educationStartYear
          )}

          {createDateSelects(
            "endSchool",
            props.setEducationEndMonth,
            props.setEducationEndYear,
            null,
            props.educationStartYear
          )}
          <TextField
            label="Description"
            rows={3}
            className="w-full infocontainer__educationdescription"
            multiline
            onChange={(e) => props.setEducationDescription(e.target.value)}
          />
          <div className="infocontainer__flexrow flex mt-6">
            <Button
              variant="contained"
              type="submit"
              className="infocontainer__addbtn--mr"
              onClick={() => {
                if (schoolYearsErr === true) return;
                if (!props.educationStartYear) return;
                if (!props.educationEndYear) return;
                if (!props.userSchool || !props.userDegree || !props.userField)
                  return;
                props.setUserEducationArr([
                  ...props.userEducationArr,
                  {
                    school: props.userSchool,
                    degree: props.userDegree,
                    field: props.userField,
                    startMonth: props.educationStartMonth,
                    startYear: props.educationStartYear,
                    endMonth: props.educationEndMonth,
                    endYear: props.educationEndYear,
                    description: props.educationDescription,
                    key: uniqid(),
                  },
                ]);
                document.getElementById("educationForm").reset();
              }}
            >
              Add
            </Button>
            <Button
              variant="contained"
              className="infocontainer__removebtn-mr"
              onClick={() =>
                props.setUserEducationArr(
                  props.userEducationArr.slice(
                    0,
                    props.userEducationArr.length - 1
                  )
                )
              }
            >
              Remove last entry
            </Button>
          </div>
        </form>

        {props.userEducationArr.length > 0 ? (
          <div className="infocontainer__row mb-4 p-8 rounded-lg mt-6">
            {props.userEducationArr.map((education) => {
              return (
                <div
                  className="infocontainer__row mb-4 p-8 rounded-lg mt-2"
                  key={uniqid()}
                >
                  <h4 className="text-xl font-semibold mb-1 ">
                    {education.school}
                  </h4>
                  <p className="text-lg font-medium text-blue-400">
                    {education.degree} in {education.field}
                  </p>
                  <p className="text-gray-400 my-1">
                    {education.startMonth
                      ? education.startMonth + " " + education.startYear
                      : education.startYear}
                    {" - "}
                    {education.endMonth
                      ? education.endMonth + " " + education.endYear
                      : education.endYear}
                  </p>
                  <p>{education.description}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MainInfoContainer;
