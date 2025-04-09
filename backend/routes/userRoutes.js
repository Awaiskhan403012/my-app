import express from "express";
import userauth from "../middleware/userauth.js";
import { getuserData } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.get('/data', userauth, getuserData);

export default userRouter;