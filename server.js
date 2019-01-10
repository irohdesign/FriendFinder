// include express and path packages

const express = require("express");
const app = express();

const path = require("path");

// PORT for both local and heroku
var PORT = process.env.PORT || 3000;

// set up express to handle data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());



// convert user's results into simple array : [4, 5, 6, 7, 8, 8, etc]

// compare the difference between user's scores against those from other users, question my question

    // add up differences to calculate 'totalDifference'

    // use absolute value of differences, that way there's no negative solutions

    // closest match is the user with the lowest totalDifference

// display user's result in a modal pop-up
    
    // modal displays both the name and picture of the closest match
    
    // create dynamic img with the src being the photo method of the user's object