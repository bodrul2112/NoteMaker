


var express = require('express'),
    db = require('./routes/db');
 
var app = express();
 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 
app.get('/wines', db.findAll);
app.get('/wines/:id', db.findById);
app.post('/wines', db.addWine);
app.put('/wines/:id', db.updateWine);
app.delete('/wines/:id', db.deleteWine);
 
app.listen(3000);
console.log('Listening on port 3000...');