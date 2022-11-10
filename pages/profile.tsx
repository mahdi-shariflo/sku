import { GetServerSideProps } from "next";
import { getToken } from "next-auth/jwt";
import { getCsrfToken, getSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import MenuHomeRight from "../components/home/homeRight/Menu";
import Navigation from "../components/layoutPublic/Navigation";
import InfoProfile from "../components/profile/InfoProfile";
import ProfileImage from "../components/profile/ProfileImage";
import TabsProfile from "../components/profile/TabsProfile";
import { getUserById } from "../utils/API";
const profile = () => {
  return (
    <Navigation>
      <div className=" md:w-[80%]  md:mt-10 flex gap-10 md:px-10">
        <div className="flex-[1] sticky h-full top-10 hidden md:block">
          <MenuHomeRight />
        </div>
        <div className="!flex-[2]">
          <ProfileImage />
          <InfoProfile />
          <TabsProfile />
        </div>
      </div>
    </Navigation>
  );
};

export const getServerSideProps: GetServerSideProps =
  async (ctx) => {
    const token = await getToken({ req: ctx.req });
    const user = await getUserById(token);
    console.log(token)
    // console.log(user);
    return {
      props: {
        // session: await getSession(context)
      },
    };
  };
export default profile;
