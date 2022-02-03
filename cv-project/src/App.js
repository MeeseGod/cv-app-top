import React, {Component} from 'react';
import WorkInfo from './components/WorkInfo';
import EducationInfo from './components/EducationInfo';
import GeneralInfo from './components/GeneralInfo';
import "./styles/App.css"

class App extends Component {
  constructor() {
    super()

    this.state = {
      educationDisplay : false
    }
  }

  render(){
    return <div id='mainContainer'>
      <div id='infoForm'>
        <GeneralInfo />
        <WorkInfo />
        <EducationInfo />
      </div>
      <div id='submittedInfo'>
        <h1>Your CV</h1>
      </div>
    </div>
  }
}

export default App;
