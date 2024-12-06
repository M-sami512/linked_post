import express from 'express'
import { signIn, signUp } from "./users.controller.js";
import CheckEmailExiest from '../../middleware/CheckEmailExist.js';

const userRouter = express.Router()

userRouter.post('/signUp',CheckEmailExiest,signUp)
userRouter.post('/signIn',signIn)



export default userRouter