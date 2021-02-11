// const https = require('https')
//     ,fs = require("fs")
//     ,app = require('./config/express');

// const options = {
//     key: fs.readFileSync("certificado.key"),
//     cert: fs.readFileSync("certificado.cert")
//     };

// https.createServer(options, app).listen(5000, function() {
//     console.log('Servidor estutando na porta: ' + this.address().port);
// });

const http = require('http')
    ,fs = require("fs")
    ,app = require('./config/express');

const options = {
    key: fs.readFileSync("certificado.key"),
    cert: fs.readFileSync("certificado.cert")
    };

http.createServer(app).listen(5000, function() {
    console.log('Servidor estutando na porta: ' + this.address().port);
});
