const http = require('http')
    ,fs = require("fs")
    ,app = require('./config/express');

const options = {
    key: fs.readFileSync("certificado.key"),
    cert: fs.readFileSync("certificado.cert")
    };

http.createServer(app).listen(process.env.PORT || 5000, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});
