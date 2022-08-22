import React, { Component } from "react";
class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main--sidebar w-1/5 p-10 bg-white">
        <div className="sidebar--form--container">
          <form action="" className="sidebar--form">
            <div className="flex flex-col align-center mb-5 justify-center">
              <input
                type="text"
                value={this.props.topRow.name}
                onChange={this.props.onNameInputUpdate}
                placeholder="Your name*"
                className="user--name bg-gray-100 p-1 rounded-lg px-4 text-lg mb-5"
                required
                maxLength="20"
              />
              {this.props.topRow.imgFile ? null : (
                <div className="flex align-center justify-center">
                  <input
                    type="file"
                    name="uploadfile"
                    id="img"
                    onChange={this.props.onImgUpload}
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
              {this.props.topRow.imgFile ? (
                <div
                  style={{
                    backgroundImage: `url(${this.props.topRow.imgFile})`,
                  }}
                  className="user--imagecontainer h-48 w-48 mt-5 py-1 px-4 self-center bg-center rounded-full"
                  required
                />
              ) : (
                <div
                  input={this.props.topRow.imgFile}
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
                onChange={this.props.onEmailInput}
              />
              <input
                type="tel"
                required
                className="user--number bg-gray-100 p-1 rounded-lg px-4 text-lg mb-5"
                placeholder="0123 456 789*"
                pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                maxLength={10}
                onChange={this.props.onPhoneNumberInput}
              />
              <input
                type="url"
                required
                className="user--linkedin bg-gray-100 p-1 rounded-lg px-4 text-lg mb-5"
                placeholder="Linkedin"
                onChange={this.props.onLinkedinInput}
              />
              <input
                type="url"
                required
                className="user--github user--contactinput bg-gray-100 p-1 rounded-lg px-4 text-lg mb-5"
                placeholder="GitHub"
                onChange={this.props.onGitHubInput}
              />
              <input
                type="text"
                required
                className="user--address bg-gray-100 p-1 rounded-lg px-4 text-lg"
                placeholder="Address"
                onChange={this.props.onAddressInput}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Sidebar;
