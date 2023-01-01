// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  let client = new PrismaClient();
  if(req.method === 'POST') {
    await client.friends.create({
        data:req.body
    })
    return res.status(200).json("추가 완료");
  } else if(req.method === 'DELETE') {
      await client.friends.delete({
        where:req.body
      })
      return res.status(200).json("삭제 완료");
  } else if(req.method === 'PUT') {
    await client.friends.update({
      where: {
        id: Number(req.body.id),
      },
      data : {
        img: req.body.img,
        username : req.body.username,
        birth: req.body.birth,
        phone: req.body.phone
      }
    })
    return res.status(200).json("수정 완료");
  }
}
