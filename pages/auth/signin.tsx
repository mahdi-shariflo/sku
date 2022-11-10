import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@mui/material";
import {
  getProviders,
  signIn,
  useSession,
} from "next-auth/react";
import { GetServerSideProps } from "next";
import Router, { useRouter } from "next/router";
import Input from "../../components/Input";
import { Formik } from "formik";
import * as Yup from "yup";
import { getUsers } from "../../utils/API";
import OrLine from "../../components/auth/OrLine";
import Header from "../../components/auth/Header";
import BtnGoogle from "../../components/auth/BtnGoogle";
import FormSignin from "../../components/auth/FormSignin";




const SignIn = ({ providers }: { providers: any }) => {
  const {
    push,
    query: { error },
  } = useRouter();
  const session = useSession();

  useEffect(() => {
    // @ts-ignore
    if (session.data?.user) {
      Router.push("/");
    }
    if (error) {
      push({
        pathname: "/auth/error",
        query: { error },
      });
    }
  }, [session, error]);

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
    const res = await signIn("credentials", option);
  };
  return (
   
    <div className={`contaner-signin background-image`}>
      <div className="tag-wrap z-50 w-full md:flex-[2]">
        <div className="form h-full w-full  bg-[#282A37] p-4">
          {/* header menu */}
          <Header />
          <div className="flex justify-center w-full md:w-[50%] lg:w-[40%] mt-14 mx-auto flex-col">
            {/* @ts-ignore */}
            {Object.values(providers).map(
              (provider: any) => {
                if (provider.name === "Credentials") return;
                return <BtnGoogle key={provider.name} provider={provider} />;
              }
            )}
            {/* or */}
            <OrLine />
            <FormSignin  />
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

export const getServerSideProps: GetServerSideProps =
  async (context) => {
    const providers = await getProviders();
    return {
      props: { providers },
    };
  };
