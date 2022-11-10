// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { getToken } from "next-auth/jwt";
import { withAuth } from "../../../middleware/withProtect";
// import { withAuth } from "../../middleware/withProtect";



const secret = process.env.NEXTAUTH_SECRET;

type Data = {
  user: {} | any;
};

  function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

//   res.status(200).json({ user: req.user });
}


export default withAuth(handler)