import React, { useState } from "react";

function USobject(){
    let obj ={
        name:"Roop",
        age:29,
        height:5.3,
        isYoung:true
    }
    const [person, setPerson] = useState(obj);
    return(
        <div>
            <h1>{person.name}</h1>
            <h1>{person.age}</h1>
            <h1>{person.height}</h1>
            <h1>{person.isYoung.toString()}</h1>
        </div>
    )
}
export default USobject;