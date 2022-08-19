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
          jobs: [
            {
              title: "Sales Manager",
              company: "My.Co",
              startdate: {
                month: "May",
                year: "2020",
              },
              enddate: {
                ongoing: true,
                month: "",
                year: "",
              },
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, error! Voluptatem culpa est illo aut accusamus vitae iusto. Modi tenetur, temporibus officiis itaque ratione minus omnis tempore id illo deserunt adipisci nulla debitis necessitatibus maiores deleniti error non ipsa dolorum aperiam nemo animi ab corrupti. Perspiciatis dicta tempora voluptate id veritatis doloribus ab pariatur illum. Rerum, doloremque in porro pariatur aspernatur unde vero, eum laboriosam non ducimus aut eius dolorum voluptates culpa vel? Sit aliquam, ipsam eum aperiam sint commodi!`,
              key: uniqid(),
            },
          ],
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
        bottomform: {
          educationArr: [
            {
              school: "University of Bucharest",
              degree: "Bachelors",
              field: "Chemistry",
              startdate: {
                month: "September",
                year: "2017",
              },
              enddate: {
                month: "July",
                year: "2020",
              },
              description:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, error! Voluptatem culpa est illo aut accusamus vitae iusto. Modi tenetur, temporibus officiis itaque ratione minus omnis tempore id illo deserunt adipisci nulla debitis necessitatibus maiores deleniti error non ipsa dolorum aperiam nemo animi ab corrupti. Perspiciatis dicta tempora voluptate id veritatis doloribus ab pariatur illum. Rerum, doloremque in porro pariatur aspernatur unde vero, eum laboriosam non ducimus aut eius dolorum voluptates culpa vel? Sit aliquam, ipsam eum aperiam sint commodi! ",
              key: uniqid(),
            },
          ],
          education: {
            school: "",
            degree: "",
            field: "",
            startdate: {
              month: "",
              year: "",
            },
            enddate: {
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
    this.onStartMonthInput = this.onStartMonthInput.bind(this);
    this.onStartYearInput = this.onStartYearInput.bind(this);
    this.onJobOngoingCheckboxInput = this.onJobOngoingCheckboxInput.bind(this);
    this.onEndMonthInput = this.onEndMonthInput.bind(this);
    this.onEndYearInput = this.onEndYearInput.bind(this);
    this.onCompanyDescriptionInput = this.onCompanyDescriptionInput.bind(this);
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
          phoneNumber: this.state.sidebar.bottomRow.phoneNumber,
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
        bottomform: this.state.main.bottomform,
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
        bottomform: this.state.main.bottomform,
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
            startdate: this.state.main.middleform.job.startdate,
            enddate: this.state.main.middleform.job.enddate,
            description: this.state.main.middleform.job.description,
          },
        },
        bottomform: this.state.main.bottomform,
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
            startdate: this.state.main.middleform.job.startdate,
            enddate: this.state.main.middleform.job.enddate,
            description: this.state.main.middleform.job.description,
          },
        },
        bottomform: this.state.main.bottomform,
      },
    });
  onStartMonthInput = (e) =>
    this.setState({
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: {
          jobs: this.state.main.middleform.jobs || [],
          job: {
            title: this.state.main.middleform.job.title,
            company: this.state.main.middleform.job.company,
            startdate: {
              month: e.target.value,
              year: this.state.main.middleform.job.startdate.year,
            },
            enddate: this.state.main.middleform.job.enddate,
            description: this.state.main.middleform.job.description,
          },
        },
        bottomform: this.state.main.bottomform,
      },
    });
  onStartYearInput = (e) =>
    this.setState({
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: {
          jobs: this.state.main.middleform.jobs || [],
          job: {
            title: this.state.main.middleform.job.title,
            company: this.state.main.middleform.job.company,
            startdate: {
              month: this.state.main.middleform.job.startdate.month,
              year: e.target.value,
            },
            enddate: this.state.main.middleform.job.enddate,
            description: this.state.main.middleform.job.description,
          },
        },
        bottomform: this.state.main.bottomform,
      },
    });
  onJobOngoingCheckboxInput = (e) =>
    this.setState({
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: {
          jobs: this.state.main.middleform.jobs || [],
          job: {
            title: this.state.main.middleform.job.title,
            company: this.state.main.middleform.job.company,
            startdate: {
              month: this.state.main.middleform.job.startdate.month,
              year: this.state.main.middleform.job.startdate.year,
            },
            enddate: {
              ongoing: e.target.checked,
              month: this.state.main.middleform.job.enddate.month,
              year: this.state.main.middleform.job.enddate.year,
            },
            description: this.state.main.middleform.job.description,
          },
        },
        bottomform: this.state.main.bottomform,
      },
    });
  onEndMonthInput = (e) =>
    this.setState({
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: {
          jobs: this.state.main.middleform.jobs || [],
          job: {
            title: this.state.main.middleform.job.title,
            company: this.state.main.middleform.job.company,
            startdate: this.state.main.middleform.job.startdate,
            enddate: {
              ongoing: this.state.main.middleform.job.enddate.ongoing,
              month: e.target.value,
              year: this.state.main.middleform.job.enddate.year,
            },
            description: this.state.main.middleform.job.description,
          },
        },
        bottomform: this.state.main.bottomform,
      },
    });
  onEndYearInput = (e) =>
    this.setState({
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: {
          jobs: this.state.main.middleform.jobs || [],
          job: {
            title: this.state.main.middleform.job.title,
            company: this.state.main.middleform.job.company,
            startdate: this.state.main.middleform.job.startdate,
            enddate: {
              ongoing: this.state.main.middleform.job.enddate.ongoing,

              month: this.state.main.middleform.job.enddate.month,
              year: e.target.value,
            },
            description: this.state.main.middleform.job.description,
          },
        },
        bottomform: this.state.main.bottomform,
      },
    });
  onCompanyDescriptionInput = (e) =>
    this.setState({
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: {
          jobs: this.state.main.middleform.jobs || [],
          job: {
            title: this.state.main.middleform.job.title,
            company: this.state.main.middleform.job.company,
            startdate: this.state.main.middleform.job.startdate,
            enddate: {
              ongoing: this.state.main.middleform.job.enddate.ongoing,

              month: this.state.main.middleform.job.enddate.month,
              year: this.state.main.middleform.job.enddate.year,
            },
            description: e.target.value,
          },
        },
        bottomform: this.state.main.bottomform,
      },
    });

  // bottom middle form methods
  onSchoolInput = (e) =>
    this.setState({
      mode: this.state.mode,
      file: this.state.file,
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: this.state.main.middleform,
        bottomform: {
          educationArr: this.state.main.bottomform.educationArr,
          education: {
            school: e.target.value,
            degree: this.state.main.bottomform.education.degree,
            field: this.state.main.bottomform.education.field,
            startdate: this.state.main.bottomform.education.startdate,
            enddate: this.state.main.bottomform.education.enddate,
            description: this.state.main.bottomform.education.description,
            key: this.state.main.bottomform.education.key,
          },
        },
      },
    });
  onDegreeInput = (e) =>
    this.setState({
      mode: this.state.mode,
      file: this.state.file,
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: this.state.main.middleform,
        bottomform: {
          educationArr: this.state.main.bottomform.educationArr,
          education: {
            school: this.state.main.bottomform.education.school,
            degree: e.target.value,
            field: this.state.main.bottomform.education.field,
            startdate: this.state.main.bottomform.education.startdate,
            enddate: this.state.main.bottomform.education.enddate,
            description: this.state.main.bottomform.education.description,
            key: this.state.main.bottomform.education.key,
          },
        },
      },
    });
  onFieldInput = (e) =>
    this.setState({
      mode: this.state.mode,
      file: this.state.file,
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: this.state.main.middleform,
        bottomform: {
          educationArr: this.state.main.bottomform.educationArr,
          education: {
            school: this.state.main.bottomform.education.school,
            degree: this.state.main.bottomform.education.degree,
            field: e.target.value,
            startdate: this.state.main.bottomform.education.startdate,
            enddate: this.state.main.bottomform.education.enddate,
            description: this.state.main.bottomform.education.description,
            key: this.state.main.bottomform.education.key,
          },
        },
      },
    });
  onStartEducationMonthInput = (e) =>
    this.setState({
      mode: this.state.mode,
      file: this.state.file,
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: this.state.main.middleform,
        bottomform: {
          educationArr: this.state.main.bottomform.educationArr,
          education: {
            school: this.state.main.bottomform.education.school,
            degree: this.state.main.bottomform.education.degree,
            field: this.state.main.bottomform.education.field,
            startdate: {
              month: e.target.value,
              year: this.state.main.bottomform.education.startdate.year,
            },
            enddate: this.state.main.bottomform.education.enddate,
            description: this.state.main.bottomform.education.description,
            key: this.state.main.bottomform.education.key,
          },
        },
      },
    });
  onStartEducationYearInput = (e) =>
    this.setState({
      mode: this.state.mode,
      file: this.state.file,
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: this.state.main.middleform,
        bottomform: {
          educationArr: this.state.main.bottomform.educationArr,
          education: {
            school: this.state.main.bottomform.education.school,
            degree: this.state.main.bottomform.education.degree,
            field: this.state.main.bottomform.education.field,
            startdate: {
              month: this.state.main.bottomform.education.startdate.month,
              year: e.target.value,
            },
            enddate: this.state.main.bottomform.education.enddate,
            description: this.state.main.bottomform.education.description,
            key: this.state.main.bottomform.education.key,
          },
        },
      },
    });
  onEndEducationMonthInput = (e) =>
    this.setState({
      mode: this.state.mode,
      file: this.state.file,
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: this.state.main.middleform,
        bottomform: {
          educationArr: this.state.main.bottomform.educationArr,
          education: {
            school: this.state.main.bottomform.education.school,
            degree: this.state.main.bottomform.education.degree,
            field: this.state.main.bottomform.education.field,
            startdate: this.state.main.bottomform.education.startdate,
            enddate: {
              month: e.target.value,
              year: this.state.main.bottomform.education.enddate.year,
            },
            description: this.state.main.bottomform.education.description,
            key: this.state.main.bottomform.education.key,
          },
        },
      },
    });
  onEndEducationYearInput = (e) =>
    this.setState({
      mode: this.state.mode,
      file: this.state.file,
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: this.state.main.middleform,
        bottomform: {
          educationArr: this.state.main.bottomform.educationArr,
          education: {
            school: this.state.main.bottomform.education.school,
            degree: this.state.main.bottomform.education.degree,
            field: this.state.main.bottomform.education.field,
            startdate: this.state.main.bottomform.education.startdate,
            enddate: {
              month: this.state.main.bottomform.education.enddate.month,
              year: e.target.value,
            },
            description: this.state.main.bottomform.education.description,
            key: this.state.main.bottomform.education.key,
          },
        },
      },
    });
  onEducationDescriptionInput = (e) =>
    this.setState({
      mode: this.state.mode,
      file: this.state.file,
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: this.state.main.middleform,
        bottomform: {
          educationArr: this.state.main.bottomform.educationArr,
          education: {
            school: this.state.main.bottomform.education.school,
            degree: this.state.main.bottomform.education.degree,
            field: this.state.main.bottomform.education.field,
            startdate: this.state.main.bottomform.education.startdate,
            enddate: this.state.main.bottomform.education.enddate,
            description: e.target.value,
            key: this.state.main.bottomform.education.key,
          },
        },
      },
    });

  // submit methods

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
        bottomform: this.state.main.bottomform,
      },
    });
  };
  onSubmitToEducationList = (e) => {
    e.preventDefault();
    this.setState({
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: this.state.main.middleform,

        bottomform: {
          educationArr: this.state.main.bottomform.educationArr.concat(
            this.state.main.bottomform.education
          ),
          education: {
            school: "",
            degree: "",
            field: "",
            startdate: {
              month: "",
              year: "",
            },
            enddate: {
              month: "",
              year: "",
            },
            description: "",
            key: uniqid(),
          },
        },
      },
    });
  };
  onSubmitToJobsList = (e) => {
    e.preventDefault();
    this.setState({
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: {
          jobs: this.state.main.middleform.jobs.concat(
            this.state.main.middleform.job
          ),
          job: {
            title: "",
            company: "",
            startdate: {
              month: "",
              year: "",
            },
            enddate: {
              ongoing: true,
              month: "",
              year: "",
            },
            description: "",
            key: uniqid(),
          },
        },
        bottomform: this.state.main.bottomform,
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
                    className="user--github user--contactinput bg-gray-100 p-1 rounded-lg px-4 text-lg mb-5"
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
            <div className="main--topform w-11/12 mt-12 mr-auto ml-auto bg-green-300 p-4 rounded-lg">
              <form action="" onSubmit={this.onSubmitToSkillsList}>
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
                    className="user--summary resize-none bg-white p-1 rounded-lg px-4 text-lg mb-5 mx-4"
                    onInput={this.onSummaryInput}
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
                  <div className="skillsform--userinput flex min-h-fit mb-5 mx-4 mt-5 rounded-lg bg-white p-12">
                    <ul className="userinput--list grid pr-3 mx-4">
                      {this.state.main.topform.skills.map((skill) => (
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
              <form action="" onSubmit={this.onSubmitToJobsList}>
                <div className="form--formrow flex flex-col flex-start bg-green-300 p-4 rounded-lg">
                  <p className="formrow--title bordbot--none mb-2 text-2xl text-white">
                    Work experience
                  </p>
                  <div className="form--workexperience">
                    <div className="workexperience--row flex flex-col mx-4 mb-4">
                      <label
                        htmlFor="job--title"
                        className="text-white text-lg"
                      >
                        Title*
                      </label>
                      <input
                        type="text"
                        required
                        className="w-3/12 bg-white p-1 rounded-lg px-4 text-lg mb-2 mt-2"
                        placeholder="Ex: Sales Manager"
                        onChange={this.onTitleInput}
                        value={this.state.main.middleform.job.title}
                      />
                    </div>
                    <div className="workexperience--row flex flex-col mx-4 mb-4">
                      <label
                        htmlFor="job--company"
                        className="text-white text-lg"
                      >
                        Company*
                      </label>
                      <input
                        type="text"
                        required
                        className="w-3/12 bg-white p-1 rounded-lg px-4 text-lg mb-2 mt-2"
                        placeholder="Ex: Google"
                        onChange={this.onCompanyInput}
                        value={this.state.main.middleform.job.company}
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
                          className="bg-white p-1 rounded-lg px-2 text-lg mr-4"
                          onChange={this.onStartMonthInput}
                          value={this.state.main.middleform.job.startdate.month}
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
                          onChange={this.onStartYearInput}
                          required
                          value={this.state.main.middleform.job.startdate.year}
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
                          className="bg-white rounded-lg p-2 text-lg mr-2"
                          onChange={this.onJobOngoingCheckboxInput}
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
                      <div className="enddate--container flex mt-2">
                        <select
                          disabled={
                            this.state.main.middleform.job.enddate.ongoing
                          }
                          name="job--enddate"
                          id="job--enddate"
                          className="bg-white p-1 rounded-lg px-2 text-lg mr-4"
                          onChange={this.onEndMonthInput}
                          value={this.state.main.middleform.job.enddate.month}
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
                          disabled={
                            this.state.main.middleform.job.enddate.ongoing
                          }
                          name="job--endyear"
                          id="job--endyear"
                          className="bg-white p-1 rounded-lg px-2 text-lg mr-4"
                          required
                          onChange={this.onEndYearInput}
                          value={this.state.main.middleform.job.enddate.year}
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
                        className="job--description resize-none bg-white  rounded-lg px-4 text-lg mb-5 mt-2"
                        maxLength="280"
                        minLength="80"
                        onChange={this.onCompanyDescriptionInput}
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-white text-green-300 py-1 px-4 ml-4 text-lg rounded-lg mb-4"
                      on
                    >
                      Add
                    </button>
                  </div>
                  <div className="jobform--userinput flex  flex-col mb-5 mx-4 mt-5 rounded-lg bg-white pt-12 px-12 ">
                    {this.state.main.middleform.jobs.map((job) => (
                      <div
                        className="job--container bg-gray-100 p-4 rounded-lg mb-12"
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
              <form action="" onSubmit={this.onSubmitToEducationList}>
                <div className="form--formrow flex flex-col flex-start bg-green-300 p-4 rounded-lg">
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
                        className="w-3/12 bg-white p-1 rounded-lg px-4 text-lg mb-2 mt-2"
                        placeholder="Ex: Bucharest Univeristy"
                        onChange={this.onSchoolInput}
                        value={this.state.main.bottomform.education.school}
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
                        className="w-3/12 bg-white p-1 rounded-lg px-4 text-lg mb-2 mt-2"
                        placeholder="Ex: Bachelors"
                        onChange={this.onDegreeInput}
                        value={this.state.main.bottomform.education.degree}
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
                        className="w-3/12 bg-white p-1 rounded-lg px-4 text-lg mb-2 mt-2"
                        placeholder="Ex: Chemistry"
                        onChange={this.onFieldInput}
                        value={this.state.main.bottomform.education.field}
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
                          className="bg-white p-1 rounded-lg px-2 text-lg mr-4"
                          onChange={this.onStartEducationMonthInput}
                          value={
                            this.state.main.bottomform.education.startdate.month
                          }
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
                          className="bg-white p-1 rounded-lg px-2 text-lg mr-4"
                          required
                          onChange={this.onStartEducationYearInput}
                          value={
                            this.state.main.bottomform.education.startdate.year
                          }
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
                          className="bg-white p-1 rounded-lg px-2 text-lg mr-4"
                          onChange={this.onEndEducationMonthInput}
                          value={
                            this.state.main.bottomform.education.enddate.month
                          }
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
                          className="bg-white p-1 rounded-lg px-2 text-lg mr-4"
                          required
                          onChange={this.onEndEducationYearInput}
                          value={
                            this.state.main.bottomform.education.enddate.year
                          }
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
                        className="education--description resize-none bg-white  rounded-lg px-4 text-lg mb-5 mt-2"
                        maxLength="280"
                        minLength="80"
                        onChange={this.onEducationDescriptionInput}
                        value={this.state.main.bottomform.education.description}
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-white text-green-300 py-1 px-4 ml-4 text-lg rounded-lg mb-4"
                      on
                    >
                      Add
                    </button>
                  </div>
                  <div className="education--userinput flex  flex-col mb-5 mx-4 mt-5 rounded-lg bg-white pt-12 px-12 ">
                    {this.state.main.bottomform.educationArr.map(
                      (education) => (
                        <div
                          className="education--container bg-gray-100 p-4 rounded-lg mb-12"
                          key={education.key}
                        >
                          <h3 className="education--school font-medium  px-4 text-2xl my-2">
                            {education.school}
                          </h3>
                          <p className="education--degreeandfield px-4 text-lg my-1 font-medium">
                            {education.degree} in {education.field}
                          </p>
                          <p className="education--startenddates px-4 text-gray-400">
                            {education.startdate.month}{" "}
                            {education.startdate.year} -{" "}
                            {education.enddate.month} {education.enddate.year}
                          </p>
                          {education.description ? (
                            <p className="education--description px-4 mt-1">
                              {education.description}
                            </p>
                          ) : null}
                        </div>
                      )
                    )}
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
