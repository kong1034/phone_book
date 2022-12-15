import type { NextApiRequest, NextApiResponse } from 'next'
//import db from "../../DB/db.json";
import { myprofile } from '../../Interface/myprofile';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<myprofile>
) {
  
  //res.status(200).json(db.myprofile);
}