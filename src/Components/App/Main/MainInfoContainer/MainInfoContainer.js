import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React from "react";
import uniqid from "uniqid";

const MainInfoContainer = (props) => {
  return (
    <div className="infocontainer w-10/12 bg-slate-100 p-9">
      <div className="infocontainer__row bg-white p-4 rounded-lg">
        <h3 className="infocontainer__heading text-lg mb-4">About:</h3>
        <TextField
          id="standard-multiline-static"
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
              id="outlined-required skillfield"
              label="Skill"
              className="infocontainer__skillfield"
              size="small"
              default={""}
              inputProps={{ maxLength: "40" }}
              onChange={(e) => props.setUserSkill([e.target.value])}
            />
            <Button
              variant="contained"
              className="infocontainer__addbtn"
              onClick={() => {
                props.setUserSkillsArr([
                  ...props.userSkillsArr,
                  props.userSkill,
                ]);
                document.getElementById("outlined-required skillfield").value =
                  "";
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
              Remove
            </Button>
          </div>
        </form>
        {props.userSkillsArr.length > 0 ? (
          <div className="infocontainer__row mb-4 bg-white p-4 rounded-lg mt-6">
            <ul className="infocontainer__skills px-9 py-2">
              {props.userSkillsArr.map((skill) => {
                return (
                  <li
                    className="infocontainer__skill overflow"
                    key={(skill.key = uniqid())}
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MainInfoContainer;
