const express = require("express")
const { createcategory, getcategory, updatecategory, deletecategory, getById } = require("../controllers/Categorycontroller")
const categoryrouter = express.Router()

categoryrouter.post("/create",createcategory)
categoryrouter.get("/",getcategory)
categoryrouter.get("/:id",getById)
categoryrouter.patch("/update/:id",updatecategory)
categoryrouter.delete("/delete/:id",deletecategory)

module.exports = categoryrouter