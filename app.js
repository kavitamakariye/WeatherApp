var http = require('http');
var url = 'https://samples.openweathermap.org/data/2.5/find?q=London&appid=b6907d289e10d714a6e88b30761fae22';

var server = http.createServer(function(request,response){
// All logic will go here.

    response.write('Hi');
    response.end();


}).listen(1111);