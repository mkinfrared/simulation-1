const express    = require('express'),
      bodyParser = require('body-parser'),
      massive    = require('massive');

require('dotenv').config();

const app  = express(),
      port = 3007;

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then((dbInstance) => {
	app.set('db', dbInstance);
	console.log('CONNECTION SUCCESSFUL');
}).catch((err) => console.log(err));

app.get();
app.get();
app.post();
app.put();
app.delete();

app.listen(port, console.log(`Working on port ${port}`));