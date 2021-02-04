var express = require('express');
var app = express();
var path = require('path');
 
//express.static.mime.types['wasm'] = 'application/wasm';

app.set('servePath', path.join(__dirname, '..', 'app/faceReplacement/image' ));
app.use(express.static(app.get('servePath')));
app.use(express.static('../'));
module.exports = app;
