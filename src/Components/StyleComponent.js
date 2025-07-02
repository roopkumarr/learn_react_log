import React,{Component} from "react";

class StyleComponent extends Component {
    render(){
        return(
            <div>
                {/* first set of curly brace is for JS expression and secand one is for JS object  */}
                <h1 style={{color:"red", backgroundColor:"yellow"}}>Hello EveryOne</h1>
            </div>
        );
    }
}

export default StyleComponent;