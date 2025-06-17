import React, { Component } from "react";
// Note it is not compulsory to use props keyword as argument we can use different name eg: properties
class Student extends Component{
    constructor(props){
        // with out super() with props we cannot access this.props within the contructor
        super(props);
        console.log("Student Class construtor called");
        console.log("==>",this.props)
    }
    render(){
        return(
            <div>Hello Students {this.props.name}</div>
        )
    }
}
export default Student;