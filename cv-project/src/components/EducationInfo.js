import React, {Component} from 'react';

class EducationInfo extends Component{
    constructor(){
        super();
        this.state = {
            schoolName : "Bing",
            titleOfStudy : "",
            dateStarted: "",
            dateFinished: "",
            holdingObject: {},
            completedInputs : []
        };
        this.handleFormVisibility = this.handleFormVisibility.bind(this);
        this.showForm = this.showForm.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event){
        let eventTarget = event.target.className
        this.setState({
            [eventTarget] : event.target.value
        })
        console.log(this.state);
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
                <input type={"text"} className='schoolName' onChange={this.changeHandler}></input>
                <label>Title of Study:</label>
                <input type={"text"} className='titleOfStudy' onChange={this.changeHandler}></input>
                <label>Date Started:</label>
                <input type={"date"} className='dateStarted' onChange={this.changeHandler}></input>
                <label>Date Finished:</label>
                <input type={"date"} className='dateFinished' onChange={this.changeHandler}></input>
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