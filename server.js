const express = require('express')
const app = express()
const MongoClient = require('mongodv').mongoClient
const PORT =  process.env.Port || 8000
require('dotenv').config()

let db, 
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'sample-database-1'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/', (request, response)=>{
    db.collection('sample-database-1').find().sort({likes: -1}).toArry()
    .then(data => {
        response.render('index.ejs', { info: data })
    })
    .catch(error => console.log(error))
})

