const express = require('express')
const app = express()
const path = require("path");
//const { default: UserAuth } = require('../client/src/components/userAuth/UserAuth');

app.set('view engine', 'ejs')

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.render('index')
})

// app.post('/login', (req, res) => {
//   const username = req.body.username
//   const password = req.body.password
//   User.findOne({ username: username, password: password }, (err, user) => {
//     if (err) { return res.status(500).send(err) }
//     if (!user) { return res.status(401).send(false) }
//     return res.status(200).send(true)
//   })
// })

module.exports = app