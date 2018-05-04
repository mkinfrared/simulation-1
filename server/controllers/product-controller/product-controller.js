module.exports = {
	getProds: (req, res) => {
		const dbInstance = req.app.get('db');
		
		dbInstance.getAll()
		          .then((products) => res.status(200).send(products))
		          .catch(() => res.status(500).send());
	},
	
	getProd: (req, res) => {
		const dbInstance = req.app.get('db'),
		      {id}       = req.params;
		
		dbInstance.getProductById(id)
		          .then((product) => res.status(200).send(product))
		          .catch(() => res.status(500).send());
	},
	
	createProd: (req, res) => {
		const dbInstance                                 = req.app.get('db'),
		      {image_url, brand_name, model_name, price} = req.body;
		
		dbInstance.createProduct([image_url, brand_name, model_name, price])
		          .then((product) => res.status(200).send(product))
		          .catch(() => res.status(500).send());
	},
	
	updateProd: (req, res) => {
		const dbInstance                                 = req.app.get('db'),
		      {id}                                       = req.params,
		      {image_url, brand_name, model_name, price} = req.body;
		
		dbInstance.updateProduct([id, image_url, brand_name, model_name, price])
		          .then((product) => res.status(200).send(product))
		          .catch(() => res.status(500).send());
	},
	
	deleteProd: (req, res) => {
		const dbInstance = req.app.get('db'),
		      {id}       = req.params;
		
		dbInstance.deleteProduct(id)
		          .then(() => res.status(200).send())
		          .catch(() => res.status(500).send());
	}
};