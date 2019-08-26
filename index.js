import express from "express"
import consign from "consign"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json())

consign()
    .include("libs/config.js")
    .then("db.js")
    .then("libs/middleware.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);