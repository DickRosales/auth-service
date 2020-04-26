import express, { Request, Response } from "express";
import { verifyJwt } from '../middleware/auth.middleware'
import * as AssetService from "./asset.service";

export const AssetRouter = express.Router();

AssetRouter.post('/create', async (req: Request, res: Response) => {
  try {
    let { upc, ean, type, release_title, song_title, artUrl, fileUrl } = req.body;

    // upc: String,
    // ean: String,
    // type: String,
    // release_title: String,
    // song_title: String,
    // artUrl: String,
    // fileUrl: String,
    // metadata: {
    //   artist: [ String ],
    //   songwriter: [ String ],
    //   label: [ String ],
    //   lyrics: String
    // },
    // rights: [ String ]

    res.status(200).send({ test: 'hi' });
  } catch (error) {
    
    console.log('endpoint: /auth/in', error);
    res.status(404).send(error.message);
  }
});
