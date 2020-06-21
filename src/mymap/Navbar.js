import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

export class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg bg-theme p-0 container fixed-top">
				<div className="container">
					<ul className="navbar-nav mx-auto main-menu">
						<div className="row">
							<li className="nav-item">
								<NavLink exact activeClassName='active-link' className="nav-link" to='/'>
								<i className="mr-5 fas fa-map fa-2x"></i>
								</NavLink>
								
							</li>
							<li className="nav-item">
								<NavLink exact activeClassName='active-link' className="nav-link" to='/search'>
								<i className="ml-4 fas fa-search fa-2x"></i>
								</NavLink>
							</li>
							{/* <li className="nav-item">
								<Link className="nav-link" to='/search'>Search</Link>
							</li> */}
						</div>
					</ul>
				</div>
			</nav>

		);
	}
}

export default Navbar;
