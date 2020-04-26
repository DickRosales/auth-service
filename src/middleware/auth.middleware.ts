import jwt from 'jsonwebtoken'
import * as dotenv from "dotenv";

dotenv.config();

export const verifyJwt = (token: string) => {
  try {
    const decoded = jwt.verify(token, 'secret');

    // const token = req.header("Authorization")?.split(' ')[1];
    // if(token) {
    //   verifyJwt(token);
    // }

    console.log(decoded);
  } catch(error) {
    console.log(error);
  }
}

export const signJwt = (data: any) => jwt.sign({ ...data }, 'secret', { expiresIn: '1h' });