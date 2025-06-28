import React, { Component } from 'react'

class ChildComponent extends Component{
    render(){
        return(
            <div>
                {/* passing attribute to the function */}
                <button onClick={()=>this.props.callMethod("ChildComp") }>Click</button>
            </div>
        )
    }
}

export default ChildComponent