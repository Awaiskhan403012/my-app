import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectdb from "./config/mongodb.js";
import authrouter from "./routes/authroutes.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
connectdb();

app.use(express.json());
app.use(cors({credentials: true}));
app.use(cookieParser());


//api endpoints

app.use('/api/auth', authrouter);
app.use('/api/user',userRouter);


app.get('/',(req,res) => res.send("api is working"));


app.listen(port, ()=> console.log("Server is on Connected and listneng"));