import React, { Component } from "react";
import "./Main.css";
class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main--app flex w-11/12 align-center flex-col pb-12">
        <div className="main--topform w-11/12 mt-12 mr-auto ml-auto  p-4 ">
          <form action="" onSubmit={this.props.onSubmitToSkillsList}>
            <div className="flex flex-col">
              <h3 className="topform--title mb-2 text-2xl text-white">
                About you
              </h3>
              <p className="formrow--title bordbot--none mb-2 ml-4 text-white text-xl">
                Summary*
              </p>
              <textarea
                rows="3"
                cols="115"
                required
                className="user--summary resize-none bg-white p-1  px-4 text-lg mb-5 mx-4"
                onInput={this.props.onSummaryInput}
                maxLength="280"
              />
            </div>
            <div className="form--bottomrow form--formrow flex flex-col flex-start">
              <p className="formrow--title bordbot--none mb-2 ml-4 text-xl text-white">
                Skills
              </p>
              <div className="form--skillinput">
                <input
                  type="text"
                  className="user--skills w-3/12 bg-white p-1  px-4 text-lg mb-5 mx-4"
                  placeholder="Add a skill"
                  value={this.props.topform.skill.skillname}
                  onInput={this.props.onSkillInput}
                />
                <button
                  type="submit"
                  className="bg-white text-purple-600 px-4 py-1 text-lg "
                >
                  Add
                </button>
              </div>
              <div className="skillsform--userinput flex min-h-fit mb-5 mx-4 mt-5  bg-white p-12">
                <ul className="userinput--list grid pr-3 mx-4">
                  {this.props.topform.skills.map((skill) => (
                    <li className="userinput--skill text-black">
                      {skill.skillname}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </form>
        </div>
        <div className="main--middleform w-11/12 mt-12 mr-auto ml-auto">
          <form action="" onSubmit={this.props.onSubmitToJobsList}>
            <div className="form--formrow flex flex-col flex-start  p-4 ">
              <p className="formrow--title bordbot--none mb-2 text-2xl text-white">
                Work experience
              </p>
              <div className="form--workexperience">
                <div className="workexperience--row flex flex-col mx-4 mb-4">
                  <label htmlFor="job--title" className="text-white text-lg">
                    Title*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-3/12 bg-white p-1  px-4 text-lg mb-2 mt-2"
                    placeholder="Ex: Sales Manager"
                    onChange={this.props.onTitleInput}
                    value={this.props.middleform.job.title}
                  />
                </div>
                <div className="workexperience--row flex flex-col mx-4 mb-4">
                  <label htmlFor="job--company" className="text-white text-lg">
                    Company*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-3/12 bg-white p-1  px-4 text-lg mb-2 mt-2"
                    placeholder="Ex: Google"
                    onChange={this.props.onCompanyInput}
                    value={this.props.middleform.job.company}
                  />
                </div>
                <div className="workexperience--row flex flex-col mx-4 mb-4">
                  <label
                    htmlFor="job--startdate"
                    className="text-white text-lg mb-2"
                  >
                    Start Date
                  </label>
                  <div className="startdate--container flex">
                    <select
                      name="job--startdate"
                      id="job--startdate"
                      className="bg-white p-1  px-2 text-lg mr-4"
                      onChange={this.props.onStartMonthInput}
                      value={this.props.middleform.job.startdate.month}
                    >
                      <option value="" hidden>
                        Month
                      </option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                    <select
                      name="job--startyear"
                      id="job--startyear required"
                      className="bg-white p-1  px-2 text-lg mr-4"
                      onChange={this.props.onStartYearInput}
                      required
                      value={this.props.middleform.job.startdate.year}
                    >
                      <option value="" hidden>
                        Year*
                      </option>
                      <option value="2010">2010</option>
                      <option value="2011">2011</option>
                      <option value="2012">2012</option>
                      <option value="2013">2013</option>
                      <option value="2014">2014</option>
                      <option value="2015">2015</option>
                      <option value="2016">2016</option>
                      <option value="2017">2017</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                    </select>
                  </div>
                  <div className="job--noenddatecontainer flex mt-6 mb-1">
                    <input
                      type="checkbox"
                      id="job--noenddate"
                      className="bg-white  p-2 text-lg mr-2"
                      onChange={this.props.onJobOngoingCheckboxInput}
                    />
                    <label
                      htmlFor="job--noenddate"
                      className="text-white text-lg"
                    >
                      I am currently working in this role
                    </label>
                  </div>

                  <label htmlFor="job--enddate" className="text-white text-lg">
                    End Date
                  </label>
                  <div className="enddate--container flex mt-2">
                    <select
                      disabled={this.props.middleform.job.enddate.ongoing}
                      name="job--enddate"
                      id="job--enddate"
                      className="bg-white p-1  px-2 text-lg mr-4"
                      onChange={this.props.onEndMonthInput}
                      value={this.props.middleform.job.enddate.month}
                    >
                      <option value="" hidden>
                        Month
                      </option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                    <select
                      disabled={this.props.middleform.job.enddate.ongoing}
                      name="job--endyear"
                      id="job--endyear"
                      className="bg-white p-1  px-2 text-lg mr-4"
                      required
                      onChange={this.props.onEndYearInput}
                      value={this.props.middleform.job.enddate.year}
                    >
                      <option value="" hidden>
                        Year*
                      </option>
                      <option value="2010">2010</option>
                      <option value="2011">2011</option>
                      <option value="2012">2012</option>
                      <option value="2013">2013</option>
                      <option value="2014">2014</option>
                      <option value="2015">2015</option>
                      <option value="2016">2016</option>
                      <option value="2017">2017</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                    </select>
                  </div>
                </div>
                <div className="workexperience--row flex flex-col mx-4 mb-4">
                  <label
                    htmlFor="job--description"
                    className="text-white text-lg"
                  >
                    Description
                  </label>
                  <textarea
                    rows="3"
                    cols="115"
                    className="job--description resize-none bg-white   px-4 text-lg mb-5 mt-2"
                    maxLength="280"
                    minLength="80"
                    onChange={this.props.onCompanyDescriptionInput}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-purple-600 py-1 px-4 ml-4 text-lg  mb-4"
                  on
                >
                  Add
                </button>
              </div>
              <div className="jobform--userinput flex  flex-col mb-5 mx-4 mt-5  bg-white pt-12 px-12 ">
                {this.props.middleform.jobs.map((job) => (
                  <div
                    className="job--container bg-gray-100 p-4  mb-12"
                    key={job.key}
                  >
                    <h3 className="job--title font-medium  px-4 text-2xl my-2">
                      {job.title}
                    </h3>
                    <p className="job--company px-4 text-xl my-1 font-medium">
                      {job.company}
                    </p>
                    <p className="job--startenddates px-4 text-gray-400">
                      {job.startdate.month} {job.startdate.year} -
                      {job.enddate.ongoing
                        ? " Present"
                        : ` ${job.enddate.month} ${job.enddate.year}`}
                    </p>
                    {job.description ? (
                      <p className="job--description px-4 mt-1">
                        {job.description}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
        <div className="main--bottomform w-11/12 mt-12 mr-auto ml-auto">
          <form action="" onSubmit={this.props.onSubmitToEducationList}>
            <div className="form--formrow flex flex-col flex-start p-4 ">
              <p className="formrow--title bordbot--none mb-2 text-2xl text-white">
                Education
              </p>
              <div className="form--education">
                <div className="education--row flex flex-col mx-4 mb-4">
                  <label
                    htmlFor="education--school"
                    className="text-white text-lg"
                  >
                    School*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-3/12 bg-white p-1  px-4 text-lg mb-2 mt-2"
                    placeholder="Ex: Bucharest Univeristy"
                    onChange={this.props.onSchoolInput}
                    value={this.props.bottomform.education.school}
                  />
                </div>
                <div className="education--row flex flex-col mx-4 mb-4">
                  <label
                    htmlFor="education--degree"
                    className="text-white text-lg"
                  >
                    Degree
                  </label>
                  <input
                    type="text"
                    className="w-3/12 bg-white p-1  px-4 text-lg mb-2 mt-2"
                    placeholder="Ex: Bachelors"
                    onChange={this.props.onDegreeInput}
                    value={this.props.bottomform.education.degree}
                  />
                </div>
                <div className="education--row flex flex-col mx-4 mb-4">
                  <label
                    htmlFor="education--field"
                    className="text-white text-lg"
                  >
                    Field
                  </label>
                  <input
                    type="text"
                    className="w-3/12 bg-white p-1  px-4 text-lg mb-2 mt-2"
                    placeholder="Ex: Chemistry"
                    onChange={this.props.onFieldInput}
                    value={this.props.bottomform.education.field}
                  />
                </div>
                <div className="education--row flex flex-col mx-4 mb-4">
                  <label
                    htmlFor="education--startdate"
                    className="text-white text-lg mb-2"
                  >
                    Start Date
                  </label>
                  <div className="startdate--container flex">
                    <select
                      name="education--startdate"
                      id="education--startdate"
                      className="bg-white p-1  px-2 text-lg mr-4"
                      onChange={this.props.onStartEducationMonthInput}
                      value={this.props.bottomform.education.startdate.month}
                    >
                      <option value="" hidden>
                        Month
                      </option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                    <select
                      name="education--startyear"
                      id="education--startyear"
                      className="bg-white p-1  px-2 text-lg mr-4"
                      required
                      onChange={this.props.onStartEducationYearInput}
                      value={this.props.bottomform.education.startdate.year}
                    >
                      <option value="" hidden>
                        Year*
                      </option>
                      <option value="2010">2010</option>
                      <option value="2011">2011</option>
                      <option value="2012">2012</option>
                      <option value="2013">2013</option>
                      <option value="2014">2014</option>
                      <option value="2015">2015</option>
                      <option value="2016">2016</option>
                      <option value="2017">2017</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                    </select>
                  </div>

                  <label
                    htmlFor="education--enddate"
                    className="text-white text-lg"
                  >
                    End Date
                  </label>
                  <div className="enddate--container flex mt-2">
                    <select
                      name="education--enddate"
                      id="education--enddate"
                      className="bg-white p-1  px-2 text-lg mr-4"
                      onChange={this.props.onEndEducationMonthInput}
                      value={this.props.bottomform.education.enddate.month}
                    >
                      <option value="" hidden>
                        Month
                      </option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                    <select
                      name="education--endyear"
                      id="education--endyear"
                      className="bg-white p-1  px-2 text-lg mr-4"
                      required
                      onChange={this.props.onEndEducationYearInput}
                      value={this.props.bottomform.education.enddate.year}
                    >
                      <option value="" hidden>
                        Year*
                      </option>
                      <option value="2010">2010</option>
                      <option value="2011">2011</option>
                      <option value="2012">2012</option>
                      <option value="2013">2013</option>
                      <option value="2014">2014</option>
                      <option value="2015">2015</option>
                      <option value="2016">2016</option>
                      <option value="2017">2017</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                    </select>
                  </div>
                </div>
                <div className="education--row flex flex-col mx-4 mb-4">
                  <label
                    htmlFor="education--description"
                    className="text-white text-lg"
                  >
                    Description
                  </label>
                  <textarea
                    rows="3"
                    cols="115"
                    className="education--description resize-none bg-white   px-4 text-lg mb-5 mt-2"
                    maxLength="280"
                    minLength="80"
                    onChange={this.props.onEducationDescriptionInput}
                    value={this.props.bottomform.education.description}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-purple-600 py-1 px-4 ml-4 text-lg  mb-4"
                  on
                >
                  Add
                </button>
              </div>
              <div className="education--userinput flex  flex-col mb-5 mx-4 mt-5  bg-white pt-12 px-12 ">
                {this.props.bottomform.educationArr.map((education) => (
                  <div
                    className="education--container bg-gray-100 p-4  mb-12"
                    key={education.key}
                  >
                    <h3 className="education--school font-medium  px-4 text-2xl my-2">
                      {education.school}
                    </h3>
                    <p className="education--degreeandfield px-4 text-lg my-1 font-medium">
                      {education.degree} in {education.field}
                    </p>
                    <p className="education--startenddates px-4 text-gray-400">
                      {education.startdate.month} {education.startdate.year} -{" "}
                      {education.enddate.month} {education.enddate.year}
                    </p>
                    {education.description ? (
                      <p className="education--description px-4 mt-1">
                        {education.description}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Main;
