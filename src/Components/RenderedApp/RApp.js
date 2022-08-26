import React, { Component } from "react";
import "./RApp.css";
class RApp extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div
        id="rendered--cv"
        className="rendered--app absolute w-7/12 h-auto p-10 bg-white z-50 flex flex-col"
      >
        <header className="rapp--row top flex rapp-nav">
          <div className="row--left bg-blue-400 w-4/12 h-10"></div>
          <div className="row--right w-10/12"></div>
        </header>
        <main className="rapp--row main flex">
          <div className="rapp--sidebar w-3/12 mr-10">
            <div className="sidebar--title mt-5">
              <h1 className="text-3xl w-6/12 uppercase font-semibold text-blue-400">
                {this.props.sidebar.topRow.name}
              </h1>
            </div>
            <div
              style={{
                backgroundImage: `url(${this.props.sidebar.topRow.imgFile})`,
              }}
              className="sidebar--imgcontainer  bg-slate-200 h-48 rounded-full mt-5 mb-10 m-auto"
            ></div>
            <div className="sidebar--contact mt-10">
              {this.props.sidebar.bottomRow.email !== "" ||
              this.props.sidebar.bottomRow.phoneNumber !== "" ||
              this.props.sidebar.bottomRow.linkedin !== "" ||
              this.props.sidebar.bottomRow.github !== "" ||
              this.props.sidebar.bottomRow.address !== "" ? (
                <h2 className="text-xl text-blue-400 font-semibold">Contact</h2>
              ) : null}
              {this.props.sidebar.bottomRow.email ? (
                <p className="mt-1">
                  <span className="font-medium">Email:</span>{" "}
                  {this.props.sidebar.bottomRow.email}
                </p>
              ) : null}
              {this.props.sidebar.bottomRow.phoneNumber ? (
                <p className="mt-1">
                  <span className="font-medium">Phone Number:</span>{" "}
                  {this.props.sidebar.bottomRow.phoneNumber}
                </p>
              ) : null}
              {this.props.sidebar.bottomRow.linkedin ? (
                <p
                  className="
                mt-1 break-words"
                >
                  <span className="font-medium">Linkedin:</span>{" "}
                  {this.props.sidebar.bottomRow.linkedin}
                </p>
              ) : null}
              {this.props.sidebar.bottomRow.github ? (
                <p className="mt-1 break-words">
                  <span className="font-medium">GitHub:</span>{" "}
                  {this.props.sidebar.bottomRow.github}
                </p>
              ) : null}
              {this.props.sidebar.bottomRow.address ? (
                <p className="mt-1">
                  <span className="font-medium">Address:</span>{" "}
                  {this.props.sidebar.bottomRow.address}
                </p>
              ) : null}
            </div>
          </div>
          <div className="rapp--main w-9/12 p-10">
            {this.props.main.topform.summary ? (
              <div className="main--row flex flex-col">
                <h2 className="main-summary text-xl text-blue-400 font-semibold">
                  Summary
                </h2>
                <p className="mt-1">{this.props.main.topform.summary}</p>
              </div>
            ) : null}

            {this.props.main.topform.skills.length > 0 ? (
              <div className="main--row flex flex-col mt-10">
                <h2 className="main-skills text-xl text-blue-400 font-semibold">
                  Skills
                </h2>
                <ul className="main--skillslist grid pr-3 mx-4 mt-1">
                  {this.props.main.topform.skills.map((skill) => (
                    <li className="userinput--skill text-black">
                      {skill.skillname}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {this.props.main.middleform.jobs.length > 0 ? (
              <div className="main--row block mt-10 mb-10 overflow-visible ">
                <h2 className="main--workexperience text-xl text-blue-400 font-semibold mb-2">
                  Work Experience
                </h2>
                {this.props.main.middleform.jobs.map((job) => (
                  <div
                    className="job--container bg-gray-100 p-2  mb-8 block overflow-visible pagebreak"
                    key={job.key}
                  >
                    <h3 className="job--title font-medium  px-4 text-lg my-2 text-blue-400 ">
                      {job.title}{" "}
                      <span className="text-black text-base font-normal">
                        {" "}
                        - {job.startdate.month} {job.startdate.year} to
                        {job.enddate.ongoing
                          ? " Present"
                          : ` ${job.enddate.month} ${job.enddate.year}`}
                      </span>
                    </h3>
                    <p className="job--company px-4 font-medium text-lg mb-4">
                      {job.company}
                    </p>

                    {job.description ? (
                      <p className="job--description px-4 mt-1 pl-6">
                        {job.description}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}

            {this.props.main.bottomform.educationArr.length > 0 ? (
              <div className="main--row flex  flex-col mt-10 bg-white">
                <h2 className="main--education text-xl text-blue-400 font-semibold mb-4">
                  Education
                </h2>
                {this.props.main.bottomform.educationArr.map((education) => (
                  <div
                    className="education--container bg-gray-100 p-4"
                    key={education.key}
                  >
                    <p className="education--degreeandfield job--title font-medium  px-4 text-lg my-2 text-blue-400">
                      {education.degree} in {education.field} -{" "}
                      <span className="text-black text-base font-normal">
                        {education.startdate.month} {education.startdate.year}{" "}
                        to {education.enddate.month} {education.enddate.year}
                      </span>
                    </p>
                    <p className="education--school  px-4 font-medium text-lg">
                      {education.school}
                    </p>
                    {education.description ? (
                      <p className="education--description px-4 mt-1 pl-6">
                        {education.description}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </main>
        <footer className="rapp--row bottom flex rapp-footer mt-4">
          <div className="row--left w-4/12 h-10"></div>
          <div className="row--right bg-blue-400 w-8/12 h-10 flex  justify-end">
            <p className="text-white my-auto text-xs font-thin mr-8">
              © {new Date().getFullYear()} - Crisan Bogdan
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default RApp;
