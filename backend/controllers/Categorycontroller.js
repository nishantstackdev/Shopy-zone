const categorymodel = require("../models/Categorymodel")

const createcategory = async (req, res) => {
    try {
        const { name, slug } = req.body
        if (!name || !slug) {
            res.status(200).json({
                message: "All fields are required",
                success: false
            })
        }
        const category = await categorymodel.findOne({ name })
        if (category) {
            res.status(400).json({
                message: "Data Already Exist",
                success: false
            })
        }

        await categorymodel.create({
            name, slug
        })
        res.status(201).json({
            message: "Data Created Successfully",
            success: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

const getcategory = async (req, res) => {
    try {
        const allcategories = await categorymodel.find()
        res.status(201).json({
            message: "Data found",
            success: true,
            allcategories
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id
        const allcategories = await categorymodel.findById(id)
        res.status(201).json({
            message: "Data found",
            success: true,
            allcategories
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

const updatecategory = async (req, res) => {
    try {
        const { field } = req.body
        const id = req.params.id

        const fields = ["is_home", "is_top", "status", "is_popular"]

        // agar field allowed nahi hai
        if (!fields.includes(field)) {
            return res.status(400).json({
                message: "Bad Request",
                success: false
            })
        }

        const iscategoryexist = await categorymodel.findById(id)

        if (!iscategoryexist) {
            return res.status(404).json({
                message: "Data not found",
                success: false
            })
        }

        await categorymodel.findByIdAndUpdate(
            id,
            { [field]: !iscategoryexist[field] },
            { new: true }
        )

        res.status(200).json({
            message: "Data updated successfully",
            success: true
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

const deletecategory = async (req, res) => {
    try {
        const id = req.params.id
        const iscategoryexist = await categorymodel.findById(id)
        if (!iscategoryexist) {
            res.status(409).json({
                message: "Data not found",
                success: false
            })
        }

        await categorymodel.deleteOne(
            { _id: id }
        )
        res.status(201).json({
            message: "Data deleted successfully",
            success: true
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

module.exports = { createcategory, getcategory, updatecategory, deletecategory, getById }