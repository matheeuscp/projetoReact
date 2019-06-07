import React, {Component} from 'react';

export default class Complete extends Component
{
    render(){
        return(
            <div id="loading-full2" className="complete" style={{display: "none"}}>
                <div id="cssload" className="cssload-thecube">
                    <img style={{width:'200px', height:'150px', borderRadius:'5px'}} className="spinner2" src={require("../../img/source.gif")}/>
               </div>
            </div>
        )
    }
}