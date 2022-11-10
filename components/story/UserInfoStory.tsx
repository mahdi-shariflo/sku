import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";
const UserInfoStory = () => {
  const router = useRouter();
  const navigateBack = () => {
    router.back();
  };
  return (
    <div className="flex flex-row-reverse justify-between mt-12 px-8 items-center w-full">
      <div className="flex rtl gap-2 text-[13px]  text-white">
        <Avatar />
        <div className="flex flex-col gap-1">
          <p>مهدی شریفلو</p>
          <p className="text-[9px]"> 12 ساعت قبل </p>
        </div>
      </div>

      <MdOutlineKeyboardArrowLeft
        onClick={navigateBack}
        className="text-white !p-0"
        size={31}
      />
    </div>
  );
};

export default UserInfoStory;
