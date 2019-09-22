const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const Question = require("./models/question");

const app = express();

mongoose.connect("mongodb+srv://moha:v2WznziYN0g8qBy3@cluster0-md7iv.mongodb.net/game", { useNewUrlParser: true})
    .then(() => {
        console.log("Connected To DataBase!");
    }).catch((error) => {
        console.log("Connection Faild", error)
    })

app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post("/api/questions", (req, res, next) => {
  console.log(req.body)
  const questions = new Question({
    header: req.body.header,
    answers: req.body.answers
  });
  console.log(questions.answers)
  questions.save().then(result => {
    res.status(200).json({
      message: "Added Successfully",
      questions: questions
    })
  })
})

app.get("/api/questions", (req, res, next) => {
  
    
    Question.find().then( documents => {
        // console.log(documents);
        res.status(200).json({
        questions: documents
        })
    })
})



module.exports = app;