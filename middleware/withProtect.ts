import { NextApiHandler } from "next";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import { getCsrfToken, getSession } from "next-auth/react";
import connnectDB from "../utils/connectDB";
import Users from "./../model/UserModel";
import jwt_decode from "jwt-decode";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import axios from "axios";

const secret = process.env.NEXTAUTH_SECRET;
connnectDB();
export const withAuth =
  (f: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const token = await getSession({req})
      // const decoded = await jwt_decode(token);
      console.log("tokennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",token);
      return true;
      // if (token?.sub) {
      //   const user = await Users.findOne({
      //     _id: token.sub,
      //   });
      //   // @ts-ignore
      //   req.user = user;
      //   return f(req, res);
      // } else if (req.query?.id) {
      //   const user = await Users.findOne({
      //     _id: req.query?.id,
      //   });
      //   // @ts-ignore
      //   req.user = user;
      //   return f(req, res);
      // } else {
      //   return res.status(403).send("Forbidden");
      // }
    } catch (error) {
      console.log(error);
    }
  };
