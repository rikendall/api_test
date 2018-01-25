let cmd = require('node-cmd');

function respond(req, res, next) {
	const body = req.body;
	if(body.ref === "refs/heads/feature/2020"){
		cmd.get('update.cmd', (err, data, stderr) => {
			console.log(err, data, stderr);
			res.send(data);
			next();
		});
	}
}


var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json({limit: '50mb'})); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// POST /login gets urlencoded bodies
app.post('/pull', respond)

app.listen(8080, () => console.log('Example app listening on port 3000!'));
