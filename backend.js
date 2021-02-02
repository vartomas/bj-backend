const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

const historyRoute = require('./routes/historyRoute')
const authRoute = require('./routes/auth')

app.use(cors())
app.use(express.json())

app.use('/history', historyRoute)
app.use('/user', authRoute)

mongoose.connect(
  process.env.DB_CONNECTION_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('prisijungta sekmingai')
  }
)

app.listen(process.env.PORT)
