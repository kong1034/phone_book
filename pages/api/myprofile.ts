import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { myprofile } from '../../Interface/myprofile';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<myprofile | null>
) {
  let client = new PrismaClient();
  let myprofile = await client.myprofile.findUnique( {
    where : {
      id : 1
    }
  });
  return res.status(200).json(myprofile);
}