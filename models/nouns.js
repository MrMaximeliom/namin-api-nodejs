'use strict';

import {Model} from "sequelize";
module.exports = (sequelize,DataTypes) => {
    class Noun extends Model
    {
        static associate(models){
        this.hasOne(models.categories);
        }
    }
    Noun.init({
      
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        english_description:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        arabic_description:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        gender:{
            type:DataTypes.STRING,
            allowNull:false
        }
        
    },{
        sequelize,
        timestamps:true,
        modelName:'nouns'

    })
    return Noun;
}