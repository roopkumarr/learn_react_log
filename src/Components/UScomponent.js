import React, { useState } from "react";

function UScomponent(){
    const myArray =  useState("World");
    let changeState =()=>{
        myArray[1]("Globe")
    }
    return(
        <div>
            <h1>
                {myArray[0]}
            </h1>
            {/* <button onClick={()=> myArray[1]("Globe")}>Update</button> */}
            <button onClick={changeState}>Update</button>
        </div>
    )
}

export default UScomponent;