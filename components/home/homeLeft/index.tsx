import React from "react";
import UserInfo from "../homeRight/UserInfo";
import NewUesrs from "./NewUsers";
import Requests from "./Requests";

const HomeLeft = () => {
  return (
    <div className="sticky top-24 h-full space-y-8 flex-1 flex-col max-w-[350px] hidden md:flex">
      {true && <Requests />}
      <NewUesrs />
    </div>
  );
};

export default HomeLeft;
