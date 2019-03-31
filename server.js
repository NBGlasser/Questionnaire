var express = require("express");
var path = require("path");

var app = express();
var assets = path.join(__dirname, 'assets');


app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static', express.static('assets'))




var PORT = process.env.PORT || 3000;

var submissions = [{
    name: "Crispy Hexagons",
    pic: "https://img.oola.com/filter:scale/slides/2/7/6/5/5/3/2765539557/0797ae845fe1950221f42a24ee94c200327756dd.png?mw=615",
    q1: 1,
    q2: 1,
    q3: 1,
    q4: 1,
    q5: 1,
    q6: 1,
    q7: 1,
    q8: 1,
    q9: 1,
    q10: 1,
    },
    {
    name: "Pranks",
    pic: "https://img.oola.com/filter:scale/slides/3/9/9/8/6/3/3998634624/7812ae352a4897d6c7a92e6bd44b3b34d6f0deab.jpeg?mw=615",
    q1: 2,
    q2: 2,
    q3: 2,
    q4: 2,
    q5: 2,
    q6: 2,
    q7: 2,
    q8: 2,
    q9: 2,
    q10: 2,
    },
    {
    name: "Bunch O' Cinnamon Squares",
    pic: "https://img.oola.com/filter:scale/slides/3/0/8/4/4/3/3084438369/8911891acf40ae3f2e9d16923fe21858e47050d4.jpeg?mw=615",
    q1: 3,
    q2: 3,
    q3: 3,
    q4: 3,
    q5: 3,
    q6: 3,
    q7: 3,
    q8: 3,
    q9: 3,
    q10: 3,  
    }
]

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