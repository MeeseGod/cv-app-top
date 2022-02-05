import React, {Component} from 'react';

class GeneralInfo extends Component{
    constructor() {
        super()
        this.state = {
            firstName : "",
            lastName: "",
            age : "",
            formVisible: false,
            
        }
        this.filledForm = this.filledForm.bind(this);
    }

    filledForm(){
        console.log("Ahhh")
    }

    Form(){
        return <div>
            <h1>About You</h1>
            <div>
                <form>
                    <label>Full Name:</label>
                    <input type={"text"} required></input>
                    <label>Address:</label>
                    <input type={"text"} required></input>
                    <label>Phone Number:</label>
                    <input type={"text"} required></input>
                    <label>Email:</label>
                    <input type="email" required></input>
                    <input type={"submit"} value={"Submit"}/>
                </form>
            </div>
        </div>
    }

    render(){
        return <div> 
            <this.Form />
        </div>
    }
}

export default GeneralInfo