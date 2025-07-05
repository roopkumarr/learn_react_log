import React, { Component } from "react";
import Style from './Stylesheet2.module.css'

class Stylesheet2 extends Component{
    render(){
        return(
            <div>
                <h1 className={Style.heading}> Welcome Back</h1>
            </div>
        )
    }
}

export default Stylesheet2;