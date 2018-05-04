const express    = require('express'),
      bodyParser = require('body-parser'),
      massive    = require('massive'),
      pc         = require('./controllers/product-controller/product-controller');

require('dotenv').config();

const app  = express(),
      port = 3007;

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then((dbInstance) => {
	app.set('db', dbInstance);
	console.log('CONNECTION SUCCESSFUL');
});

app.get('/stock/products', pc.getProds);
app.post('/stock/product', pc.createProd);
app.get('/stock/product/:id', pc.getProd);
app.put('/stock/product/:id', pc.updateProd);
app.delete('/stock/product/:id', pc.deleteProd);

app.listen(port, console.log(`Working on port ${port}`));