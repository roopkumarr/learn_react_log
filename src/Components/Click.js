// import React, { Component } from "react";
import React from "react";

function Click(props){
    const HelloFunction = (name)=>{
        return(alert(`Hello Func ${name}`))
    }
    return(
        <div>
            <button onClick={()=>HelloFunction(props.name)}>Click</button>
        </div>
    )
}

// class Click extends Component{
//     render(){
//         const HelloFunction = (name)=>{
//         alert(`Hello ${name}`);        
//     }
//         return(
//         <div>
//             <button onClick={()=>HelloFunction(this.props.name)}>Click</button>
//         </div>
//         )
//     }
// }

export default Click;