import { retrieveData } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  code: number;
  status: string;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await retrieveData("products");

  res
    .status(200)
    .json({ code: 1, status: "Success get list data products", data: data });
}
