const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');


// index page 
app.get('/', function(req, res) {
    res.render('pages/index', {heading: 'Hello'});
});

// about page 
app.get('/about', function(req, res) {
    res.render('page/about');
});

app.listen(4000);
console.log('4000 is the magic port');