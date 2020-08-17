import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Exercise from './exercise'

export default class ExerciseList extends React.Component{
	constructor(props){
		super(props);
		this.deleteExercise=this.deleteExercise.bind(this);
		this.exerciseList=this.exerciseList.bind(this);
		this.state={
			exercises:[]
		}
	}

	componentDidMount(){
		axios.get('http://localhost:5000/exercises/')
		.then(response=>{
			this.setState({exercises:response.data})
		})
		.catch(console.log);
	}
	deleteExercise(id){
		console.log(id);
		axios.delete('http://localhost:5000/exercises/'+id)
		.then(res=>console.log(res.data));
		this.setState({
			exercises:this.state.exercises.filter(el=>el._id!==id)
		})
	}
	exerciseList(e){
		return this.state.exercises.map(currEx=>{
			return <Exercise exercise={currEx} deleteExercise={this.deleteExercise} key={currEx._id}/>;
		})
	}
	render(){
		return(
			<div className="container">
				<h3>Logged Exercises</h3>
				<table className="table">
					<thead className="theadlight">
						<tr>
							<th>UserName</th>
							<th>Description</th>
							<th>Duration</th>
							<th>Date</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{this.exerciseList()}
					</tbody>
				</table>
			</div>
		);
	}
}