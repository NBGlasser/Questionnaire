var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var submissions = []

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, "questionnaire.html"));
});

app.get("/result", function(request, response){
    response.sendFile(path.join(__dirname, "results.html"));
});

app.get("/loading", function(request, response){
    response.sendFile(path.join(__dirname, "loading.gif"));
});

app.get("/cereal", function(request, response){
    response.sendFile(path.join(__dirname, "cereal.jpg"));
});

app.get("/api/submissions", function(request, response){
    response.json(submissions);
});

app.post("/api/submissions", function(request, response){
    newSubmission = request.body;
    submissions.push(newSubmission)
});

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
})