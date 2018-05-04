import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './add-inventory.css'


export default class AddInventory extends Component {
	constructor() {
		super();
		this.state          = {
			image_url : '',
			brand_name: '',
			model_name: '',
			price     : ''
		};
		this.handleChange   = this.handleChange.bind(this);
		this.handleCancel   = this.handleCancel.bind(this);
		this.addToInventory = this.addToInventory.bind(this);
	}
	
	handleChange(evt) {
		this.setState({[evt.target.name]: evt.target.value});
	}
	
	handleCancel() {
		this.setState({
			image_url : '',
			brand_name: '',
			model_name: '',
			price     : ''
		});
	}
	
	addToInventory() {
		const {image_url, brand_name, model_name, price} = this.state;
		axios.post('/stock/product', {image_url, brand_name, model_name, price}).then(() => {
			this.setState({
				image_url : '',
				brand_name: '',
				model_name: '',
				price     : ''
			});
		});
	}
	
	render() {
		const {image_url, brand_name, model_name, price} = this.state;
		return (
			<div key="add-inventory" className="add-inventory">
				<div className="product-image">
					<img src={(image_url) ? image_url : 'no-entry.jpg'} alt=""/>
				</div>
				<div className="input-form">
					<p>Image URL:</p>
					<input onChange={(e) => this.handleChange(e)} type="text" name="image_url"
					       value={this.state.image_url}/>
					<p>Brand Name:</p>
					<input onChange={(e) => this.handleChange(e)} type="text" name="brand_name"
					       value={this.state.brand_name}/>
					<p>Product Name:</p>
					<input onChange={(e) => this.handleChange(e)} type="text" name="model_name"
					       value={this.state.model_name}/>
					<p>Price:</p>
					<input onChange={(e) => this.handleChange(e)} type="text" name="price" value={this.state.price}/>
				</div>
				<Link to="/dashboard"><button className="cancel-btn" onClick={this.handleCancel}>Cancel</button></Link>
				<button className="add-btn" onClick={this.addToInventory}>Add to Inventory</button>
			</div>
		)
	}
}