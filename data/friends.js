// app's data as an array of objects

// format of objects in JSON

suitors = [
    {
        "name" : "Ahmed",
        "photo" : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores" : [
            5,
            2,
            1,
            3,
            4,
            5,
            3,
            2,
            3,
            4,
            6
        ]
    }
]

app.post("/add/Suitor", function(req,res) {
    var newSuitor = req.body;
    
})

console.log(suitors);

module.exports.suitors = suitors;
