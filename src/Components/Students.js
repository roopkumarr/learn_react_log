import React from "react";

function Students(){
    const names = ["Ram", "Shyam", "Krishna"];
    return(
        <div>
            {/* implementing list rendering using map method even for and while loops can also be used */}
            {names.map(name=><h1>{name}</h1>)}
        </div>
    )
}

export default Students