import React, {Component} from 'react';
import axios from 'axios';
import './dashboard.css'


export default class Dashboard extends Component {
	constructor() {
		super();
		this.state             = {
			display: []
		};
		this.deleteProduct     = this.deleteProduct.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
		
	}
	
	componentDidMount() {
		axios.get('/stock/products').then((resp) => this.setState({display: resp.data}));
	}
	
	deleteProduct(e) {
		const id = e.target.dataset.prodId;
		axios.delete(`/stock/product/${id}`).then(() => this.componentDidMount());
	}
	
	render() {
		let arr = this.state.display.map((elem) => {
			elem = <div key={elem.product_id} className="product-card" data-product-id={elem.product_id}>
				<div className="product-image">
					<img src={elem.image_url} alt={elem.model_name}/>
				</div>
				<div className="product-info">
					<h3>{elem.brand_name}</h3>
					<h4>{elem.model_name}</h4>
					<p>${elem.price}</p>
					<button data-prod-id={elem.product_id} className="del-btn"
					        onClick={(e) => this.deleteProduct(e)}>Delete
					</button>
					<button className="edit-btn">Edit</button>
				</div>
			</div>;
			return elem;
		});
		return (
			<div key="dashboard" className="dashboard">
				{arr}
			</div>
		)
	}
} 