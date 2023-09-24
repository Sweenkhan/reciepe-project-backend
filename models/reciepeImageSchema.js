import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    categoryName :{
        type: String,
        required: true
    }, categoryImg :{
        type: String,
        required: true
    }
})


const categoryImage = mongoose.model("categoryImage", imageSchema)

export default categoryImage