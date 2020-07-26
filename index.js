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