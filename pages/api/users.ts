// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { withAuth } from "../../middleware/withProtect";

type Data = {
  message: string;
};


const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    console.log("tokennnnnnnnnn", req.cookies);
    res.json({ message: "ok" });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
