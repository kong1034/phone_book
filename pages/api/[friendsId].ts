// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
//import db from "../../DB/db.json";
import { friends } from '../../Interface/friends';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  //   const query = req.query;
  //   const id = query;
  // res.status(200).json(db.friends[Number(id.friendsId)-1]);
}
