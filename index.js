import express from "express"
import connection from "./db/connection.js";
import cors from "cors";
import reciepe from "./models/reciepeSchema.js";



const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: "http://localhost:5173" }))



app.post( )





connection
    .then(() => {
        app.listen(8000, () => {
            console.log("server is running on port 8000")
        })
    })
