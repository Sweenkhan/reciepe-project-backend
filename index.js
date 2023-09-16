import express from "express"
import connection from "./db/connection.js";
import cors from "cors";
import reciepe from "./models/reciepeSchema.js";



const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: "http://localhost:5173" }))



app.post("/home", async (req, res) => {
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





connection
    .then(() => {
        app.listen(8000, () => {
            console.log("server is running on port 8000")
        })
    })
