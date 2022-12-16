// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { friends } from '../../Interface/friends';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<friends | null>
) {
  const paramId =  Number(req.query.friendsId);
  let client = new PrismaClient();
  let friendInfo = await client.friends.findUnique({
      where: {
          id: paramId
      }
  })
  
  res.status(200).json(friendInfo);
}
