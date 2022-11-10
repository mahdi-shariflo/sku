import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import Logo from "../../../public/image/logo.png";

const CardRequest = () => {
  return (
    <div className="mt-5 border-b pb-4 border-gray-100">
      <div className="flex gap-2 text-xs items-center">
        <Image
          width={40}
          height={40}
          src={Logo}
          className="overflow-hidden rounded-lg"
          alt="م"
        />
        <div className="flex gap-1">
          <p className="text-[14px] text-[#4F5E71]">
            مهدی شریفلو
          </p>
          <span className="text-[#6F7784]">
            می خواهد به دوستان شما اضافه شود
          </span>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <Button
          sx={{
            fontFamily: "sansBold",
            border: "1px solid #eee",
          }}
          className="reject-request"
          variant="contained"
        >
          رد کردن
        </Button>
        <Button
          sx={{ fontFamily: "sansBold" }}
          className="btn-accpect-request"
          variant="contained"
        >
          قبول کردن
        </Button>
      </div>
    </div>
  );
};

export default CardRequest;
