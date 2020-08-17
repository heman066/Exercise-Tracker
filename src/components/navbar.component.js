import React from 'react';
import {Link} from 'react-router-dom';


export default class Navbar extends React.Component{
	render(){
		return(
			<nav className="container navbar navbar-dark bg-dark navbar-expand-lg">
				<Link to ="/">Tracker</Link>
				<div className="collpase navbar-collapse">
					<ul className="navbar-nav mr-auto">
						<li className="navbar-item">
							<Link to ="/" className="nav-link">Exercises</Link>
						</li>
						<li className="navbar-item">
							<Link to ="/create" className="nav-link">Create Exercises Log</Link>
						</li>
						<li className="navbar-item">
							<Link to ="/user" className="nav-link">Create User</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}