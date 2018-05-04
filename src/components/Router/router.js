import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from '../Dashboard/dashboard';
import AddInventory from '../AddInventory/add-inventory';

export default (
	<Switch>
		<Route path="/dashboard" component={Dashboard}/>
		<Route path="/add-inventory" component={AddInventory}/>
	</Switch>
)