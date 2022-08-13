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
    this.onInputSkill = this.onInputSkill.bind(this);
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
      },
    });
    console.log(this.state);
  };

  onInputSkill = (e) =>
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
      },
    });

  onSubmit = (e) => e.preventDefault();
  onSubmitToSkillsList = (e) => {
    e.preventDefault();
    if (this.state.main.topform.skills.length >= 12) return;
    this.setState({
      sidebar: this.state.sidebar,
      main: {
        topform: {
          skills: this.state.main.topform.skills.concat(
            this.state.main.topform.skill
          ),
          skill: {
            skillname: this.state.main.topform.skill.skillname,
            key: uniqid(),
          },
          summary: this.state.main.topform.summary,
        },
      },
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <div className="nav flex justify-between items-center px-20 bg-white">
          {this.state.mode == "editing" ? (
            <div className="navtext">
              <h1 className="font-bold text-3xl text-green-400">
                CV Generator
              </h1>
              <p className="my-1 text-l text-gray-400">Currently editing</p>
            </div>
          ) : (
            <div className="navtext">
              <h1 className="font-bold text-3xl text-gray-400">CV Generator</h1>
              <p className="my-1 text-l text-green-400">Currently editing</p>
            </div>
          )}
          <div className="modetoggle">
            <input type="checkbox" id="switch" onChange={this.switchMode} />
            <label htmlFor="switch" className="switchLabel">
              Toggle
            </label>
          </div>
        </div>
        <div className="main bg-green-400 flex">
          <div className="main--sidebar w-1/5 p-10 bg-white">
            <div className="sidebar--form--container">
              <form action="" className="sidebar--form">
                <div className="flex flex-col align-center mb-32">
                  <input
                    type="text"
                    value={this.state.sidebar.topRow.name}
                    onChange={this.onNameInputUpdate}
                    placeholder="Your name*"
                    className="user--name bg-gray-200 p-1 rounded-tl-full rounded-bl-full px-4 text-lg mb-5"
                    required
                    maxlength="20"
                  />
                  {this.state.sidebar.topRow.imgFile ? null : (
                    <input
                      type="file"
                      onChange={this.onImgUpload}
                      required
                      className="self-center"
                    />
                  )}
                  {this.state.sidebar.topRow.imgFile ? (
                    <img
                      src={this.state.sidebar.topRow.imgFile}
                      className="user--image mt-12 self-center"
                      required
                    />
                  ) : (
                    <img
                      src={this.state.sidebar.topRow.imgFile}
                      className="user--image mt-12 self-center"
                      required
                      style={{ visibility: "hidden" }}
                    />
                  )}
                </div>
                <div className="flex align-center flex-col">
                  <p className="formrow--title float-right">Contact</p>
                  <input
                    type="email"
                    required
                    className="user--email bg-gray-200 p-1 rounded-tl-full rounded-bl-full px-4 text-lg mb-5"
                    placeholder="your@email.com*"
                    minLength={7}
                    onInput={this.onEmailInput}
                  />
                  <input
                    type="tel"
                    required
                    className="user--number bg-gray-200 p-1 rounded-tl-full rounded-bl-full px-4 text-lg mb-5"
                    placeholder="0123 456 789*"
                    pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                    maxLength={10}
                    onInput={this.onPhoneNumberInput}
                  />
                  <input
                    type="url"
                    required
                    className="user--linkedin bg-gray-200 p-1 rounded-tl-full rounded-bl-full px-4 text-lg mb-5"
                    placeholder="Linkedin"
                    onInput={this.onLinkedinInput}
                  />
                  <input
                    type="url"
                    required
                    className="user--github user--contactinput bg-gray-200 p-1 rounded-tl-full rounded-bl-full px-4 text-lg mb-5"
                    placeholder="GitHub"
                    onInput={this.onGitHubInput}
                  />
                  <input
                    type="text"
                    required
                    className="user--address bg-gray-200 p-1 rounded-tl-full rounded-bl-full px-4 text-lg"
                    placeholder="Address"
                    onInput={this.onAddressInput}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="main--app flex">
            <div className="main--topform">
              <form action="" onSubmit={this.onSubmitToSkillsList}>
                <div className="">
                  <p className="formrow--title">Summary</p>
                  <textarea
                    rows="3"
                    cols="115"
                    required
                    className="user--summary resize-none"
                    placeholder="Tell us about yourself"
                    onInput={this.onSummaryInput}
                    maxLength="280"
                  />
                </div>
                <div className="form--bottomrow form--formrow">
                  <p className="formrow--title">Skills</p>
                  <input
                    type="text"
                    required
                    className="user--skills"
                    placeholder="Add a skill"
                    value={this.state.main.topform.skill.skillname}
                    onInput={this.onInputSkill}
                  />
                  <button type="submit">Add</button>
                  <div className="skillsform--userinput">
                    <ul className="userinput--list">
                      {this.state.main.topform.skills.map((skill) => (
                        <li className="userinput--skill">{skill.skillname}</li>
                      ))}
                    </ul>
                  </div>
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
