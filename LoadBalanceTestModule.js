var https = require('https');
var express=require('express');
var fs = require('fs');

var app = express();

app.configure(function () {
    app.use(express.bodyParser());
    app.use(app.router);
});

app.post('/loadbalancing/prioritize', function (req, res) {
      console.log("Request for prioritisation recieved");
	  console.log(new Date().toUTCString()+" App: "+req.body.AppName+" Server list: "+req.body.QlikViewEngines);
	  console.log(req.headers);
	  var responseObj={};
	  responseObj.AppName=req.body.AppName;
	  //Prioretise the engines in the list
	  var servers=prioretiseEngines(req.body.QlikViewEngines);
	  responseObj.QlikViewEngines=servers;
	  console.log("Responded with prioritisation");
	  console.log("App: "+req.body.AppName+" Prioretized server list: "+servers);
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



