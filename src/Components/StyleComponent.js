import React,{Component} from "react";

class StyleComponent extends Component {
    render(){
        // if there are multiple properties to be added we can define a simple obj and use in the style
        let obj ={
            color:"red",
            backgroundColor:"yellow"
        };
        return(
            <div>
                {/* first set of curly brace is for JS expression and secand one is for JS object  */}
                {/* <h1 style={{color:"red", backgroundColor:"yellow"}}>Hello EveryOne</h1> */}
                <h1 style={obj}>Hello EveryOne</h1>
            </div>
        );
    }
}

export default StyleComponent;