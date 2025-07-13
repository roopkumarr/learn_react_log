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
        setPerson({
            name:"Kumar",
            age:30,
            height:5.3,
            isYoung:false
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