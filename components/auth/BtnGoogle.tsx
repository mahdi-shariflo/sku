"use client";

import { useEffect } from "react";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { propsBtnGoogle } from "../../typing";
import { btnGoogle } from "../../utils/styles";
import { useRouter } from "next/router";

function BtnGoogle({ provider }: propsBtnGoogle) {
  return (
    <div className="mb-2 w-full">
      <div>
        <h1 className="text-xl font-sansBlack text-white pb-3">
          ورود به وب اپلیکیشن هم شب
        </h1>
        <p className="font-yekan text-xs pb-5 text-[#9c9da2]">
          برای ورود میتوانید با اکانت جیمیل خود وارد شوید
        </p>
      </div>
      <Button
        style={btnGoogle}
        onClick={() => signIn(provider.id)}
        className="hover:!bg-gray-200 "
      >
        <span>ورود با اکانت گوگل</span>
        <FcGoogle size={23} />
      </Button>
    </div>
  );
}

export default BtnGoogle;
