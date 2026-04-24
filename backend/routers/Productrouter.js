const express = require("express")
const fileupload = require("express-fileupload")
const { createproduct, getProduct, getProductById, deleteProduct, updateProduct, editbrand } = require("../controllers/productcontroller.js")
const ProductRuter = express.Router()


ProductRuter.post("/create", fileupload({ createParentPath: true }), createproduct)
ProductRuter.get("/", getProduct)
ProductRuter.get("/:id", getProductById)
ProductRuter.delete("/delete/:id", deleteProduct)
ProductRuter.patch("/update/:id", updateProduct)
ProductRuter.put("/edit/:id", fileupload({ createParentPath: true }), editbrand)

module.exports = { ProductRuter }