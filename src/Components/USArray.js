import React, { useState } from "react";

function USArray(){
    let num = [2,4,7,8];
    let [numbers, setNumbers] = useState(num);
    let changeArray = ()=>{
        // setNumbers([12,34,56,78]);
        setNumbers(previousState =>{
            return[
                ...previousState,
                Math.floor(Math.random()*50)
                // 98
            ]
        });
        
    }
    return(
        <div>
            <ul>
                {numbers.map((n,indexId)=><li key={indexId}>{n}</li>)}
            </ul>
            <button onClick={changeArray}>Change array</button>
        </div>
    )
}

export default USArray;