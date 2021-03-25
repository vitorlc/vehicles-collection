require("dotenv/config")

const express = require("express");
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const port = process.env.PORT || 3000;

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('short'))
app.use(express.json())

app.listen(port, () => console.log(`listen on ${port}`));