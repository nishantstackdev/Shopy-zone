const express = require("express")
const { createcategory, getcategory, updatecategory, deletecategory, getById, editcategory } = require("../controllers/Categorycontroller")
const categoryrouter = express.Router()
const fileUpload = require("express-fileupload")

categoryrouter.post("/create", fileUpload({ createParentPath: true }), createcategory)
categoryrouter.get("/", getcategory)
categoryrouter.get("/:id", getById)
categoryrouter.patch("/update/:id", updatecategory)
categoryrouter.put("/update/:id", fileUpload({ createParentPath: true }), editcategory)
categoryrouter.delete("/delete/:id", deletecategory)

module.exports = categoryrouter