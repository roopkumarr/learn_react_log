import React from "react";

function Students(){
    const names = ["Ram", "Shyam", "Krishna"];
    let studentNames = names.map((name,index)=><li key={index}>{name}</li>)
    return(
        <div>
            {/* implementing list rendering using map method even for and while loops can also be used */}
            {/* {names.map(name=><h1>{name}</h1>)} */}
            {/* to remove the list key waring */}
            {/* by implementing list and keys we are not rerendering the whole list instead we are rerendering only the missing ones  */}
            {<ul>{studentNames}</ul>}
        </div>
    )
}

export default Students