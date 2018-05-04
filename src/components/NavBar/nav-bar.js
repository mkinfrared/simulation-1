import React from 'react';
import {Link} from 'react-router-dom';
import './nav-bar.css';

export default function NavBar() {
    return(
    	<div key="NavBar" className="nav-bar">
		   <div className="nav-bar-logo">
			   <Link to="/"><i className="fab fa-app-store"></i>
			   <p>shelfie</p></Link>
		   </div>
		    <ul>
			    <li><Link to="/dashboard">Dashboard</Link></li>
			    <li><Link to="/add-inventory">Add inventory</Link></li>
		    </ul>
	    </div>
    )
}