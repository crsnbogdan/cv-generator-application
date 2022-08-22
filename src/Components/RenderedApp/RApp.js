import React, { Component } from "react";
import "./RApp.css";
class RApp extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="rendered--app absolute w-8/12 h-auto p-10 bg-white z-50 flex flex-col">
        <div className="rapp--row top flex rapp-nav">
          <div className="row--left bg-purple-600 w-4/12 h-10"></div>
          <div className="row--right w-10/12"></div>
        </div>
        <div className="rapp--row main flex">
          <div className="rapp--sidebar w-3/12">
            <div className="sidebar--title mt-5">
              <h1 className="text-3xl w-6/12 uppercase font-semibold text-purple-600">
                {this.props.sidebar.topRow.name}
              </h1>
            </div>
            <div
              style={{
                backgroundImage: `url(${this.props.sidebar.topRow.imgFile})`,
              }}
              className="sidebar--imgcontainer bg-purple-200 h-56 rounded-full mt-5 mb-10"
            ></div>
            <div className="sidebar--contact mt-10">
              <h2 className="text-xl text-purple-600 font-semibold">Contact</h2>
              <p className="mt-1">
                <span className="font-medium">Email:</span>{" "}
                {this.props.sidebar.bottomRow.email}
              </p>
              <p className="mt-1">
                <span className="font-medium">Phone Number:</span>{" "}
                {this.props.sidebar.bottomRow.phoneNumber}
              </p>
              {this.props.sidebar.bottomRow.linkedin ? (
                <p
                  className="
                mt-1"
                >
                  <span className="font-medium">Linkedin:</span>{" "}
                  {this.props.sidebar.bottomRow.linkedin}
                </p>
              ) : null}
              {this.props.sidebar.bottomRow.github ? (
                <p className="mt-1">
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
            <div className="main--row flex flex-col">
              <h2 className="main-summary text-xl text-purple-600 font-semibold">
                Summary
              </h2>
              <p className="mt-1">{this.props.main.topform.summary}</p>
            </div>
            {this.props.main.topform.skills.length > 0 ? (
              <div className="main--row flex flex-col mt-10">
                <h2 className="main-skills text-xl text-purple-600 font-semibold">
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

            {this.props.main.middleform.jobs.length > 1 ? (
              <div className="main--row flex flex-col mt-10">
                <h2 className="main-workexperience text-xl text-purple-600 font-semibold mb-2">
                  Work Experience
                </h2>
                {this.props.main.middleform.jobs.map((job) => (
                  <div
                    className="job--container bg-gray-100 p-2  mb-5"
                    key={job.key}
                  >
                    <h3 className="job--title font-medium  px-4 text-lg my-2 text-purple-600">
                      {job.title}{" "}
                      <span className="text-black text-base font-normal">
                        {" "}
                        - {job.startdate.month} {job.startdate.year} to
                        {job.enddate.ongoing
                          ? " Present"
                          : ` ${job.enddate.month} ${job.enddate.year}`}
                      </span>
                    </h3>
                    <p className="job--company px-4 font-medium text-lg">
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
                <h2 className="main-education text-xl text-purple-600 font-semibold mb-2">
                  Education
                </h2>
                {this.props.main.bottomform.educationArr.map((education) => (
                  <div
                    className="education--container bg-gray-100 p-4"
                    key={education.key}
                  >
                    <p className="education--degreeandfield job--title font-medium  px-4 text-lg my-2 text-purple-600">
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
        </div>
        <div className="rapp--row bottom flex rapp-footer mt-32">
          <div className="row--left w-4/12 h-10"></div>
          <div className="row--right bg-purple-600 w-10/12 h-10 flex  justify-end">
            <p className="text-white my-auto text-xs font-thin mr-8">
              © {new Date().getFullYear()} - Crisan Bogdan
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default RApp;
