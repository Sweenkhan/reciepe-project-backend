import express from "express";
import connection from "./db/connection.js";
import cors from "cors";
import reciepeRoute from "./routes/reciepeRoute.js"; 
import creatNodeMail from "./nodemail/nodemailer.js";

const app = express();

// Apply CORS middleware before any other route handling middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(reciepeRoute);

app.get("/", async (req, res) => {
  // res.status(200).sendFile(__dirname + "main.js")
});

app.post("/contact", creatNodeMail);


connection.then(() => {
  app.listen(8000, () => {
    console.log("server is running on port 8000");
  });
});
