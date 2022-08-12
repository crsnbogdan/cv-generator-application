import React, { Component } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import "./Components/Nav/Nav.css";
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
      file: null,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onImgUpload = this.onImgUpload.bind(this);
    this.onEmailInput = this.onEmailInput.bind(this);
    this.onPhoneNumberInput = this.onPhoneNumberInput.bind(this);
    this.onLinkedinInput = this.onLinkedinInput.bind(this);
    this.onGitHubInput = this.onGitHubInput.bind(this);
  }

  switchMode = (e) =>
    e.target.checked
      ? this.setState({ mode: "previewing" })
      : this.setState({ mode: "editing" });
  onNameInputUpdate = (e) =>
    this.setState({
      sidebar: {
        topRow: {
          name: e.target.value,
          imgFile: this.state.sidebar.topRow.imgFile,
        },
        bottomRow: this.state.sidebar.bottomRow,
      },
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
    });

  // sidebar contact section functions here
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
    });
  onAddressInput = (e) => {
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
    });
    console.log(this.state);
  };
  onSubmit = (e) => e.preventDefault();

  render() {
    return (
      <div className="App">
        <div className="nav">
          <Nav mode={this.state.mode} />
          <div className="modetoggle">
            <input type="checkbox" id="switch" onChange={this.switchMode} />
            <label htmlFor="switch" className="switchLabel">
              Toggle
            </label>
          </div>
        </div>
        <div className="main">
          <div className="main--sidebar">
            <div className="sidebar--form--container">
              <form action="" className="sidebar--form">
                <div className="formrow--container">
                  <input
                    type="text"
                    value={this.state.sidebar.topRow.name}
                    onChange={this.onNameInputUpdate}
                    placeholder="Your name*"
                    className="user--name"
                    required
                    minLength={7}
                  />
                  {this.state.sidebar.topRow.imgFile ? null : (
                    <input type="file" onChange={this.onImgUpload} required />
                  )}
                  {this.state.sidebar.topRow.imgFile ? (
                    <img
                      src={this.state.sidebar.topRow.imgFile}
                      className="user--image"
                      required
                    />
                  ) : (
                    <img
                      src={this.state.sidebar.topRow.imgFile}
                      className="user--image"
                      required
                      style={{ visibility: "hidden" }}
                    />
                  )}
                </div>
                <div className="formrow--container">
                  <p className="formrow--title">Contact</p>
                  <input
                    type="email"
                    required
                    className="user--email user--contactinput"
                    placeholder="your@email.com*"
                    minLength={7}
                    onInput={this.onEmailInput}
                  />
                  <input
                    type="tel"
                    required
                    className="user--number user--contactinput"
                    placeholder="0123 456 789*"
                    pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                    maxLength={10}
                    onInput={this.onPhoneNumberInput}
                  />
                  <input
                    type="url"
                    required
                    className="user--linkedin user--contactinput"
                    placeholder="Linkedin"
                    onInput={this.onLinkedinInput}
                  />
                  <input
                    type="url"
                    required
                    className="user--github user--contactinput"
                    placeholder="GitHub"
                    onInput={this.onGitHubInput}
                  />
                  <input
                    type="text"
                    required
                    className="user--address user--contactinput"
                    placeholder="Address"
                    onInput={this.onAddressInput}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="main-app"></div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
