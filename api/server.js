const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)


// app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send("Hi")
})

server.listen(5000)
server.on("listening", () => {
  console.log("Listening on Port 5000")
});