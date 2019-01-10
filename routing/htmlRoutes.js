// include two routes

// GET route to /survey which displays the survey page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/survey"))
});


// default route to home.html that displays the home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"))
});