// 1 initialize npm and install all dependencies
            //              command is npm init
// express, dotenv, cors, mongodb, ejs, nodemon (--save -dev)
            // command is npm install express
// 2 require dependencies in server dependencies
            // (const express = require express)
// 3 delare variables
        //
// create gitignore file and push to github

// 4 connect to MongoDB - add connection string to .env file

// 5 create port
// test Mongo and Port Connection

// 6 set middleware

// 7 create gitignore file

// 8 create public and views folders add main.js and style.css to public and index.ejs to views

// 9 add content to main.js, style.css, and index.ejs

//10 create heroku repo (config vars) for env 
//heroku login
//heroku create app
//echo "web: node server.js> Procfile
// git add . 
// git commit -m "changes"
// git push heroku main

const express = require('express')
const app = express()
//const cors = require('cors')
//require('dotenv').config()
const PORT = 1111

const majorArcana = {
    1:{
        cardFront: "The Fool",
        cardBack: "Beginnings, innocence, spontaneity, a free spirit"
    },
    2: {
        cardFront: "The Fool Reversed",
        cardBack:   "Holding back, recklessness, risk-taking"
    },
    3: {
        cardFront: "The Magician",
        cardBack:   "Manifestation, resourcefulness, power, inspired action"
    },
    4: {
        cardFront: "The Magician Reversed",
        cardBack: "Manipulation, poor planning, untapped talents"
    }, 
    5: { 
        cardFront: "The High Priestess",
        cardBack: "Intuition, sacred knowledge, divine feminine, the subconscious mind"
    },
    6:{
        cardFront: "The High Priestess Reversed",
        cardBack: "Secrets, disconnected from intuition, withdrawal and silence"
    },
    7:{
        cardFront: "The Empress",
        cardBack: "Femininity, beauty, nature, nurturing, abundance"
    }, 
    8:{
        cardFront: "The Empress Reversed",
        cardBack: "Creative block, dependence on others"
    },
    9: {
        cardFront: "The Emperor",
        cardBack: "Authority, establishment, structure, a father figure"
    },
    10: {
        cardFront: "The Emperor Reversed",
        cardBack: "Domination, excessive control, lack of discipline, inflexibility"
    },
    11: {
        cardFront: "The Hierophant",
        cardBack: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions"
    },
    12: {
        cardFront: "The Hierophant Reversed",
        cardBack: "Personal beliefs, freedom, challenging the status quo"
    },
    13: {
        cardFront: "The Lovers",
        cardBack: "Love, harmony, relationships, values alignment, choices"
    },
    14: {
        cardFront: "The Lovers Reversed",
        cardBack: "Self-love, disharmony, imbalance, misalignment of values"
    },
    15: {
        cardFront: "The Chariot",
        cardBack: "Control, willpower, success, action, determination"
    },
    16: {
        cardFront: "The Chariot Reversed",
        cardBack: "Self-discipline, opposition, lack of direction"
    },
    17: {
        cardFront: "Strength",
        cardBack: "Strength, courage, persuasion, influence, compassion"
    },
    18: {
        cardFront: "Strength Reversed",
        cardBack: "Inner strength, self-doubt, low energy, raw emotion"
    },
    19:{
        cardFront: "The Hermit",
        cardBack: "Soul-searching, introspection, being alone, inner guidance"
    },
    20:{
        cardFront: "The Hermit Reversed",
        cardBack: "Isolation, loneliness, withdrawal"
    },
    21:{
        cardFront: "Wheel Of Fortune",
        cardBack: "Good luck, karma, life cycles, destiny, a turning point"
    },
    22:{
        cardFront: "Wheel Of Fortune Reversed",
        cardBack: "Bad luck, resistance to change, breaking cycles"
    },
    23:{
        cardFront: "Justice",
        cardBack: "Justice, fairness, truth, cause and effect, law"
    },
    24:{
        cardFront: "Justice Reversed",
        cardBack: "Unfairness, lack of accountability, dishonesty"
    },
    25:{
        cardFront: "The Hanged Man",
        cardBack: "Pause, surrender, letting go, new perspectives"
    },
    26:{
        cardFront: "The Hanged Man Reversed",
        cardBack: "Delays, resistance, stalling, indecision"
    },
    27:{
        cardFront: "Death",
        cardBack: "Endings, change, transformation, transition"
    },
    28:{
        cardFront: "Death Reversed",
        cardBack: "Resistance to change, personal transformation, inner purging"
    },
    29:{
        cardFront: "Temperance",
        cardBack: "Balance, moderation, patience, purpose"
    },
    30:{
        cardFront: "Temperance Reversed",
        cardBack: "Imbalance, excess, self-healing, re-alignment"
    },
    31:{
        cardFront: "The Devil",
        cardBack: "Shadow self, attachment, addiction, restriction, sexuality"
    },
    32:{
        cardFront: "The Devil Reversed",
        cardBack: "Releasing limiting beliefs, exploring dark thoughts, detachment"
    },
    33:{
        cardFront: "The Tower",
        cardBack: ""
    },
    34:{
        cardFront: "The Tower Reversed",
        cardBack: ""
    },
    35:{
        cardFront: "The Star",
        cardBack: ""
    },
    36:{
        cardFront: "The Star Reversed",
        cardBack: ""
    },
    37:{
        cardFront: "The Moon",
        cardBack: ""
    },
    38:{
        cardFront: "The Moon Reversed",
        cardBack: ""
    },
    39:{
        cardFront: "The Sun",
        cardBack: ""
    },
    40:{
        cardFront: "The Sun Reversed",
        cardBack: ""
    },
    41:{
        cardFront: "Judgement",
        cardBack: ""
    },
    42:{
        cardFront: "Judgement Reversed",
        cardBack: ""
    },
    43:{
        cardFront: "The World",
        cardBack: ""
    },
    44:{
        cardFront: "The World Reversed",
        cardBack: ""
    },
}


//connecting to the database

// returning ejs/html to the root
app.get('/', async (request, response) => {
    try {
        response.sendFile( __dirname + "/public/index.html")
    } catch (error) {
        response.status(500).send({message: error.message})
    }
}) 

app.get('/newCard', async (request, response) =>{
    let math = Math.ceil( Math.random() * 44)
    try { 
        response.json(majorArcana[math])
    } catch (error) {
        response.status(500).send({message: error.message})
    }
}) 

// middleware
app.set("view engine", "ejs") //helps parse ejs
app.use(express.static('public') ) //tells where to go for static files HTML/CSS
app.use(express.urlencoded ( {extended:true} ) ) //how to handle URLs
app.use(express.json() ) //allows use of JSON for objects
//app.use(cors() ) //prevent cross object requests


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT} yay` )
})

