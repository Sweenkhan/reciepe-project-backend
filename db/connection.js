import mongoose from "mongoose";
import { config } from "dotenv";
config()

const connection = mongoose.connect("mongodb+srv://sween:sween_1997@cluster1.lw5cggq.mongodb.net/?retryWrites=true&w=majority")

export default connection;

 
