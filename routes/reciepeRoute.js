import express from "express";
import { config } from "dotenv";
import reciepe from "../models/reciepeSchema.js";

config()

const router = express.Router()

router.get("/home", async (req, res) => {
    const { mealId, area, category, ingredients, measurMents, instruction, reciepeName, youtubeLink, mealImage } = req.body
    //    const {mealId, area, category} = req.body;

    
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

           res.send({ status: 200, message: "reciepe saved" })
       }else{
           res.send({ status: 200, message: "failed to add this reciepe." })
       }

    
    
})


export default router