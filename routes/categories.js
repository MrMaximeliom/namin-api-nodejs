import express from "express"
import {getCategories,
    getSingleCategory,
    createCategory,
    updateCategory,
    deleteCategory} from "../controllers/categoriesController"

const categoriesRouter = express.Router()

// GET all categories
categoriesRouter.get("/",getCategories)

// GET a single category
categoriesRouter.get("/:id",getSingleCategory)

// POST a new category
categoriesRouter.get("/:id",createCategory)

// PATCH category
categoriesRouter.patch("/:id",updateCategory)

// DELETE category
categoriesRouter.delete("/:id",deleteCategory)

export default categoriesRouter;