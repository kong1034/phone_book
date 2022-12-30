// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { friends } from '../../Interface/friends';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let client = new PrismaClient();
  
  if(req.method === 'DELETE') {
      await client.friends.delete({
        where:req.body
      })
      let list = await client.friends.findMany();
      return res.status(200).json(list);
  } 
}
