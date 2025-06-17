import React, { Component } from "react";

// Note to access Props inside a class component we need to use this keyword with props keyword preceeded with attributeName eg: this.props.name (to get the name attribute for this class component)

class ClassCompProps extends Component{
    render(){
        return(
            <div>
                Hello {this.props.name}
                <br/>
                wordCount == {this.props.wordCount} 
                <br/>
                <h2>{this.props.children}</h2>
            </div>
        );
    }
}
export default ClassCompProps