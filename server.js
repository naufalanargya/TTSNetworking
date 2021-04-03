const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const leaderboardScheme = require("./models/leaderboardScheme");

dotenv.config();
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

//connecting to db
mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log("Connected to db!");
    app.listen(3000, () => console.log("Server Up and running"));
});

//POST METHOD w database
app.post('/newdata', async (req, res) => {
    const leaderboardNewListing = new leaderboardScheme({name: req.body.name, time: req.body.time});
    try {
        await leaderboardNewListing.save();
        console.log(req.body);
        res.redirect("/leaderboard");
    } 
    catch (err) {
        res.redirect("/leaderboard");
    }
});

app.route("/newdata/:name/:time").get((req, res) => {
    const leaderboardNewListing = new leaderboardScheme({name: req.params.name, time: req.params.time});
    try {
        leaderboardNewListing.save();
        console.log(req.body);
        res.redirect("/leaderboard");
    } 
    catch (err) {
        res.redirect("/leaderboard");
    }
});


// // DELETE METHOD w database
app.route("/remove/:id").get((req, res) => {
    const id = req.params.id;
    leaderboardScheme.findByIdAndRemove(id, err => {
        if (err) return res.send(500, err);res.redirect("/leaderboard");
    });
});

// UPDATE METHOD w database
app.get("/leaderboard", (req, res) => {
    leaderboardScheme.find({}, (err, list) => {
        res.render("leaderboard.ejs", { leaderboardlistings: list });
    }).sort({time: 1});
});


//ngirim page2 home sm tts
app.get("/", (req, res) => {
    res.render("home.ejs")
});

app.get("/home", (req, res) => {
    res.render("home.ejs")
});

app.get("/tts", (req, res) => {
    res.render("tts.ejs")
});

app.get("/tts2", (req, res) => {
    res.render("tts2.ejs")
});

app.get("/tts3", (req, res) => {
    res.render("tts3.ejs")
});

app.get("/final", (req, res) => {
    res.render("final.ejs")
});