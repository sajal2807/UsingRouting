import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
class Add extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container-fluid">
                <button> Add Book</button>
            </div>
        );
    }
}
export default Add;