import React from "react";
// import React, { Component } from "react";
// class Customer extends Component{
//     constructor(){
//         super();
//         this.state={
//             sname:"RK",
//             sage:70
//         }
//     }
//     render(){
//         const {name, age} = this.props;
//         const {sname, sage} = this.state;
//         return(
//             <div>
//                 <h1>{name}</h1>
//                 <h1>{age}</h1>
//                 <h1>{sname}</h1>
//                 <h1>{sage}</h1>
//             </div>
//         )
//     }
// }
// ===============Functional component
// function Customer(props){
//     return(
//         <div>
//             <h1>{props.name}</h1>
//             <h1>{props.age}</h1>
//         </div>
//     )
// }

// function Customer(props){
//     const {name, age} = props;
//     return(
//         <div>
//             <h1>{name}</h1>
//             <h1>{age}</h1>
//         </div>
//     )
// }

function Customer({name, age}){
    return(
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </div>
    )
}
export default Customer;