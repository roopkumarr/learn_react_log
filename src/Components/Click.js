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
    HelloFunction(){
        return(alert("Hello World"))        
    }
    render(){
        return(
        <div>
            <button onClick={this.HelloFunction}>Click</button>
        </div>
        )
    }
}

export default Click;