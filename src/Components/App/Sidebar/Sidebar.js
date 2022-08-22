import React, { Component } from "react";
class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main--sidebar w-1/5 p-10 bg-purple-600 relative">
        <div className="sidebar--form--container sticky top-10">
          <form action="" className="sidebar--form">
            <div className="flex flex-col align-center mb-5 justify-center">
              <input
                type="text"
                value={this.props.topRow.name}
                onInput={this.props.onNameInputUpdate}
                placeholder="Your name*"
                className="user--name   p-1   px-4 text-lg mb-5"
                required
                maxLength="20"
              />
              {this.props.topRow.imgFile ? null : (
                <div className="flex align-center justify-center">
                  <input
                    type="file"
                    name="uploadfile"
                    id="img"
                    onInput={this.props.onImgUpload}
                    style={{ display: "none" }}
                    accept=".jpg,.jpeg"
                  />
                  <label
                    htmlFor="img"
                    className="bg-white text-purple-600 px-6 py-3 text-lg w-full hover:cursor-pointer"
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
              <p className=" text-white text-xl mb-5">Contact details</p>
              <input
                type="email"
                required
                className="user--email   p-1   px-4 text-lg mb-5"
                placeholder="your@email.com*"
                minLength={7}
                onInput={this.props.onEmailInput}
              />
              <input
                type="tel"
                required
                className="user--number   p-1   px-4 text-lg mb-5"
                placeholder="0123 456 789*"
                pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                maxLength={10}
                onInput={this.props.onPhoneNumberInput}
              />
              <input
                type="url"
                required
                className="user--linkedin   p-1   px-4 text-lg mb-5"
                placeholder="Linkedin"
                onInput={this.props.onLinkedinInput}
              />
              <input
                type="url"
                required
                className="user--github user--contactinput   p-1   px-4 text-lg mb-5"
                placeholder="GitHub"
                onInput={this.props.onGitHubInput}
              />
              <input
                type="text"
                required
                className="user--address   p-1   px-4 text-lg"
                placeholder="Address"
                onInput={this.props.onAddressInput}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Sidebar;
