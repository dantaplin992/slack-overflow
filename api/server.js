const express = require('express')
const app = express()
const path = require("path")
const cors = require('cors')

app.use(cors({
  origin: '*',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: true,
  credentials: true
}))

app.use(express.json())

const sessionsRouter = require("./routes/sessions")
const homeRouter = require('./routes/home')
const messagesRouter = require('./routes/messages')
const usersRouter = require('./routes/users')

app.set('view engine', 'ejs')

app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))

app.use('/', homeRouter)
app.use('/messages', messagesRouter)
app.use("/sessions", sessionsRouter)
app.use('/users', usersRouter)

module.exports = app
