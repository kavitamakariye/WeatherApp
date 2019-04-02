var http = require('http');
var url = 'https://samples.openweathermap.org/data/2.5/find?q=London&appid=b6907d289e10d714a6e88b30761fae22';

var server = http.createServer(function(request,response){
// All logic will go here.
    var request = require('request');
    request(url,function(err,res,body){
        var data = JSON.parse(body);
        response.write("<html><body><div id ='container'>");
        response.write("<h1>"+'City Name - :'+ data['name'] + '<br>' + "</h1>");
        response.write("<h2>"+ 'Temperature - : '+ data.main['temp']+ '<br>'+"</h2>");
        response.write("<h2>"+ 'Sunset - :'+ new Date(data.sys['sunset']*1000)+"</h2>");
        response.write("</div></body></html>");
        response.end();
    });
}).listen(1234);