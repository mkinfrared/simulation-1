import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar/nav-bar';
import Router from './components/Router/router';


class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar/>
				{Router}
			</div>
		);
	}
}

export default App;
