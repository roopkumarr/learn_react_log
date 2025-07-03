import React,{Component} from "react";
import "./StyleComponent.css"
class StyleComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            isActive:false
        }
    }
    changeState = () =>{
        this.setState({
            // isActive:true
            isActive:!this.state.isActive // changing the booleon value to inverse
        })
    }
    render(){
        // if there are multiple properties to be added we can define a simple obj and use in the style
        // let obj1 ={
        //     color:"red",
        //     backgroundColor:"yellow" //Note Property name must be camelCased (eg:backgroundColor for background-color)
        // };

        // let obj2 ={
        //    fontSize:"50px",
        //    fontFamily:"cooper"
        //  };
        let obj ={
            color:"red",
            backgroundColor:"yellow",            
            fontSize:"50px",
        };
        if(this.state.isActive) obj.backgroundColor = "blue"; 
        let checkVal = this.props.check? "myFont" : "myFont1"
        return(
            <div>
                {/* first set of curly brace is for JS expression and secand one is for JS object  */}
                {/* <h1 style={{color:"red", backgroundColor:"yellow"}}>Hello EveryOne</h1> */}
                {/* <h1 style={obj}>Hello EveryOne</h1> */}
                {/* <h1 style={{...obj1,...obj2 }}>Hello EveryOne</h1>  if we have multiple set of oject we can us spread opeartor */}
                <button style={obj} onClick={this.changeState}>Click</button>
                {/* since class is a reserved key word in js we need to use className(camelCase) */}
                {/* <h1 className="myFont">Hello CSS extrenal file</h1> */}
                {/* for using mutiple css classes we use " " (space)  to sepearate 2 css className */}
                {/* <h1 className="myFont myFont1">Hello CSS extrenal file</h1> */}
                {/* <h1 className={checkVal}>Hello CSS extrenal file</h1> */}
                <h1 className={`${checkVal} myFont2`}>Hello CSS extrenal file</h1>
                
            </div>
        );
    }

    // render(){
    //     return(
    //         <div>
    //             <h1 className="myFont">Hello CSS extrenal file</h1>
    //         </div>
    //     )
    // }
}

export default StyleComponent;