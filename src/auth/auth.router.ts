import express, { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { signJwt, verifyJwt } from '../middleware/auth.middleware'
import * as AuthService from "./auth.service";

export const authRouter = express.Router();

authRouter.post("/in", async (req: Request, res: Response) => {
  try {
    let { email, password } = req.body;
    
    let foundUser = await AuthService.find({ email });
    if (!foundUser) throw new Error('user not found');
    
    const passwordValid = await bcrypt.compare(password, foundUser.password);
    if (!passwordValid) throw new Error('password not valid');

    const token = signJwt({
      id: foundUser._id,
      email: foundUser.email,
      first_name: foundUser.first_name,
      last_name: foundUser.last_name,
      picture: foundUser.picture
    });

    res.status(200).send({ token });
  } catch (error) {
    
    console.log('endpoint: /auth/in', error);
    res.status(401).send(error.message);
  }
});

authRouter.post("/up", async (req: Request, res: Response) => {
  try {
    let { email, first_name, last_name, picture, password } = req.body;
    let newUser = await AuthService.create({ email, first_name, last_name, picture, password });
    const token = signJwt({
      id: newUser._id,
      email: newUser.email,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      picture: newUser.picture
    });

    res.status(200).send({ token });
  } catch (error) {

    console.log('endpoint: /auth/up', error);
    res.status(400).send(error.message);
  }
});
