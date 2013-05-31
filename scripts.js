var http = require('http');


//loginUser();

// registerUser();

exports.registerUser = function (){
	var options = {
		hostname: 'localhost',
		port: 8080,
		path: '/register',
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		}
	};

	var req = http.request(options, function(res) {
		console.log('STATUS: ' + res.statusCode);
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			console.log('BODY: ' + chunk);
		});
	});

	req.on('error', function(e) {
		console.log('problem with request: ' + e.message);
	});

	var user = {
		'name': 'Amir',
		'email': 'amir@doob.io',
		'password': 'mypassword'
	};

	console.log(JSON.stringify(user));
	// write data to request body JSON.stringify(user)
	req.write(JSON.stringify(user));

	req.end();
};

// var user = {
// 	'email': 'amir@doob.io',
// 	'password': 'mypassword'
// };

exports.loginUser = function (user, callback){
	var options = {
		hostname: 'localhost',
		port: 8080,
		path: '/login',
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		}
	};

	var req = http.request(options, function(res) {
		console.log('STATUS: ' + res.statusCode);
		// res.setEncoding('utf8');
		// res.on('data', function (chunk) {
		// 	console.log('BODY: ' + chunk);
		// });
		return callback(res.statusCode);
	});

	req.on('error', function(e) {
		console.log('problem with request: ' + e.message);
	});

	req.write(JSON.stringify(user));

	req.end();
};

exports.userExists = function(email, callback){
	var options = {
		hostname: 'localhost',
		port: 8080,
		path: '/exists?email=' + email,
		method: 'GET'
	};

	var req = http.request(options, function(res) {
		console.log('STATUS: ' + res.statusCode);
		return callback(res.statusCode);
	});

	req.on('error', function(e) {
		console.log('problem with request: ' + e.message);
	});

	req.end();
};
