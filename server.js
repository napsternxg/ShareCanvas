var express = require("express");
var app = express();

app.use("/", express.static(__dirname + '/templates'));
app.get("/", function(req, res){
	res.sendfile(__dirname+"/templates/index.html");
});

app.listen(8000);
console.log("SharedCanvas server started on port 8000");
