import { NextApiHandler } from "next";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import Users from "./../model/UserModel";

const secret = process.env.NEXTAUTH_SECRET;

export const withAuth =
  (f: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const token = await getToken({ req, secret });

      if (token?.sub) {
        const user = await Users.findOne({
          _id: token.sub,
        });
        // @ts-ignore
        req.user = user;
        return f(req, res);
      } else if (req.query?.id) {
        const user = await Users.findOne({
          _id: req.query?.id,
        });
        // @ts-ignore
        req.user = user;
        return f(req, res);
      } else {
        return res.status(403).send("Forbidden");
      }
    } catch (error) {
      console.log(error);
    }
  };
