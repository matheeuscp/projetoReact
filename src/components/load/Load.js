import React, {Component} from 'react';

export default class Loading extends Component
{
    render(){
        return(
            <div id="loading-full" style={{display: "none"}}>
                <div id="cssload" className="cssload-thecube">
                    <img className="spinner" src={require("../../img/logo.png")} width="200px"/>
               </div>
            </div>
        )
    }
}