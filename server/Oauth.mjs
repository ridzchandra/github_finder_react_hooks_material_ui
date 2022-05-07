/** @format */

import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import {
	exchangeCodeForToken,
	sendAccessToken,
} from "./controllers/apiControllers.mjs"

const app = express()
app.use(cors())
express.json()
const dbURI =
	"mongodb+srv://Ridz:test1234@cluster0.qoznw.mongodb.net/github-finder?retryWrites=true&w=majority"
mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(app.listen(5000))
	.catch((err) => console.log(err))

app.get("/api/github/oauth/callback", exchangeCodeForToken)
app.get("/api/github/token", sendAccessToken)
