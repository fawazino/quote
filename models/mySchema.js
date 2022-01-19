const mongoose = require ('mongoose')
const Schema = mongoose.Schema

myQuotes = new Schema({
    quote:{
        type: String,
        required: true
    },
    author:{
        type: String,
        require: true
    }, color:{
        type: String
    }

} , {timestamps: true})

const Quote = mongoose.model('Quote', myQuotes)
module.exports = Quote
