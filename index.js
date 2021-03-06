var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var mysql = require('mysql');
var cors = require('cors');

var SELECT_ALL_APPLICATIONS_QUERY = 'SELECT * FROM applications';

var connect = mysql.createConnection({
	host:'localhost',
	database: 'all_apps',
	user: 'root',
	password: '987m654'
});

app.use(cors());

var initial_result;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
	connect.query(SELECT_ALL_APPLICATIONS_QUERY, function(err, result) {
		initial_result = result;
		io.emit('table update', Object.values(result));
	});
});

setInterval(function(){
		connect.query(SELECT_ALL_APPLICATIONS_QUERY, function(err, result) {
			if(err) { throw new Error('Failed');}

			if(JSON.stringify(initial_result) != JSON.stringify(result)) { 
				io.emit('table update', Object.values(result)); 
			}
			initial_result = result;
		});
	}, 1000);

http.listen(4000, () => {
	console.log('listening on *:4000');
});