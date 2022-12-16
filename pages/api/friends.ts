// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { friends } from '../../Interface/friends';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<friends[] | null>
) {
  let client = new PrismaClient();
  let friends = await client.friends.findMany();

  res.status(200).json(friends);
}
