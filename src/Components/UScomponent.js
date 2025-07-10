import React, { useState } from "react";

function UScomponent(){
    // const myArray =  useState("World");
    const [name, setName] =  useState("World"); //Destructuring useState hook

    let changeState =()=>{
        // myArray[1]("Globe")
        setName("Globe")
    }
    return(
        <div>
            <h1>
                {/* {myArray[0]} */}
                {name}
            </h1>
            {/* <button onClick={()=> myArray[1]("Globe")}>Update</button> */}
            <button onClick={changeState}>Update</button>
        </div>
    )
}

export default UScomponent;