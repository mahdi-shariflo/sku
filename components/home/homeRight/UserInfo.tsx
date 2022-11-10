import React from "react";
import Image from "next/image";
import Logo from "./../../../assest/image/logo.png";
import { useSession } from "next-auth/react";
import { userSession } from "../../../typing";
interface props {
  children?: React.ReactNode;
  user: userSession;
}
const UserInfo = ({ children, user }: props) => {
  console.log(user);
  return (
    <div className="container-card">
      <div className="flex gap-2 text-xs items-center">
        <Image
          width={40}
          height={40}
          src={user.image}
          className="overflow-hidden rounded-lg"
          alt="م"
        />
        <div className="flex flex-col gap-1">
          <p>{user.email.split("@")[0]}</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default UserInfo;
