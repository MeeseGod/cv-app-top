import React, {Component} from 'react';
import WorkInfo from './components/WorkInfo';
import EducationInfo from './components/EducationInfo';
import GeneralInfo from './components/GeneralInfo';

class App extends Component {
  constructor() {
    super()
  }

  render(){
    return <div>
    <h1>Hello!</h1>
    <WorkInfo />
    <EducationInfo />
    <GeneralInfo />
    </div>
  }
}

export default App;
