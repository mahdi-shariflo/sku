// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Users from "../../model/UserModel";
import bcrypt from "bcrypt";
type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      const { email, password, name } = req.body;
      const user = await Users.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ message: "already exists" });
      }

      const newUser = new Users({ email, password ,name});
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(
        newUser.password,
        salt
      );
      await newUser.save();

      //   @ts-ignore
      res.status(201).json({ message: "successfully" ,data:{user:newUser}});
    } catch (error) {
      res.status(500).json({ message: "error" });
    }
  } else {
    res.status(404).json({ message: "Not found" });
  }
}
