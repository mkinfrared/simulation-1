import React from 'react';
import {Link, Route} from 'react-router-dom';

export default function NavBar() {
    return(
    	<div key="NavBar" className="nav-bar">
		   <div className="nav-bar-logo">
			   <i className="fab fa-app-store"></i>
			   <p>shelfie</p>
			   {/*<Link><button>Dashboard</button></Link>*/}
		   </div>
	    </div>
    )
}