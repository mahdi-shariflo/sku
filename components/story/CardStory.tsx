import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";
import { IconButton } from "@mui/material";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import UserInfoStory from "./UserInfoStory";
interface props {
  src: any;
}
const CardStory = ({ src }: props) => {
  return (
    <div className="w-full h-full">
      <UserInfoStory />
      <div className="relative w-full h-[75%] mt-3">
        <Image
          layout="fill"
          src={src}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default CardStory;
