var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, "questionnaire.html"));
});

app.get("/result", function(request, response){
    response.sendFile(path.join(__dirname, "results.html"));
});

app.get("/:image", function(request, response){
    response.sendFile(path.join(__dirname, + image));
});

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
})