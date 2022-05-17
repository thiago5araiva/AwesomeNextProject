// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PriceType } from "./types";

const price = [
  {
    id: 1,
    title: "Para Viver",
    price: "869",
    description: ["12 fotos digitais", "1h30 de ensaio", "2 trocas de roupa"],
  },
  // {
  //   id: 2,
  //   title: "Para Ser Especial",
  //   price: "1.260",
  //   description: [
  //     "25 fotos digitais",
  //     "2h de ensaio",
  //     "3 trocas de roupa",
  //     "locação",
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "Para Viver",
  //   price: "2.269",
  //   description: [
  //     "40 fotos digitais",
  //     "3h de ensaio",
  //     "4 trocas de roupa",
  //     "Video Making Off",
  //     "Case para fotos",
  //     "Maquiagem",
  //     "locação",
  //   ],
  // },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PriceType>
) {
  res.status(200).json(price);
}
