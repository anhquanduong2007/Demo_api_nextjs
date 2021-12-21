import { User } from "../../data";
import { data } from "../../data";
import type { NextApiRequest, NextApiResponse } from "next";
export interface Data {
  data: User[];
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.method);
  if (req.method === "POST") {
    const { id, name, username, email, address } = req.body;
    const newUser: User = {
      id,
      name,
      username,
      email,
      address,
    };
    res.status(200).json({ data });
  } else {
    res.status(405);
    res.end();
  }
}
