import React, {Component} from 'react'

class WorkInfo extends Component{
    constructor(){
        super()
        this.state = {
            currentOccupation : "",
            pastOccupations : [],
            formVisible: false
        }
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
            return <div className='inputInformationForm'>
            <form>
                <label>Employer:</label>
                <input type={"text"}></input>
                <label>Job Title</label>
                <input type={"text"}></input>
                <label>First Day of Employment:</label>
                <input type={"date"}/>
                <label>Last Day of Employment:</label>
                <input type={"date"}/>
                <input type={"submit"} value={"Submit"}/>
            </form>
        </div>
        }
    }

    render(){
        let workForm = this.showForm;
        return <div>
            <h1>Work Experience</h1>
            <button onClick={this.handleFormVisibility}>+</button>
            {workForm()}
        </div>
    }
}

export default WorkInfo;