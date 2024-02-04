import express from "express";
import connection from "./db/connection.js";
import cors from "cors";
import reciepeRoute from "./routes/reciepeRoute.js"; 
import creatNodeMail from "./nodemail/nodemailer.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors({ origin: "http://localhost:5173" }));


app.use(cors({
  "origin": "https://bookshelf-8yfg.onrender.com",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
 })); 

app.use(reciepeRoute);

app.get("/", async (req, res) => {
  // res.status(200).sendFile(__dirname + "main.js")
});

 

app.post("/contact", creatNodeMail)



connection.then(() => {
  app.listen(8000, () => {
    console.log("server is running on port 8000");
  });
});
