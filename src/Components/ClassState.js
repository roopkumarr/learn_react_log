import React, { Component } from "react";

class ClassState extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
            </div>
        )
    }
}
export default ClassState;