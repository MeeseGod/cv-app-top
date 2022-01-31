import React, {Component} from 'react';

class GeneralInfo extends Component{
    constructor() {
        super()
        this.state = {
            firstName : "",
            lastName: "",
            age : "",
        }
    }

    Form(){
        return <div>
            <h1>General Info</h1>
            <form>
                <label>
                    First Name:
                    <input type={"text"}></input>
                </label>
                <label>
                    Last Name: 
                    <input type={"text"}></input>
                </label>
                <label>
                    Age:
                    <input type={"text"}></input>
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

export default GeneralInfo