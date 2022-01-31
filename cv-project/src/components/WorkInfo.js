import React, {Component} from 'react'

class WorkInfo extends Component{
    constructor(){
        super()
        this.state = {
            currentOccupation : "",
            pastOccupations : []
        }
    }

    Form(){
        return <div>
            <h1>Work Info</h1>
            <form>
                <label>
                    Current Occupation:
                    <input type={"text"}></input>
                </label>
                <label>
                    Past Occupation(s):
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

export default WorkInfo;