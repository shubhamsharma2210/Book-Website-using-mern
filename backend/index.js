import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/book.routes.js";
import cors from 'cors'
import userRoute from './routes/user.route.js'



// app configuration
const app = express();

// middleware
app.use(cors())
app.use(express.json())

// env configuration
dotenv.config();

const PORT = process.env.PORT;
const mongodbURL = process.env.MONGODB_URL;

app.get("/", (req, res) => {
  res.send("my name is shubham sharma");
});

// connect mongodb
try {
  mongoose.connect(mongodbURL);
  console.log("connected mongDB");
} catch (error) {
  console.log("Error in mongodb", error);
}

// Routes
app.use("/book", bookRoute);
app.use('/user',userRoute)

// SERVER LISTEN
app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
