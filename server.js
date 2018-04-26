import config from './config';
import express from 'express';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
const server = express();
var viewCount = 0;

const log = (req,res,next) =>{
	console.log("Views: "+viewCount);
	res.send("Views:"+viewCount);
	next();
}

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine','ejs');

import serverRender from './serverRender';

server.get('/', (req, res) => {
  viewCount = viewCount+1;
  serverRender()
		.then(({ initialMarkup, initialData }) => {
      res.render('index', {
        initialMarkup,
        initialData
      });
    })
    .catch(console.error);
});

server.use('/count',log);
server.use('/api',apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});