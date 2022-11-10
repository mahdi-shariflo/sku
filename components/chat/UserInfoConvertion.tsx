import { Avatar } from "@mui/material";
import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Test from "./../../assest/image/test.jpg";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { getRecoil, setRecoil } from "recoil-nexus";
import { selectChat } from "../../atom/atom";
const UserInfoConvertion = () => {
  const router = useRouter();
  const backPrevPage = () => {
    setRecoil(selectChat, {});
    router.push("/chat")
  
  };
  return (
    <div className="bg-[#F5F7FB] w-[99%] mt-1 px-2  mx-auto flex justify-between items-center rounded-lg ">
      <div className="flex  items-center gap-2  py-2">
        <Avatar
          sx={{ width: 50, height: 50 }}
          alt="Remy Sharp"
          src={Test.src}
        />
        <div className="flex flex-col gap-2">
          <p className="text-[14px] text-[#323232]">
            مهدی شریفلو
          </p>
          <p className="text-[10px] yekanBold text-[#323232]">
            آنلاین
          </p>
        </div>
      </div>
      <IconButton
        onClick={backPrevPage}
        className="!w-14 !h-14 md:!w-10 md:!h-10 "
      >
        <MdOutlineKeyboardArrowLeft size={31} />
      </IconButton>
    </div>
  );
};

export default UserInfoConvertion;
