// Soundbox Server (For Development or hosting...)
// By Ben Uthoff

// Dependencies and Setup.
const express = require('express');
const app = express();
const server = require('http').createServer(app);

const port = 666;

// Run Web Server.
app.use(express.static('src'));
server.listen(port, () => {
	console.log('listening on *:'+port);
});