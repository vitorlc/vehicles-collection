require("dotenv/config")

const express = require("express");
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Connected Database'))

const port = process.env.PORT || 3000;

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('short'))
app.use(express.json())
app.use('/api', routes)

app.listen(port, () => console.log(`listen on ${port}`));