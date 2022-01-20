const express = require ('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const Quote = require('./models/mySchema')
const port = process.env.PORT || 3000

const app = express()

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.urlencoded({extended: true}))

dotenv.config()
mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    app.listen(port, ()=>{
        console.log(`server running on port ${port}`)
    })
})
.catch(err => console.log(err))

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req,res)=>{
    Quote.find()
    .then((result)=>{
        res.render('index',  {quote: result})
    })
    .catch((err)=>{console.log(err)})
    
})
app.get('/create', (req,res)=>{
    res.render('create')
})
app.post('/quotes', urlencodedParser, (req,res)=>{
    const quote = new Quote(req.body)
    quote.save()
    .then (results =>{
        res.redirect('/')
    })
    .catch(err=>{
        console.log(err)
    })
}) 
app.get('/quotes', (req,res)=>{
   
    
})

