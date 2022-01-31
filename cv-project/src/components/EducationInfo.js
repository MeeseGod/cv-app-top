import React, {Component} from 'react';

class EducationInfo extends Component{
    constructor(){
        super()
        this.state = {
            highSchool : "",
            collegeUniversity : "",
            additionalInfo: []
        }
    }

    Form(){
        return <div>
            <h2>Education Info</h2>
            <form>
                <label>
                    Highschool:
                    <input type={"text"} name='highSchool'></input>
                </label>
                <label>
                    College/Universty:
                    <input type={"text"} name='collegeUniversity'></input>
                </label>
            </form>
        </div>
    }

    render(){
        return <div> 
            <this.Form />
        </div>
    }
}

export default EducationInfo;