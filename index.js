let cmd = require('node-cmd');

function respond(req, res, next) {
    console.log(req);
    cmd.get('update.cmd', (err, data, stderr) => {
        //console.log(err, data, stderr);
        res.send(data);
        next();
    });
}

var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})

// POST /login gets urlencoded bodies
app.post('/pull', urlencodedParser, respond)

app.listen(8080, () => console.log('Example app listening on port 3000!'))