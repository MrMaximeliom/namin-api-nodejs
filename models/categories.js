'use strict';

import {Model} from "sequelize";
module.exports = (sequelize,DataTypes) =>{
    class Category extends Model{
     static associate(models)
     {
        // should match modelName string 
        this.belongsTo(models.nouns)
     }

    }
    Category.init({
      
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        english_desvription:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        arabic_description:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    },
    {
      sequelize,
      modelName:'categories',
      timestamps:true , 
    })
    return Category;
}