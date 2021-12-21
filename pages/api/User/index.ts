import { User } from "../../../data";
import { data } from "../../../data";
import type { NextApiRequest, NextApiResponse } from "next";
export interface Data {
  data: User[];
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json({ data });
  } else {
    res.status(405);
    res.end();
  }
}
