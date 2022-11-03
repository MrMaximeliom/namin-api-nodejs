import express  from "express";

import {getNouns,getSingleNoun,deleteNoun,createNoun, updateNoun} from "../controllers/nounsController";

const nounsRouter = express.Router();

// GET all nouns
nounsRouter.get("/",getNouns)

// GET a single noun
nounsRouter.get("/:id",getSingleNoun)

// POST a noun
nounsRouter.post("/",createNoun)

// UPDATE a noun
nounsRouter.patch("/:id",updateNoun)

// DELETE a noun
nounsRouter.delete("/:id",deleteNoun)

export default nounsRouter