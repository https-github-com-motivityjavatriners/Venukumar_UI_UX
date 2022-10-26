import React from "react";
import "./stustyle.css";

class StudentList extends React.Component
{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render()
    {
        return<div className="maindiv">
          <h2 id="h2">Student Details </h2>
          <table>
            <thead>
                <tr><th className="th"> Name</th>
                <th className="th"> Id</th>
                <th className="th"> Age</th>
                <th className="th">Branch</th>
                <th className="th"> Address</th></tr>
            </thead>
            <tbody>
                {this.props.students.map((items)=>{
                    return <tr><td>{items.student_Name}</td><td>{items.student_Id}</td><td>{items.student_Age}</td><td>{items.student_Branch}</td><td>{items.student_Address}</td></tr>
                })}
            </tbody>
          </table>


        </div>
    }
}
export default StudentList 