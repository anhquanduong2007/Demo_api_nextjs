import { User } from "../../../data";
import { data } from "../../../data";
import type { NextApiRequest, NextApiResponse } from "next";
export interface Data {
  user?: User;
  message?: string;
  newData?: User[];
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const { id } = req.query;
    const user: User | undefined = data.find((item) => item.id == Number(id));
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(200).json({ message: "Không tìm thấy User" });
    }
  } else if (req.method === "PUT") {
    console.log(req.query);
    const { id } = req.query;
    const { name, username, email, address } = req.body;
    const newData: User[] = data.filter((item) => item.id !== Number(id));
    const editUser: User = {
      id: Number(id),
      name,
      username,
      email,
      address,
    };
    newData.push(editUser);
    res.status(200).json({ newData });
  } else {
    res.status(405);
    res.end();
  }
}
