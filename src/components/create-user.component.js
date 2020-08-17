import React from 'react';
import axios from 'axios';

export default class CreateUser extends React.Component{
	constructor(props){
		super(props);
		this.state={
			username:""
		}
		this.onChangeUserName=this.onChangeUserName.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
	}
	onChangeUserName(e){
		this.setState({username:e.target.value});
	}
	onSubmit(e){
		e.preventDefault();
		const user={
			username:this.state.username,
		}
		console.log(user);
		axios.post("http://localhost:5000/users/add",user)
		.then(res=> console.log(res.data));
		this.setState({
			username:""
		})
	}
	render(){
		return(
			<div className="container">
				<h3>Create New User</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>UserName: </label>
						<input type="text"
						required className="form-control"
						value={this.state.username}
						onChange={this.onChangeUserName}/>
					</div>
					<div className="form-group">
						<input type="submit" value="Create User" className="btn btn-primary"/>
					</div>
				</form>
			</div>
		);
	}
}