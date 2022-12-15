// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { friends } from '../../Interface/friends';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<friends[]>
) {
  // console.log(req.body)
  // res.status(200).json(db.friends);
}
