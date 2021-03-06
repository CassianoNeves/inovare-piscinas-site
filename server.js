(function() {
	"use strict";

	var express = require("express"),
		port = 8000,
	    app = express(),
	 	http = require("http").Server(app);

	app.use(express.static("dist"));

	app.get("/", function(req, res){
	  res.sendFile(__dirname + "/dist/index.html");
	});

	http.listen(port, function(){
		console.log("-------------------------------");
		console.log("SERVIDOR INICIADO");
		console.log(new Date().toUTCString());
		console.log("PORTA: " + port);
		console.log("-------------------------------");
	});

})();
