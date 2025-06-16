import React from "react";
// A jsx component that allows us to write HTML code with in the js file this is the right way of writing react component with html return

// function Hello(){
//     return(<div>
//         <h1>Hello JSX</h1>
//     </div>)
// }

// let name = "Bob";
// const car_obj = {name:"Rolls Royce", color:"Blue"};
// function Hello(){
//     return(<div>
//         <h1>Hello JSX</h1>
//         {/* simple way to write expression or variable or poperty or obj or any valied js expression  using {<variable or exression>} */}
//         <h1>{name}</h1> 
//         <h1>{5+5}</h1> 
//         <h1>5+5</h1>
//         {/* {{ }} is common syntax in JSX (used with React) or similar templating engines. The outer curly braces indicate that you're embedding a JavaScript expression, and the inner curly braces define a JavaScript object. */}
//         <h1 style={{color:car_obj.color}}>{car_obj.name}</h1>
//         {/* this is a fragment (one top elements) */}
//         <></> 
//     </div>)
// }

let a= 10;
let msg="";
// the conditional statement has to be put outside of the jsx function
if(a>50){
    msg="Hello";
}else{
    msg="Bye";
}

// JSX
function Hello(){
    return(<div>
        <h1>Hello JSX</h1>
        <h1>{msg}</h1>
    </div>)
}


export default Hello