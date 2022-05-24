// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface Leads {
  name: String;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Leads>
) {
  res.status(200).json({ name: 'foo' });
}
