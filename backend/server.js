require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const categoryrouter = require('./routers/Categoryrouter')
const { BrandRouter } = require('./routers/Brandrouter')
const server = express()
server.use(cors({ origin: "http://localhost:3000" }))
server.use(express.json())
server.use("/category", categoryrouter)
server.use("/brand", BrandRouter)
server.use(express.static("public"))

mongoose.connect(process.env.DATABASE_URL).then(
    () => {
        console.log("Db Connected")
        server.listen(
            process.env.PORT,
            () => {
                console.log("Server Started")
            }
        )
    }
).catch(
    () => {
        console.log("DB not connected")
    }
)


