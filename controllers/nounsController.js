const db = require("../models")

const Noun = db.nouns
 
// GET all nouns 
const getNouns = async (req,res)=>{
const nouns = await Noun.findAll();
res.status(200).json(nouns);
}

// GET single user
const getSingleNoun = async(req,res) =>{

    const noun = await Noun.findByPk(req.params.id)

    if(noun)
    {
        return res.status(200).json(noun);
    }
    return res.status(404).json({message:"Noun not found"})
}

// create new noun
const createNoun = async (req,res) =>{
    try{
        const isNounAvilable = await Noun.findOne({
            where:{
                name:req.body,name
            }
        })
        if(isNounAvilable)
        {
            return res.status(400).json({error:"Noun is already exists!"});
        }
        const noun = await Noun.build({ ...req.body})
        await noun.save()
        return res.status(200).json(noun)

    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

// update a noun

const updateNoun = async (req,res) =>{
    
    const noun = await Noun.findByPk(req.params.id);

    if(noun){

        try{
            noun.update({
                ...req.body
            })
            await noun.save()
            return res.status(200).json({message:"Noun updated Successfully!",noun})

        }
        catch(error){
            res.status(400).json({error:error.message})
        }
    }
}

// DELETE a noun

const deleteNoun = async(req,res) =>{

    const noun =  await Noun.findByPk(req.params.id)

    if(noun){
        try{
            await noun.destroy();
            return res.status(200).json({message:"Noun deleted successfully!"})

        }
        catch(error){
            return res.status(500).json({error:error.message})
        }
    }
}


module.exports = {
    getNouns,getSingleNoun,updateNoun,deleteNoun,createNoun
}

