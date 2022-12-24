// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { friends } from '../../Interface/friends';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  let client = new PrismaClient();
  if(req.method === 'POST') {
    await client.friends.create({
        data:req.body
    })
  }

  return res.status(200).json("추가 완료");
}
