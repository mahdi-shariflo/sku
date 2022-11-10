import React from "react";
import { userSession } from "../../../typing";
import MenuHomeRight from "./Menu";
import UserInfo from "./UserInfo";
interface props {
  user: userSession;
}
const HomeRight = ({ user }: props) => {
  return (
    <div className="sticky top-24 h-full space-y-8 flex-1 flex-col max-w-[350px] hidden md:flex">
      <UserInfo user={user} />
      <MenuHomeRight />
    </div>
  );
};

export default HomeRight;
