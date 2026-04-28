let jwt = require('jsonwebtoken')
const Usermodel = require('../models/Usermodel')
const protect = async (req, res, next) => {
    let token = null
    if (req.cookies && req.cookies.jwt) {
        token = req.cookies.jwt
    }

    if (!token) {
        return res.status(401).json({
            message: "Token required",
            success: false
        })
    }

    let decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.user = await Usermodel.findOne({ _id: decoded.id })
    if (!req.user) {
        return res.status(403).json({
            message: "User not found",
            success: false
        })
    }
    next()
}

function authorize(...roles) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(403).json({
                message: "User not found",
                success: false
            })
        }
        if (!roles.includes(req.user.role)) {
            return res.status(401).json({
                message: "Not Authorized",
                success: false
            })
        }
        next()
    }
}
module.exports = { protect, authorize }