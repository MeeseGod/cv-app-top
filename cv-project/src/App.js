import React, {Component} from 'react';
import WorkInfo from './components/WorkInfo';
import EducationInfo from './components/EducationInfo';
import GeneralInfo from './components/GeneralInfo';
import CV from './components/CV';
import "./styles/App.css"

class App extends Component {
  constructor() {
    super()
  }

  render(){
    return <div id='mainContainer'>
      <div id='infoForm'>
        <GeneralInfo />
        <WorkInfo />
        <EducationInfo />
      </div>
      <div>
        <CV />
      </div>
    </div>
  }
}

export default App;
