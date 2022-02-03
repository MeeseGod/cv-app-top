import React, {Component, useState} from 'react';

class EducationInfo extends Component{
    constructor(){
        super();
        this.state = {
            highSchool : "",
            collegeUniversity : "",
            additionalInfo: [],
            formVisible: false
        };
        this.handleFormVisibility = this.handleFormVisibility.bind(this);
        this.showForm = this.showForm.bind(this);
    }

    handleFormVisibility(){
        if(this.state.formVisible){
            this.setState({
                formVisible : false
            })
        }
        else{
            this.setState({
                formVisible : true
            })
        }
    }

    showForm(){
        if(this.state.formVisible){
        return <div className='formContainer'>
            <form>
                <label>School Name:</label>
                <input type={"text"}></input>
                <label>Title of Study:</label>
                <input type={"text"}></input>
                <label>Date Started:</label>
                <input type={"date"}></input>
                <label>Date Finished:</label>
                <input type={"date"}></input>
                <input type={"submit"} value={"Submit"}/>
            </form>
        </div>
        }
    }

    render(){
        let educationForm = this.showForm

        return <div>
            <h1>Education</h1>
            <button onClick={this.handleFormVisibility}>+</button>
            {educationForm()}
        </div>
    }
}

export default EducationInfo;