const express = require("express")
const { register, login, verifyEmail, resetOtp } = require("../controllers/Usercontroller")


const UserRouter = express.Router()
UserRouter.post("/create",register)
UserRouter.post("/login",login)
UserRouter.post("/verify-otp",verifyEmail)
UserRouter.post("/reset-otp",resetOtp)
module.exports = {UserRouter}