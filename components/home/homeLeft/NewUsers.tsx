import Image from "next/image";
import React from "react";
import Logo from "../../../public/image/logo.png";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const NewUesrs = () => {
  return (
    <div className="container-card max-h-[250px] overflow-auto scroll-style">
      <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-5">
        <p>کاربران جدید</p>
        <p>10</p>
      </div>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
};

export default NewUesrs;

const Card = () => {
  return (
    <div className="flex  text-xs items-center justify-between mt-4">
      <div className="flex gap-2 items-center">
        <Image
          width={40}
          height={40}
          src={Logo}
          className="overflow-hidden rounded-lg"
          alt="م"
        />

        <p>مهدی شریفلو</p>
      </div>
      <IconButton className="!p-0">
        <MoreVertIcon sx={{ fontSize: 19 }} />
      </IconButton>
    </div>
  );
};
