import React from "react";

function Click(){
    function HelloFunction(){
        return(alert("Hello World"))
    }
    return(
        <div>
            <button onClick={HelloFunction}>Click</button>
        </div>
    )
}

export default Click;