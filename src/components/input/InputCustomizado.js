import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import '../../css/app.css';

export default class InputCustomizado extends Component{
	digitando(event){
		this.setState({borda:'1px solid #dbdbdb'});	
	}

	constructor(){
		super();
		this.state = {msgErro:'', borda:''};
	}
	
	render() {
		return (
			<div className="pure-control-group">
			  <input onKeyUp={this.digitando.bind(this)} style={{boxShadow: '0 0 0 0', outline:'1',borderRadius:'0px', border:`${this.state.borda}`}} className="form-control" id={this.props.id} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} value={this.props.value}  onChange={this.props.onChange}/>                  
			</div>			
		);
	}

	componentDidMount() {
		PubSub.subscribe("erro-validacao",function(topico,erro){
			if(erro.field === this.props.name){
				this.setState({borda:'1px solid red'});			
			}
		}.bind(this));

		PubSub.subscribe("limpa-erros",function(topico){						
			this.setState({msgErro:''});						
		}.bind(this));		
	}
}
