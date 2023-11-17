import type { NextApiRequest, NextApiResponse } from "next";
import knex from "@/lib/knex/connection";

type Data = {
  code: number;
  status: string;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  const data = await knex.select("*").from("products");

  res
    .status(200)
    .json({ code: 1, status: "Success get list data products", data: data });
}
