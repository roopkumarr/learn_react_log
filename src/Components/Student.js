import React, { Component } from "react";

class Student extends Component{
    constructor(){
        super();
        console.log("Student Class construtor called");
    }
    render(){
        return(
            <div>Hello Students</div>
        )
    }
}
export default Student;