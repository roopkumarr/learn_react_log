import React, { useState } from "react";

function USobject(){
    let obj ={
        name:"Roop",
        age:29,
        height:5.3,
        isYoung:true
    }
    const [person, setPerson] = useState(obj);
    let changeState = ()=>{
        // setPerson({
        //     name:"Kumar",
        //     age:30,
        //     height:5.3,
        //     isYoung:false
        // })
        // when we want to Update a specific key value inside a object we make the following logic where the previous state is passed a parameter for setVariablefunc and using the same with spreadOpearation so the previous state data is retreived and only the updated key pair is updated 
        setPerson(previousState=>{
            return{
                ...previousState,
                name:"Kumar",
            }
        })
    }
    return(
        <div>
            <h1>{person.name}</h1>
            <h1>{person.age}</h1>
            <h1>{person.height}</h1>
            <h1>{person.isYoung.toString()}</h1>  {/* to make the booleon value visible we are converting it string */}
            <button onClick={changeState}>Update</button>
        </div>
    )
}
export default USobject;