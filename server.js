var express = require("express");
var path = require("path");

var app = express();
var assets = path.join(__dirname, 'assets');


app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static', express.static('assets'))




var PORT = process.env.PORT || 3000;

var submissions = []

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, "questionnaire.html"));
});

app.get("/result", function(request, response){
    response.sendFile(path.join(__dirname, "results.html"));
});

app.get("/static/loading", function(request, response){
    response.sendFile(path.join(__dirname, "loading.gif"));
});

app.get("/static/cereal", function(request, response){
    response.sendFile(path.join(assets, "cereal.jpg"))
    // response.sendFile(path.join(__dirname, "cereal.jpg"));
});

app.get("/api/submissions", function(request, response){
    response.json(submissions);
});

app.post("/api/submissions", function(request, response){
    newSubmission = request.body;
    console.log(newSubmission)
    submissions.push(newSubmission)
});

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
})