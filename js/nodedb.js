let express = require('express')
, http = require('http')
, path = require('path')
, static = require('serve-static');

let app = express();

app.use('/',static(path.join(__dirname,'../html')));

http.createServer(app).listen(3001,function(){
    console.log('express webserver start ! :: 3001');
})