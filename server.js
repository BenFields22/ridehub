
import express from 'express';
const server = express();

server.use(express.static('public'));

server.listen(8080,() => {
	console.info('Express listening on port ', 8080);
});