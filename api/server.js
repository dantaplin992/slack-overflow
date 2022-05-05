const express = require('express')
const app = express()
const path = require("path")
const cors = require('cors')

//const { default: UserAuth } = require('../client/src/components/userAuth/UserAuth');
const sessionsRouter = require("./routes/sessions")

app.use(cors({
  origin: 'http://localhost:3000',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: true,
  credentials: true
}))

app.use(express.json())

const homeRouter = require('./routes/home')
const messagesRouter = require('./routes/messages')

app.set('view engine', 'ejs')

app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))

app.use('/', homeRouter)
app.use('/messages', messagesRouter)
app.use("/sessions", sessionsRouter)

module.exports = app
