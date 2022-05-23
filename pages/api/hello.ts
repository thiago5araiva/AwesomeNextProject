// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface Leads {
  name: String;
  email: String;
  phone: String;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Leads>
) {
  const url =
    "https://console.firebase.google.com/project/awesomewebproject-4dd57/database/awesomewebproject-4dd57-default-rtdb/data/~2F";

  const response = await fetch(url);
  console.log(response);

  res.status(200).json(response);
}
