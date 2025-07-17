import React, { useState } from "react";

function FunctionState(){
    let [counter,setCounter] = useState(0);
    let Increase =()=>{
        setCounter(counter+1);
    }
    let Decrease =()=>{
        setCounter(counter-1);
    }
    return(
        <div>
        <h1>{counter}</h1>
        <button onClick={Increase}>Increment</button>
        <button onClick={Decrease}>Decrement</button>
        </div>
    )
}

export default FunctionState;