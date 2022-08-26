import React, { Component } from "react";
import uniqid from "uniqid";
import "./App.css";
import Footer from "./Components/App/Footer/Footer";
import Main from "./Components/App/Main/Main";
import Nav from "./Components/App/Nav/Nav";
import Sidebar from "./Components/App/Sidebar/Sidebar";
import RApp from "./Components/RenderedApp/RApp";
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
          address: "",
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
        bottomform: {
          educationArr: [],
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
    this.switchMode = this.switchMode.bind(this);
  }

  // nav methods
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
          phoneNumber: e.target.value.replace(/\D/g, ""),
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
  onSkillInput = (e) => {
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
  };

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
            key: uniqid(),
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
            key: this.state.main.middleform.job.key,
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
            key: this.state.main.middleform.job.key,
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
            key: this.state.main.middleform.job.key,
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
            key: this.state.main.middleform.job.key,
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
            key: this.state.main.middleform.job.key,
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
            key: this.state.main.middleform.job.key,
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
            key: this.state.main.middleform.job.key,
          },
        },
        bottomform: this.state.main.bottomform,
      },
    });

  // bottom middle form methods
  onSchoolInput = (e) =>
    this.setState({
      mode: this.state.mode,
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
    if (this.state.main.topform.skill.skillname.length === 0) return;
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
              ongoing: false,
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

  printDocument = () => {
    let target = document.getElementById("rendered--cv");
    let printTargetContent = target.innerHTML;
    let originalContent = document.body.innerHTML;
    document.body.innerHTML = printTargetContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
  };

  // remove input methods
  removeLastSkillInput = () => {
    this.setState({
      sidebar: this.state.sidebar,
      main: {
        topform: {
          skills: this.state.main.topform.skills.splice(-1),
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
    this.setState({
      sidebar: this.state.sidebar,
      main: {
        topform: {
          skills: this.state.main.topform.skills,
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
    console.log(this.state);
  };
  removeLastJobInput = (e) => {
    e.preventDefault();
    this.setState({
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: {
          jobs: this.state.main.middleform.jobs.splice(-1),
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
    this.setState({
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: {
          jobs: this.state.main.middleform.jobs,
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
  removeLastEducationInput = (e) => {
    e.preventDefault();
    this.setState({
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: this.state.main.middleform,

        bottomform: {
          educationArr: this.state.main.bottomform.educationArr.splice(-1),
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
    this.setState({
      sidebar: this.state.sidebar,
      main: {
        topform: this.state.main.topform,
        middleform: this.state.main.middleform,

        bottomform: {
          educationArr: this.state.main.bottomform.educationArr,
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

  render() {
    return (
      <div className="App relative">
        {this.state.mode === "previewing" ? (
          <RApp sidebar={this.state.sidebar} main={this.state.main} />
        ) : null}

        <Nav mode={this.state.mode} switchMode={this.switchMode} />
        <div className="main w-full bg-blue-400 flex">
          <Sidebar
            {...this.state.sidebar}
            onNameInputUpdate={this.onNameInputUpdate}
            onImgUpload={this.onImgUpload}
            onEmailInput={this.onEmailInput}
            onPhoneNumberInput={this.onPhoneNumberInput}
            onLinkedinInput={this.onLinkedinInput}
            onGitHubInput={this.onGitHubInput}
            onAddressInput={this.onAddressInput}
            mode={this.state.mode}
          />
          <Main
            {...this.state.main}
            mode={this.state.mode}
            onSubmitToSkillsList={this.onSubmitToSkillsList}
            onSummaryInput={this.onSummaryInput}
            onSkillInput={this.onSkillInput}
            onSubmitToJobsList={this.onSubmitToJobsList}
            onTitleInput={this.onTitleInput}
            onCompanyInput={this.onCompanyInput}
            onStartMonthInput={this.onStartMonthInput}
            onStartYearInput={this.onStartYearInput}
            onJobOngoingCheckboxInput={this.onJobOngoingCheckboxInput}
            onEndMonthInput={this.onEndMonthInput}
            onEndYearInput={this.onEndYearInput}
            onCompanyDescriptionInput={this.onCompanyDescriptionInput}
            onSubmitToEducationList={this.onSubmitToEducationList}
            onSchoolInput={this.onSchoolInput}
            onDegreeInput={this.onDegreeInput}
            onFieldInput={this.onFieldInput}
            onStartEducationMonthInput={this.onStartEducationMonthInput}
            onStartEducationYearInput={this.onStartEducationYearInput}
            onEndEducationMonthInput={this.onEndEducationMonthInput}
            onEndEducationYearInput={this.onEndEducationYearInput}
            onEducationDescriptionInput={this.onEducationDescriptionInput}
            removeLastSkill={this.removeLastSkillInput}
            removeLastEducationInput={this.removeLastEducationInput}
            removeLastJobInput={this.removeLastJobInput}
          />
        </div>
        <Footer generatePDFFunc={this.printDocument} mode={this.state.mode} />
      </div>
    );
  }
}

export default App;
