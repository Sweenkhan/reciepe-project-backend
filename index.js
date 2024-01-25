import express from "express"
import connection from "./db/connection.js";
import cors from "cors";   
import reciepeRoute from "./routes/reciepeRoute.js";
// import multer from "multer";

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: "http://localhost:5173" }))

app.use(reciepeRoute) 

app.get("/", async(req, res) => {
    // res.status(200).sendFile(__dirname + "main.js")
  });



// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//           return cb(null, "./images/photos")
//     },filename: function(req, file, cb){
//         return cb(null, `${Date.now()}_${file.originalname}`)
//     }
// })  
// const upload = multer({storage})

app.post("/contact", (req, res) => { 
    console.log(req.body)
    res.send({status: 200, message: "everything is done!"})
})  

connection
    .then(() => {
        app.listen(8000, () => {
            console.log("server is running on port 8000")
        })
    })
