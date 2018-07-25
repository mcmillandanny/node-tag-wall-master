const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// tell the api to respond to anybody
app.use(cors());
// for parsing application/json 
app.use(bodyParser.json());
//for parsing application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// where all the tags go
let tags = []


app.get('/', function(req, res){
	res.send('Welcome to the tag wall API');
})

app.post('/tag', function(req, res){	
	tags.push(req.body.tag)
	console.log('tags array', tags)
	res.send('This is how you add tags');
})


app.get('/tag', function(req, res){
	res.send(tags);
})


app.listen(1337, () => console.log('Example app listening on port 1337!'))