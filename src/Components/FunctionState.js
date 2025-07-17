import React, { useState } from "react";

function FunctionState(){
    let [counter,setCounter] = useState(0);
    return(
        <div>
        <h1>{counter}</h1>
        </div>
    )
}

export default FunctionState;