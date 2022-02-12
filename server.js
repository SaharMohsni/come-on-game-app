/* eslint-disable no-undef */
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const bodyParser = require('body-parser');
const middlewares = jsonServer.defaults();
const jwt = require('jsonwebtoken');
server.use(middlewares);
server.use(bodyParser.json());
server.use(jsonServer.bodyParser);

const db = router.db.getState();
const games = db.games;
const categories = db.categories;
const players = db.players;
const SECRET_KEY = '123456789';
const expiresIn = '5h'; // token expiration delay

// Games List
server.get('/games', (req, res) => {
	res.jsonp(games);
});

// Categories List
server.get('/categories', (req, res) => {
	res.jsonp(categories);
});

/////////////////////////////////////////////

// Create a token from a payload
function createToken(payload) {
	return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Check if the user exists in database
function isAuthenticated({ username, password }) {
	return username in players && players[username].password === password;
}

// Login
server.post('/login', (req, res) => {
	const { username, password } = req.body;
	if (isAuthenticated({ username, password }) === false) {
		const status = 400;
		res.status(status).json({
			status: 'fail',
			error: 'player does not exist or wrong password'
		});
		return;
	}
	const access_token = createToken({ username, password });
	const player = Object.assign({}, players[username]); //Creating a copy of player
	delete player.password;
	res.status(200).json({
		status: 'success',
		access_token,
		player
	});
});

// Logout
server.post('/logout', (req, res) => {
	var username = req.body.username;
	if (username in players) {
		res.status(200).json({
			status: 'success'
		});
		return;
	}
	res.status(400).json({
		status: 'fail',
		error: 'Username do not match!'
	});
});

server.use(router);
server.listen(3001, () => {
	console.log('JSON Server is running');
});
