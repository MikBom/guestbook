var http = require("http");
var server = http.createServer(function(request,response){
    if(request.url === "/"){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write("<h1 style='color:blue;'>Sivun H1 otsikko</h1>");
        response.write("<h2>Taulukko</h2>");
        response.write("<table>");
        response.write("<tr>");
        response.write("<th style='text-align:left';>Name</th>");
        response.write("<th style='text-align:left';>Address</th>");
        response.write("<th style='text-align:left';>City</th>");
        response.write("</tr>");
        response.write("<tr>");
        response.write("<td>Alfreds Futterkiste</td>");
        response.write("<td>Timotie 1</td>");
        response.write("<td><a href='www.tampere.fi'>Tampere</a></td>");
        response.write("</tr>");
        response.write("<tr>");
        response.write("<td>Maija Virtanen</td>");
        response.write("<td>Asematie 2</td>");
        response.write("<td><a href='www.akaa.fi'>Akaa</a></td>");
        response.write("</tr>");
        response.write("<tr>");
        response.write("<td>Ernst Handel</td>");
        response.write("<td>Tykkykuja 5</td>");
        response.write("<td><a href='www.kirkkonummi.fi'>Kirkkonummi</a></td>");
        response.write("</tr>");
        response.write("</table>");
        response.end("<h3 style='color:red;'>Ekan sivun loppu jatka toiselle sivulle <a href='/toinen'>tästä</a></h3>");
    }

    if(request.url === "/guestbook"){
        response.writeHead(200, {'Content-Type': 'text/html'});
        var data = require('./sample2.json');
        console.log(data);
        var output = JSON.stringify(data);
        response.write(output);
        response.end("<h2>Palaa ekalle sivulle <a href='/'>tästä</a></h2>");
    }
    if(request.url === "/newmessage"){
        response.writeHead(200, {'Content-Type': 'text/html'});

        response.end("<h2>Palaa ekalle sivulle <a href='/'>tästä</a></h2>");
    }
    if(request.url === "/ajaxmessage"){
        response.writeHead(200, {'Content-Type': 'text/html'});
        var data = require('./sample2.json');
        console.log(data);
        var output = JSON.stringify(data);
        response.write(output);
        response.end("<h2>Palaa ekalle sivulle <a href='/'>tästä</a></h2>");
    }
    
    });



var port = process.env.PORT || 3000;
server.listen(port);
console.log("serveri is running at http://localhost:%d", port);