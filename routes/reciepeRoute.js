 import express from "express";
 import categoryImage from "../models/reciepeImageSchema.js";
 import reciepe from "../models/reciepeSchema.js";

 const router = express.Router()


 router.get("/getAllCategory", async(req, res)=> {
 
    let allCategory = await categoryImage.find({})  
    res.send({status: 200, message: "getting all category.", allCategory: allCategory})

})  


router.get("/getSelectedCategory/:name", async(req, res) => {

    console.log(req.params.name)
    let category = req.params.name

    let selectedCatagoryData =  await reciepe.find({category})

    console.log(selectedCatagoryData)
    res.send({status: 200, message: "getting selected category data.", selectedCatagoryData})

})


//-------------------- Search reciepe ---------------------// 
router.get("/searchBar/:inputValue", async(req, res) => {
    
    try{

        let inputVal = req.params.inputValue; 
        const regEx = new RegExp(inputVal, "i");
        
        const data = await reciepe.find({reciepeName: regEx})
        // console.log(data)
        res.send({status: 200, message: "getting searched items", data})

    }catch(error){
        res.send({status: 201, message: "sorry no reciepe"})
    }

})

export default router