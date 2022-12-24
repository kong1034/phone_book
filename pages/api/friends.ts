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

  res.status(200).json("추가 완료");
  res.status(500).json("500 에러입니다.");
}
