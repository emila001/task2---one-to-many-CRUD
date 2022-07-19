const express = require('express')
const mongoose = require('mongoose')

const Books = require("./route/books")

mongoose.connect('mongodb://localhost:27017/Database', {useUnifiedTopology: true, useNewUrlParser: true})

const app = express()

let allBooks = [{
  title: "The idiot",
  author: "Dostoevsky",
  price: 3
}]

app.post('/', (req, res, next) => {
  console.log(req.body)
  const newBook = req.body
  allBooks.push(newBook)
  res.status(200).json(newBook)
})

app.get('/', (req, res, next) => {
  res.status(200).json(allBooks)
})

const port = 8080

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
