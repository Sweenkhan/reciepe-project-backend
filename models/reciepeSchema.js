import mongoose from "mongoose";

const reciepeSchema = new mongoose.Schema({
    mealId : {
        type:String,
        required: true,
        unique: true 
    },
    area: {
        type:String,
        required: true,
        unique: false 
    },
    category: {
        type:String,
        required: true,
        unique: false
    }, 
    ingredients: {
        type: Array,
        required: true,
        unique: false
    },
    measurMents: {
        type: Array,
        required: true,
        unique: false
    },
    instruction: {
        type: String,
        required: true,
        unique: false
    },
    reciepeName: {
        type: String,
        required: true,
        unique: false
    },
    youtubeLink: {
        type: String,
        required: true,
        unique: false
    }, 
    mealImage: {
        type: String,
        required: true,
        unique: false
    }

})


const reciepe = mongoose.model("reciepe", reciepeSchema)

export default reciepe;