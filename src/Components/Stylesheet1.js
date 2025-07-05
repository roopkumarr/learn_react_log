import React, { Component } from "react";
import Style from './Stylesheet1.module.css'
class Stylesheet1 extends Component{
    render(){
        return(
            <div>
                {/* <h1 className="heading"> Hello EveryOne</h1> */}
                <h1 className={Style.heading}> Hello EveryOne</h1>
            </div>
        )
    }
}

export default Stylesheet1;