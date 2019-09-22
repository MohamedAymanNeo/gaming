const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    header: {type: String, required: true},
    answers: []
});


module.exports = mongoose.model("Question", questionSchema);



// [
//     {

//         answer: {type: String, required: true},
//         // isCorrect: {type: Boolean, required: true}
//     }
// ]