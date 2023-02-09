import React, { Component } from "react";
import Form from "./components/Form";
import DisplayInfo from "./components/DisplayInfo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      general: {
        name: "I",
        email: "a",
        phoneNum: "",
      },
      educational: {
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: "",
      },
      practical: {
        companyName: "",
        positionTitle: "",
        mainTasks: "",
        dateStartEnd: "",
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
      console.log(this.state.general);
    };
  }

  render() {
    console.log("rendered");
    return (
      <div>
        <Form values={this.state} onSubmitGeneral={this.handleGeneralSubmit} />
        <DisplayInfo values={this.state} />
      </div>
    );
  }
}

export default App;
