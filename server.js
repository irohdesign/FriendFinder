// include express and path packages

const express = require("express");
const app = express();

const path = require("path");

// require suitor info

const suitor = require("./data/friends.js");

// PORT for both local and heroku
var PORT = process.env.PORT || 3000;


console.log(suitors);

// set up express to handle data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// routes

// GET route to home which displays the home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"))
});


// GET route to survey that displays the survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/survey.html"))
});

// route to show all objects in suitors array

app.get("/api/all", function(req, res) {
    res.json(suitors);
})

// convert user's results into simple array : [4, 5, 6, 7, 8, 8, etc]

// compare the difference between user's scores against those from other users, question my question

    // add up differences to calculate 'totalDifference'

    // use absolute value of differences, that way there's no negative solutions

    // closest match is the user with the lowest totalDifference

// display user's result in a modal pop-up
    
    // modal displays both the name and picture of the closest match
    
    // create dynamic img with the src being the photo method of the user's object


// start server

app.listen(PORT, function() {
    console.log(`Server is running at ${PORT}`);
})