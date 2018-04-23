import express from 'express';

const app = express();

app.get('/',function(req, res){
	res.send('Welcome to Book-A-Meal');
});

app.listen(3000);