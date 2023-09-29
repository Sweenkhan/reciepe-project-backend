 import express from "express";
 import categoryImage from "../models/reciepeImageSchema.js";
 import reciepe from "../models/reciepeSchema.js";

 const router = express.Router()


 router.get("/getAllCategory", async(req, res)=> {
 
    let allCategory = await categoryImage.find({})
    console.log("heeeeeelo")
    // console.log(allCategory)
    res.send({status: 200, message: "getting all category.", allCategory: allCategory})

})  


router.get("/getSelectedCategory/:name", async(req, res) => {

    console.log(req.params.name)
    let category = req.params.name

   let selectedCatagoryData =  await reciepe.find({category})

   console.log(selectedCatagoryData)
    res.send({status: 200, message: "getting selected category data.", selectedCatagoryData})

})

export default router