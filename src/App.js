import React, { Component } from "react";
import uniqid from "uniqid";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "editing",
      sidebar: {
        topRow: {
          name: "",
          imgFile: null,
        },
        bottomRow: {
          email: "",
          phoneNumber: "",
          linkedin: "",
          github: "",
        },
      },
      main: {
        topform: {
          summary: "",
          skills: [],
          skill: {
            skillname: "",
            key: uniqid(),
          },
        },
        middleform: {
          jobs: [],
          job: {
            title: "",
            company: "",
            startdate: {
              month: "",
              year: "",
            },
            enddate: {
              ongoing: false,
              month: "",
              year: "",
            },
            description: "",
            key: uniqid(),
          },
        },
      },
      file: null,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitToSkillsList = this.onSubmitToSkillsList.bind(this);
    this.onImgUpload = this.onImgUpload.bind(this);
    this.onEmailInput = this.onEmailInput.bind(this);
    this.onPhoneNumberInput = this.onPhoneNumberInput.bind(this);
    this.onLinkedinInput = this.onLinkedinInput.bind(this);
    this.onGitHubInput = this.onGitHubInput.bind(this);
    this.onSummaryInput = this.onSummaryInput.bind(this);
    this.onSkillInput = this.onSkillInput.bind(this);
    this.onTitleInput = this.onTitleInput.bind(this);
    this.onCompanyInput = this.onCompanyInput.bind(this);
  }

  switchMode = (e) =>
    e.target.checked
      ? this.setState({ mode: "previewing" })
      : this.setState({ mode: "editing" });

  // sidebar methods
  onNameInputUpdate = (e) =>
    this.setState({
      sidebar: {
        topRow: {
          name: e.target.value,
          imgFile: this.state.sidebar.topRow.imgFile,
        },
        bottomRow: this.state.sidebar.bottomRow,
      },
      main: this.state.main,
    });
  onImgUpload = (e) =>
    this.setState({
      sidebar: {
        topRow: {
          name: this.state.sidebar.topRow.name,
          imgFile: URL.createObjectURL(e.target.files[0]),
        },
        bottomRow: this.state.sidebar.bottomRow,
      },
      main: this.state.main,
    });
  onEmailInput = (e) =>
    this.setState({
      sidebar: {
        topRow: this.state.sidebar.topRow,
        bottomRow: {
          email: e.target.value,
          phoneNumber: this.state.sidebar.bottomRow.phoneNumber,
          linkedin: this.state.sidebar.bottomRow.linkedin,
          github: this.state.sidebar.bottomRow.github,
          address: this.state.sidebar.bottomRow.address,
        },
      },
      main: this.state.main,
    });
  onPhoneNumberInput = (e) =>
    this.setState({
      sidebar: {
        topRow: this.state.sidebar.topRow,
        bottomRow: {
          email: this.state.sidebar.bottomRow.email,
          phoneNumber: e.target.value,
          linkedin: this.state.sidebar.bottomRow.linkedin,
          github: this.state.sidebar.bottomRow.github,
          address: this.state.sidebar.bottomRow.address,
        },
      },
      main: this.state.main,
    });
  onLinkedinInput = (e) =>
    this.setState({
      sidebar: {
        topRow: this.state.sidebar.topRow,
        bottomRow: {
          email: this.state.sidebar.bottomRow.email,
          phoneNumber: this.state.sidebar.bottomRow.email,
          linkedin: e.target.value,
          github: this.state.sidebar.bottomRow.github,
          address: this.state.sidebar.bottomRow.address,
        },
      },
      main: this.state.main,
    });
  onGitHubInput = (e) =>
    this.setState({
      sidebar: {
        topRow: this.state.sidebar.topRow,
        bottomRow: {
          email: this.state.sidebar.bottomRow.email,
          phoneNumber: this.state.sidebar.bottomRow.email,
          linkedin: this.state.sidebar.bottomRow.linkedin,
          github: e.target.value,
          address: this.state.sidebar.bottomRow.address,
        },
      },
      main: this.state.main,
    });
  onAddressInput = (e) =>
    this.setState({
      sidebar: {
        topRow: this.state.sidebar.topRow,
        bottomRow: {
          email: this.state.sidebar.bottomRow.email,
          phoneNumber: this.state.sidebar.bottomRow.email,
          linkedin: this.state.sidebar.bottomRow.linkedin,
          github: this.state.sidebar.bottomRow.github,
          address: e.target.value,
        },
      },
      main: this.state.main,
    });

  // main top form methods
  onSummaryInput = (e) => {
    this.setState({
      sidebar: this.state.sidebar,
      main: {
        topform: {
          summary: e.target.value,
          skills: this.state.main.topform.skills,
          skill: this.state.main.topform.skill,
        },
        middleform: this.state.main.middleform,
      },
    });
  };

  onSkillInput = (e) =>
    this.setState({
      sidebar: this.state.sidebar,
      main: {
        topform: {
          summary: this.state.main.topform.summary,
          skills: this.state.main.topform.skills,
          skill: {
            skillname: e.target.value,
            key: this.state.main.topform.skill.key,
          },
        },
        middleform: this.state.main.middleform,
      },
    });

  // main middle form methods

  onTitleInput = (e) =>
    this.setState({
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: {
          jobs: this.state.main.middleform.jobs || [],
          job: {
            title: e.target.value,
            company: this.state.main.middleform.job.company,
          },
        },
      },
    });
  onCompanyInput = (e) =>
    this.setState({
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: {
          jobs: this.state.main.middleform.jobs || [],
          job: {
            title: this.state.main.middleform.job.title,
            company: e.target.value,
          },
        },
      },
    });

  onSubmit = (e) => e.preventDefault();
  onSubmitToSkillsList = (e) => {
    e.preventDefault();
    if (this.state.main.topform.skills.length >= 8) return;
    this.setState({
      sidebar: this.state.sidebar,
      main: {
        topform: {
          skills: this.state.main.topform.skills.concat(
            this.state.main.topform.skill
          ),
          skill: {
            skillname: "",
            key: uniqid(),
          },
          summary: this.state.main.topform.summary,
        },
        middleform: this.state.main.middleform,
      },
    });
  };

  render() {
    return (
      <div className="App">
        <div className="nav flex justify-between items-center px-20 bg-white">
          {this.state.mode === "editing" ? (
            <div className="navtext">
              <h1 className="font-bold text-3xl text-green-400">
                CV Generator
              </h1>
              <p className="my-1 text-lg text-gray-400">Currently editing</p>
            </div>
          ) : (
            <div className="navtext">
              <h1 className="font-bold text-3xl text-gray-400">CV Generator</h1>
              <p className="my-1 text-lg text-green-400">
                Currently previewing
              </p>
            </div>
          )}
          <div className="modetoggle">
            <input type="checkbox" id="switch" onChange={this.switchMode} />
            <label htmlFor="switch" className="switchLabel">
              Toggle
            </label>
          </div>
        </div>
        <div className="main w-full bg-green-400 flex">
          <div className="main--sidebar w-1/5 p-10 bg-white">
            <div className="sidebar--form--container">
              <form action="" className="sidebar--form">
                <div className="flex flex-col align-center mb-5 justify-center">
                  <input
                    type="text"
                    value={this.state.sidebar.topRow.name}
                    onChange={this.onNameInputUpdate}
                    placeholder="Your name*"
                    className="user--name bg-gray-100 p-1 rounded-lg px-4 text-lg mb-5"
                    required
                    maxLength="20"
                  />
                  {this.state.sidebar.topRow.imgFile ? null : (
                    <div className="flex align-center justify-center">
                      <input
                        type="file"
                        name="uploadfile"
                        id="img"
                        onChange={this.onImgUpload}
                        style={{ display: "none" }}
                        accept=".jpg,.jpeg"
                      />
                      <label
                        htmlFor="img"
                        className="bg-green-300 text-white px-6 py-3 text-lg rounded-lg"
                      >
                        Upload an image
                      </label>
                    </div>
                  )}
                  {this.state.sidebar.topRow.imgFile ? (
                    <div
                      style={{
                        backgroundImage: `url(${this.state.sidebar.topRow.imgFile})`,
                      }}
                      className="user--imagecontainer h-48 w-48 mt-5 py-1 px-4 self-center bg-center rounded-full"
                      required
                    />
                  ) : (
                    <div
                      input={this.state.sidebar.topRow.imgFile}
                      className="user--imagecontainer mt-5 self-center"
                      required
                      style={{ visibility: "hidden" }}
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <p className="formrow--title text-lg float-right text-end mb-5">
                    Contact
                  </p>
                  <input
                    type="email"
                    required
                    className="user--email bg-gray-100 p-1 rounded-lg px-4 text-lg mb-5"
                    placeholder="your@email.com*"
                    minLength={7}
                    onInput={this.onEmailInput}
                  />
                  <input
                    type="tel"
                    required
                    className="user--number bg-gray-100 p-1 rounded-lg px-4 text-lg mb-5"
                    placeholder="0123 456 789*"
                    pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                    maxLength={10}
                    onInput={this.onPhoneNumberInput}
                  />
                  <input
                    type="url"
                    required
                    className="user--linkedin bg-gray-100 p-1 rounded-lg px-4 text-lg mb-5"
                    placeholder="Linkedin"
                    onInput={this.onLinkedinInput}
                  />
                  <input
                    type="url"
                    required
                    className="user--github user--contactinput bg-gray-100 p-1rounded-lg px-4 text-lg mb-5"
                    placeholder="GitHub"
                    onInput={this.onGitHubInput}
                  />
                  <input
                    type="text"
                    required
                    className="user--address bg-gray-100 p-1 rounded-lg px-4 text-lg"
                    placeholder="Address"
                    onInput={this.onAddressInput}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="main--app flex w-11/12 align-center flex-col">
            <div className="main--topform w-11/12 mt-12 mr-auto ml-auto">
              <form action="" onSubmit={this.onSubmitToSkillsList}>
                <div className="flex flex-col">
                  <p className="formrow--title bordbot--none mb-2 text-white text-xl">
                    Summary
                  </p>
                  <textarea
                    rows="3"
                    cols="115"
                    required
                    className="user--summary resize-none bg-white p-1 rounded-lg px-4 text-lg mb-5 ml-4"
                    onInput={this.onSummaryInput}
                    maxLength="280"
                  />
                </div>
                <div className="form--bottomrow form--formrow flex flex-col flex-start">
                  <p className="formrow--title bordbot--none mb-2 mt-10 text-xl text-white">
                    Skills
                  </p>
                  <div className="form--skillinput">
                    <input
                      type="text"
                      required
                      className="user--skills w-3/12 bg-white p-1 rounded-lg px-4 text-lg mb-5 mx-4"
                      placeholder="Add a skill"
                      value={this.state.main.topform.skill.skillname}
                      onInput={this.onSkillInput}
                    />
                    <button
                      type="submit"
                      className="bg-white text-green-300 px-4 py-1 text-lg rounded-lg"
                    >
                      Add
                    </button>
                  </div>
                  <div className="skillsform--userinput flex h-20 mx-4">
                    <ul className="userinput--list grid pr-3 mx-4">
                      {this.state.main.topform.skills.map((skill) => (
                        <li className="userinput--skill text-white">
                          {skill.skillname}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <div className="main--middleform w-11/12 mt-4 mr-auto ml-auto">
              <form action="" onSubmit={this.onSubmit}>
                <div className="form--formrow flex flex-col flex-start">
                  <p className="formrow--title bordbot--none mb-2 text-xl text-white">
                    Work experience
                  </p>
                  <div className="form--workexperience">
                    <div className="workexperience--row flex flex-col mx-4 mb-4">
                      <label
                        htmlFor="job--title"
                        className="text-white text-lg"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        required
                        className="w-3/12 bg-white p-1 rounded-lg px-4 text-lg mb-2 mt-2"
                        placeholder="Ex: Sales Manager"
                        onChange={this.onTitleInput}
                      />
                    </div>
                    <div className="workexperience--row flex flex-col mx-4 mb-4">
                      <label
                        htmlFor="job--company"
                        className="text-white text-lg"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        required
                        className="w-3/12 bg-white p-1 rounded-lg px-4 text-lg mb-2 mt-2"
                        placeholder="Ex: Google"
                        onChange={this.onCompanyInput}
                      />
                    </div>
                    <div className="workexperience--row flex flex-col mx-4 mb-4">
                      <label
                        htmlFor="job--startdate"
                        className="text-white text-lg"
                      >
                        Start Date
                      </label>
                      <div className="startdate--container flex">
                        <select
                          name="job--startdate"
                          id="job--startdate"
                          className="bg-white p-1 rounded-lg px-2 text-lg mr-4"
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
                          className="bg-white p-1 rounded-lg px-2 text-lg mr-4"
                        >
                          <option value="" hidden>
                            Year
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
                          className="bg-white rounded-lg p-2 text-lg mr-2"
                        />
                        <label
                          htmlFor="job--noenddate"
                          className="text-white text-lg"
                        >
                          I am currently working in this role
                        </label>
                      </div>

                      <label
                        htmlFor="job--enddate"
                        className="text-white text-lg"
                      >
                        End Date
                      </label>
                      <div className="enddate--container flex">
                        <select
                          name="job--enddate"
                          id="job--enddate"
                          className="bg-white p-1 rounded-lg px-2 text-lg mr-4"
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
                          name="job--endyear"
                          id="job--endyear"
                          className="bg-white p-1 rounded-lg px-2 text-lg mr-4"
                        >
                          <option value="" hidden>
                            Year
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
                        className="job--description resize-none bg-white p-1 rounded-lg px-4 text-lg mb-5 ml-4"
                        maxLength="280"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-white text-green-300 py-1 px-4 ml-4 text-lg rounded-lg"
                    >
                      Add
                    </button>
                  </div>
                  <div className="jobform--userinput flex h-36 mb-5 mx-4"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
