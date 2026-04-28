require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const categoryrouter = require('./routers/Categoryrouter')
const { BrandRouter } = require('./routers/Brandrouter')
const { ColorRouter } = require('./routers/Colorrouter')
const { ProductRuter } = require('./routers/Productrouter')
const { UserRouter } = require('./routers/Userrouter')

const server = express()

server.use(cors({ origin: "http://localhost:3000" }))
server.use(express.json())

server.use("/category", categoryrouter)
server.use("/brand", BrandRouter)
server.use("/color", ColorRouter)
server.use("/product", ProductRuter)
server.use("/user", UserRouter)

server.use(express.static("public"))

mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("Db Connected")

        server.listen(process.env.PORT, () => {
            console.log("Server Started on port", process.env.PORT)
        })

    })
    .catch((err) => {
        console.log("DB not connected", err)
    })