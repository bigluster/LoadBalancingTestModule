var https = require('https');
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(app.router);

app.post('/loadbalancing/prioritize', function (req, res) {
      console.log("Request for prioritisation recieved");
	  console.log(new Date().toUTCString()+"\n App: "+req.body.AppName+"\n Server list: "+req.body.QlikSenseEngines);
	  console.log("User:"+req.headers['x-qlik-user']+"\n");
	  var responseObj={};
	  responseObj.AppName=req.body.AppName;
	  //Prioretise the engines in the list
	  var servers=prioretiseEngines(req.body.QlikSenseEngines);
	  responseObj.QlikSenseEngines=servers;
	  console.log("Responded with prioritisation\n");
	  console.log("App: "+req.body.AppName+"\n Prioretized server list: "+servers);
	  res.send(JSON.stringify(responseObj));
 });

 function prioretiseEngines(serverlist) {
	//Randomly shuffle the engines around
	return serverlist.sort(function() { return 0.5 - Math.random();});
 }
 

//Server options to run an HTTPS server
var httpsoptions = {
    pfx: fs.readFileSync('Server.pfx'),
    passphrase: 'test'
};

//Start listener
https.createServer(httpsoptions, app).listen(8187);



