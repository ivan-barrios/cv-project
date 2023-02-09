import React, { Component } from "react";
import Form from "./components/Form";
import DisplayInfo from "./components/DisplayInfo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      general: {
        name: "Ivancito",
        email: "ivancito@gmail.com",
        phoneNum: "2213069733",
      },
      educational: {
        schoolName: "Unlp",
        titleOfStudy: "Comp ing",
        dateOfStudy: "2025",
      },
      practical: {
        companyName: "Google",
        positionTitle: "Project Developer",
        mainTasks: "All",
        dateStartEnd: "Today",
      },
    };

    this.handleGeneralSubmit = (e) => {
      e.preventDefault();
      this.setState({
        general: {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          phoneNum: document.getElementById("phoneNum").value,
        },
      });
    };

    this.handleEducationalSubmit = (e) => {
      e.preventDefault();
      this.setState({
        educational: {
          schoolName: document.getElementById("schoolName").value,
          titleOfStudy: document.getElementById("titleOfStudy").value,
          dateOfStudy: document.getElementById("dateOfStudy").value,
        },
      });
    };

    this.handlePracticalSubmit = (e) => {
      e.preventDefault();
      this.setState({
        practical: {
          companyName: document.getElementById("companyName").value,
          positionTitle: document.getElementById("positionTitle").value,
          mainTasks: document.getElementById("mainTasks").value,
          dateStartEnd: document.getElementById("startEnd").value,
        },
      });
    };
  }

  render() {
    console.log("rendered");
    return (
      <div>
        <Form
          values={this.state}
          onSubmitGeneral={this.handleGeneralSubmit}
          onSubmitEducational={this.handleEducationalSubmit}
          onSubmitPractical={this.handlePracticalSubmit}
        />
        <DisplayInfo values={this.state} />
      </div>
    );
  }
}

export default App;
