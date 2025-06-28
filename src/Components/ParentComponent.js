import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component{
    ParentMethod = (childName) =>{
        // console.log("childName====", childName)
        return(alert("Hello from parent " + childName));
    }
    render(){
        return(
            <div>
                {/* Creating a property called callMethod and passing the ParentMethod within it  */}
                <ChildComponent callMethod={this.ParentMethod}/>
            </div>
        )
    }
}

export default ParentComponent