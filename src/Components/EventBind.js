import React, { Component } from "react";

class EventBind extends Component{
    constructor(){
        super();
        this.HelloEvent = this.HelloEvent.bind(this); //post this line only the respective function can access the 'this' object else it would return undefined
        this.state = {
            name: "World"
        }
    }
    HelloEvent(){
        console.log("this ====>", this);
        this.setState({
            name: "Globe"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.HelloEvent}>Click11</button>
            </div>
        )
    }
}

export default EventBind;