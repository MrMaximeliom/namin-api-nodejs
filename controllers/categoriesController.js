const db = require("../models")

const Category = db.categories

// GET all categories
const getCategories = async (req,res) =>{
        
    const categories = await Category.findAll();

    if (categories.length != 0)
    {
        return res.status(200).json(categories);
    }
    return res.status(404).json({message:"No categories found!"})
}

// POST a category
const createCategory = async (req,res) =>{
    try{
        const isCategoryNameTaken = await Category.findOne({
            where:{
                name:req.body.name
            }
        })
        if(isCategoryNameTaken){
            return res.status(400).json({message:"category with this name already exists!"})
        } 
        const category = Category.build({ ...req.body })
        await category.save()
        return res.status(200).json(category);

    }
    catch(error){
        return res.status(400).json({error:error.message})
    }
}

// GET a single category
const getSingleCategory = async (req,res) =>{

    const category = await Category.findByPk(req.params.id)

    if(category)
    return res.status(200).json(category)

    return res.status(404).json({message:"Category not found"})
}

// PATCH a category 
const updateCategory = async (req,res) =>{

    try{
        const category = Category.findByPk(req.params.id)
        if(category){
            await category.update({ ...req.body})
            await category.save()
        }
        return res.status(200).json({message:"Category updated successfully!"})

    }
    catch(error){
        return res.status(404).json({error:error.message})
    }
}

// DELETE a category
const deleteCategory = async (req,res) =>{
    const category = await Category.findByPk(req.params.id)

    if(category){
        await category.destroy();
        return res.status(200).json({message:"Category deleted successfully!"})
    }
    return res.status(404).json({error:"Category not found!"})
}


 module.exports =  {
    getSingleCategory,
    getCategories,
    createCategory,
    deleteCategory,
    updateCategory
}