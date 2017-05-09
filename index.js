var express = require('express')
var bodyParser = require('body-parser')

var server = express()
var port = 8000
// var books = []

server.use(bodyParser.json())


var mongoose = require('mongoose')
var connectionString = 'mongodb://bookes:bookes@ds139725.mlab.com:39725/bookes'
var connection = mongoose.connection

mongoose.connect(connectionString, {
  server: { socketOption: { keepAlive: 300000, connectTimourtMS: 30000 } },
  replset: { socketOption: { keepAlive: 300000, connectTimourtMS: 30000 } }
})

connection.on('error', function (err) {
  console.log('There was and err', err)
})

connection.once('open', function () {
  console.log('We are now connected')
  server.listen(port, function () {
    console.log('Yepp Its working', 'The server is listening on port: ', port)
  })
})


server.get('/', function (req, res, next) {
  res.send('You made it')
})

server.get('/books', function (req, res, next) {
  Book.find({}).then(function (books) {
    res.send(books)
  })
})

server.get('/books/:id', function (req, res, next) {
  var id = req.params.id
  Book.findById(id).then(function (person) {
    res.send(person)
  }).catch(function (e) {
    res.send(e)
  })
})

server.put('/books/:id', function (req, res, next) {
  var id = req.params.id
  var newBook = req.body
  Book.findByIdAndUpdate(id, newBook).then(function(person){
    res.send(newBook)
  })
})

server.delete('/books/:id', function (req, res, next) {
  var id = req.params.id
  books.splice(id, 1)
  res.send('You had Delete It')
})

server.post('/books', function (req, res, next) {
  var newBook = req.body
  Book.create(newBook).then(function (newlyCreatedPerson) {
    res.send(newlyCreatedPerson)
  })

})

//Person in the database
var Schema = mongoose.Schema
var BookSchema = new Schema({
  title: { type: String, required: true },
  publish: { type: Number, required: true },
  rating: { type: Number, required: true },
  aurthor: { type: String, required: true }
})
var Book = mongoose.model('Book', BookSchema)