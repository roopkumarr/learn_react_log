import React,{Component} from "react";

class StyleComponent extends Component {
    render(){
        // if there are multiple properties to be added we can define a simple obj and use in the style
        let obj1 ={
            color:"red",
            backgroundColor:"yellow" //Note Property name must be camelCased (eg:backgroundColor for background-color)
        };
         let obj2 ={
            fontSize:"50px",
            fontFamily:"cooper"
          };
        return(
            <div>
                {/* first set of curly brace is for JS expression and secand one is for JS object  */}
                {/* <h1 style={{color:"red", backgroundColor:"yellow"}}>Hello EveryOne</h1> */}
                {/* <h1 style={obj}>Hello EveryOne</h1> */}
                <h1 style={{...obj1,...obj2 }}>Hello EveryOne</h1>  {/* if we have multiple set of oject we can us spread opeartor */}
            </div>
        );
    }
}

export default StyleComponent;