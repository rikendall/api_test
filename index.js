let restify = require('restify');
let cmd = require('node-cmd');

function respond(req, res, next) {
	// console.log(req);
    cmd.get('update.cmd', (err, data, stderr) => {
        //console.log(err, data, stderr);
        res.send(data);
        next();
    });
}

let server = restify.createServer();
server.post('/pull', respond);
server.get('/pull', respond);

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});