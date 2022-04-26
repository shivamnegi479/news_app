import React, { Component } from 'react';
class Demo extends Component{
    render(){
        let {title}=this.props
        return(
            <>
            <div>Helllo word Demo Class</div>
            <div>{title}</div></>
        )
    }
}

export default Demo