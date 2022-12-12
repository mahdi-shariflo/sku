import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@mui/material";
import { GetServerSideProps } from "next";
import Router, { useRouter } from "next/router";
import Input from "../../components/Input";
import { Formik } from "formik";
import * as Yup from "yup";
import Header from "../../components/auth/Header";
import FormSignin from "../../components/auth/FormSignin";

const SignIn = () => {
  const {
    push,
    query: { error },
  } = useRouter();

  interface valuesType {
    email: string;
    password: string;
  }

  const onSubmit = async ({
    email,
    password,
  }: valuesType) => {
    const option: any = {
      email: email,
      password: password,
      redirect: false,
    };
  };
  return (
    <div className={`contaner-signin background-image`}>
      <div className="tag-wrap z-50 w-full md:flex-[2]">
        <div className="form h-full w-full  bg-[#f5f5f5] p-4">
          {/* header menu */}
          <Header />
          <div className="flex gap-20 justify-center h-[70vh] w-full md:w-[50%] lg:w-[40%] mt-14 mx-auto flex-col">
            <h1 className="font-sansBlack text-black text-[17px]">
              برای ورود، لطفا ایمیل و رمز عبور خود را وارد
              کنید
            </h1>
            <FormSignin />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-1"></div>
      {/* overlay */}
      <div className="hidden md:block fixed z-20 w-full h-full bg-[#00000030]"></div>
    </div>
  );
};

export default SignIn;
