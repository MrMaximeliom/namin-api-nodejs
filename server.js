import 'dotenv/config';
import express from "express";
import cors from "cors";
import { Sequelize } from 'sequelize';
import db from "./models/index";
import nounsRouter from './routes/nouns';
import categoriesRouter from "./routes/categories"
      
const app = express();
const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    host:process.env.db_HOSTNAME,
    dialect:process.env.DB_DIALECT
})
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));

const router = express.Router()

// routes
app.use("/api/nouns",nounsRouter)
app.use("/api/categories",categoriesRouter)
// starts the server
sequelize.sync().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server now is running on port: ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log(error) 
})
