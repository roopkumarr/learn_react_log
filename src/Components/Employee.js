import React, { Component } from "react";

class Employee extends Component{
    constructor(props){
        super(props);
        this.state={
            name:this.props.name, // Setting props data to state
            // name:"Roop" // We can have multiple properties
        }
    }
    changeName(){
        this.setState({
            name:"RPKMR"
        })
    }
    render(){
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <button onClick={()=>{this.changeName()}}>Click</button>
            </div>
        )
    }
}
export default Employee;