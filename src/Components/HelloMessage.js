import React from "react";

// Note: all the values of props can be accessed only inside the components(currently in functional component) and the values are imutable
// props.children is used to access the child component of the current component
// Note it is not compulsory to use props keyword as argument we can use different name eg: properties

function HelloMessage(props){
    return(
        <div>
            {/* <h1>Hello World!!!</h1> */}
            <h1>Hello {props.name}!!!</h1>
            {/* <h1>A===={props.datafield.a}</h1> */}
            {props?.datafield?.a ? <h1>A===={props.datafield.a}</h1> : "" }
            {props.children}
        </div>
    )
}

export default HelloMessage;