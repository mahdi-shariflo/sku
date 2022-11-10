
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import Error from "../../public/image/error.jpg";
import {
  AiOutlineReload,
  AiFillHome,
} from "react-icons/ai";
import { useRouter } from "next/router";
const Page = () => {
  const router = useRouter();
  const styles = {
    fontFamily: "sans",
    backgroundColor: "#0096f5",
    color: "#fff",
    fontSize: "12px",
    padding: "9px 18px",
    borderRadius: "7px",
  };
  return (
    <div className="h-screen w-screen flex flex-col gap-10 justify-center bg-white items-center">
      <h1 className="font-sansBlack text-2xl text-black">
        مشکلی در احراز هویت شما پیش آماده است
      </h1>
      <Image
        width={600}
        height={400}
        src={Error}
        placeholder="blur"
        alt="Error auth"
      />
      <div className="flex gap-12">
        <Button
          onClick={() => router.push("/auth/signin")}
          style={styles}
          className="border-2 border-white shadow-lg"
        >
          <AiOutlineReload className="ml-1" size={20} />
          تلاش دوباره
        </Button>
        <Button
          onClick={() => router.push("/")}
          style={styles}
          className="border-2 border-white shadow-lg"
        >
          <AiFillHome className="ml-1" size={18} />
          بازگشت به خانه
        </Button>
      </div>
    </div>
  );
};

export default Page;
