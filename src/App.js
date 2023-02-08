import React, { Component } from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationalExpForm from "./components/EducationalExpForm";
import PracticalExpForm from "./components/PracticalExpForm";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>
          <GeneralInfoForm />
        </div>
        <div>
          <EducationalExpForm />
        </div>
        <div>
          <PracticalExpForm />
        </div>
      </div>
    );
  }
}

export default App;
