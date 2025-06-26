import React, { Component } from "react";

// the main differece between calling bind inside constuctor and render is 
// when it is called inside the button event in our case went ever the button is clicked the bind method is called again and again (Render method)
// instead we can call it in constructor so it bind only once.  (In constructor)
class EventBind extends Component{
    constructor(){
        super();
        // In constructor
        // this.HelloEvent = this.HelloEvent.bind(this); //post this line only the respective function can access the 'this' object else it would return undefined
        this.state = {
            name: "World"
        }
    }
    HelloEvent(){
        // console.log("this ====>", this);
        this.setState({
            name: "Globe"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                {/* Render method */}
                {/* other alternative but always prefered to use the bind method inside constructor */}
                <button onClick={this.HelloEvent.bind(this)}>Click11</button> 
            </div>
        )
    }
}

export default EventBind;