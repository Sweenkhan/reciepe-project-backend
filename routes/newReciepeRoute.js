import express from "express";
import { config } from "dotenv";
import reciepe from "../models/reciepeSchema.js";
import categoryImage from "../models/reciepeImageSchema.js";

config()
const router = express.Router()


//==========================================  SENDING ALL RECIEPE DETAIL TO MONGODB SERVER==============================//
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



//--------------------------------sending category image to mongodb------------------------------------//
router.post("/images", async(req, res) => {


    const allImages = await req.body.allImages 

     for(const data of allImages){

        const saveImage = new categoryImage({
                    categoryName: data.name,
                    categoryImg: data.image
                })
    
                 const savedImage =   await saveImage.save()
            }
  
    res.send({status: 200, message: "imagesSaved ho gayi"}) 

})


export default router
