import React from "react";

class Employee extends React.Component{
    constructor(){
        super();

      this.state={
            name:"venu",
            companyName:"MotivityLabs"
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.companyName}</h1>
            </div>
        )
    }
}
export default Employee;