import React, { Component } from "react";

// function Click(){
//     function HelloFunction(){
//         return(alert("Hello World"))
//     }
//     return(
//         <div>
//             <button onClick={HelloFunction}>Click</button>
//         </div>
//     )
// }

class Click extends Component{
    render(){
        const HelloFunction = (name)=>{
        alert(`Hello ${name}`);        
    }
        return(
        <div>
            <button onClick={()=>HelloFunction(this.props.name)}>Click</button>
        </div>
        )
    }
}

export default Click;