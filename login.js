
const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();



const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '123456',
	database : 'psystem',
	port     : '3306'
});

connection.connect((err) =>{
	if (err) {
		console.log(err)
		return
	}
	console.log("connected to the database!!!!")
})


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'js')));
app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.html'));
});




app.post('/auth', function(request, response) {

	let username = request.body.username;
	let password = request.body.password;

	if (username && password) {
		
		connection.query('SELECT * FROM login WHERE uname = ? AND upassword = ?', [username, password], function(error, results, fields) {
		
			if (error) throw error;
			
			if (results.length > 0) {
				
				request.session.loggedin = true;
				request.session.username = username;
				
				response.redirect('/home');
			} else {
				response.send('username or password is wrong!');

			}			
			response.end();
		});
	} else {
		response.send('your username and password is mandetory!');
		response.end();
	}
});


app.get('/home', function(request, response) {
	
    if (request.session.loggedin) {
        response.sendFile(path.join(__dirname + '/home.html'));
    }
    else{
        response.send('Login first!!')
    }
    
});


app.get("/getData", function (req, res) {
	const result = connection.query(
		//"SELECT * FROM precord",
		"SELECT patientdata from precord where symptom = "+"'"+req.query.search+"'", 
	  	function (error, results) {
		res.send(results);	
	  }
	);
  });

app.listen(3000);