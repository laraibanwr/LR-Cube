import express from 'express';
import { registerUser, loginUser, removeUser, createCheckoutSession } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.delete('/remove', removeUser);
userRouter.post('/create-checkout-session', createCheckoutSession);

export default userRouter;
