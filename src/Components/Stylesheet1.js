import React, { Component } from "react";
import Style from './Stylesheet1.module.css'
// Note: when implementing CSS as module the .css extention should be prefixed with .module as shown above.
// the bellow import method doesn't work
// import Style from './Stylesheet2.css'
// when we have multiple css files with simlar class name it doesn't work
// to overcome this we use css module method

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