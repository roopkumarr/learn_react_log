import React from "react";

// Note: all the values of props can be accessed only inside the components(currently in functional component) and the values are imutable
function HelloMessage(props){
    return(
        <div>
            {/* <h1>Hello World!!!</h1> */}
            <h1>Hello {props.name}!!!</h1>
            <h1>A===={props.datafield.a}</h1>
        </div>
    )
}

export default HelloMessage;