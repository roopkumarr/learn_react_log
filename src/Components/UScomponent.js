import React, { useState } from "react";

function UScomponent(){
    const myArray =  useState("World");
    return(
        <div>
            <h1>
                {myArray[0]}
            </h1>
            <button onClick={()=> myArray[1]("Globe")}>Update</button>
        </div>
    )
}

export default UScomponent;