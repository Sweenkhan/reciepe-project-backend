import express from "express";
import { config } from "dotenv";
import reciepe from "../models/reciepeSchema.js";

config()

const router = express.Router()

router.post("/reciepe", async (req, res) => {

    try {
   
    const { mealId, area, category, ingredients, measurMents, instruction, reciepeName, youtubeLink, mealImage } = req.body
    
        const newReciepe = new reciepe({
            mealId,
            area,
            category,
            ingredients,
            measurMents,
            instruction,
            reciepeName,
            youtubeLink, 
            mealImage
        })

       const savedReciepe =  await newReciepe.save()

       if(savedReciepe){

           res.send({ status: 200, message: "saved Reciepe" })
       }else{
           res.send({ status: 200, message: "failed to add this reciepe." })
       }
    } 

    catch{
        res.send({ status: 202, message: "allready reciepe saved." })

    }

    
})


export default router