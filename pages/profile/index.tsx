import { GetServerSideProps } from "next";
import { getToken } from "next-auth/jwt";
import React from "react";
import MenuHomeRight from "../../components/home/homeRight/Menu";
import Navigation from "../../components/layoutPublic/Navigation";
import InfoProfile from "../../components/profile/InfoProfile";
import ProfileImage from "../../components/profile/ProfileImage";
import TabsProfile from "../../components/profile/TabsProfile";
import { userType } from "../../typing";
import { getUserById } from "../../utils/API";
const profile = ({ user }: userType) => {
  return (
    <div className="bg-white min-h-screen h-full !p-0">

    <Navigation>
      <div className=" md:w-[80%]  md:pt-10 flex gap-10 md:px-10">
        <div className="flex-[1] sticky h-full top-10 hidden md:block">
          <MenuHomeRight />
        </div>
        <div className="!flex-[2]">
          <ProfileImage user={user} />
          <InfoProfile user={user} />
          <TabsProfile />
        </div>
      </div>
    </Navigation>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps =
  async (ctx) => {
    const token: any = await getToken({ req: ctx.req });
    if (!token)
      return {
        redirect: {
          destination: "/auth/signin",
          permanent: false,
        },
      };
    const res = await getUserById(token.sub);
    if (!res.data.user)
      return {
        redirect: {
          destination: "/signin",
          permanent: false,
        },
      };
    return {
      props: {
        user: res.data.user,
      },
    };
  };
export default profile;
