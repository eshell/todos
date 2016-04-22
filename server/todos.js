var express = require('express'),
    config = require('./config/config'),
    http = require('http'),
    app = express(),
    bodyParser = require('body-parser');

app.set('trust proxy');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use('/api/todos',require('./routes/todos'));

http.createServer(app).listen(config.port, function (err) {
    console.log('Todos Server listening on port '+config.port);
});
