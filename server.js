/* eslint-disable no-undef */
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

const db = router.db.getState();
const games = db.games;
const categories = db.categories;


// Games List
server.get('/games', (req, res) => {
	res.jsonp(games);
});

// Categories List
server.get('/categories', (req, res) => {
	res.jsonp(categories);
});



server.use(router);
server.listen(3001, () => {
	console.log('JSON Server is running');
});
