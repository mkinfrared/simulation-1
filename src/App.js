import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar/nav-bar';


class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar/>
			</div>
		);
	}
}

export default App;
